import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UsersDetails() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("http://localhost:4000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  return (
    <div className="min-h-screen w-full bg-gray-700 p-6">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          to={"/"}
          className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors text-sm font-medium"
        >
          ← Back to Home
        </Link>
        <h1 className="text-2xl font-bold text-white">Users Details</h1>
        <span className="text-gray-400 text-sm">{users.length} users</span>
      </div>

      {/* Table Container */}
      <div className="overflow-hidden rounded-xl shadow-lg border border-gray-600">
        <table className="min-w-full bg-gray-800 text-white">
          <thead>
            <tr className="bg-gray-900 text-gray-300 uppercase text-xs tracking-wider">
              <th className="py-4 px-6 text-left">ID</th>
              <th className="py-4 px-6 text-left">Name</th>
              <th className="py-4 px-6 text-left">Email</th>
              <th className="py-4 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {users.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="py-10 text-center text-gray-400 text-sm"
                >
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr
                  key={user._id}
                  className="hover:bg-gray-750 transition-colors duration-150 hover:bg-gray-700/60"
                >
                  <td className="py-3 px-6 text-gray-400 text-sm font-mono">
                    {user._id}
                  </td>
                  <td className="py-3 px-6 font-medium">{user.name}</td>
                  <td className="py-3 px-6 text-gray-300">{user.email}</td>
                  <td className="py-3 px-6 flex items-center gap-2">

                    <Link to={`/edit-user`} state= {{ ...user }} className="bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white text-sm font-semibold py-1.5 px-4 rounded-lg transition-colors duration-150">
                      Edit
                    </Link>
                

                    <button className="bg-red-600 hover:bg-red-500 active:bg-red-700 text-white text-sm font-semibold py-1.5 px-4 rounded-lg transition-colors duration-150"
                    onClick={() => {
                      window.confirm("Are you sure you want to delete this user?")
                      axios.delete(`http://localhost:4000/api/users/${user._id}`)
                      .then(() => {
                        fetchUsers(); // Refresh the user list after deletion 
                      }).catch((error) => {
                        console.error("Error deleting user:", error);
                       }) }} >
                      Delete
                     
                    </button>

                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}