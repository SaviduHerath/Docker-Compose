import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function EditUserDetails() {

    const location = useLocation();
    const navigate = useNavigate();
    const [userName, setUserName] = useState(location.state?.name || '');
    const [userEmail, setUserEmail] = useState(location.state?.email ||'');
    const [userPassword, setUserPassword] = useState(location.state?.password ||'');
    function handleSave() {
        console.log('User Name:', userName);
        console.log('User Email:', userEmail);
        console.log('User Password:', userPassword);    

        axios.put(`http://localhost:4000/api/users/${location.state?._id}`, {
          name: userName,
          email: userEmail,
            password: userPassword
        }).then(response => {
          console.log('User updated successfully:', response.data); 
            navigate('/users');

        }).catch(error => {
          console.error('Error updating user:', error);
        }
        );

    }




  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
        <h1 className="text-3xl font-bold text-center text-white mb-2">Edit User</h1>

        <div className="space-y-5">
          {/* Name Input */}
          <div>
            <label htmlFor="userName" className="block text-gray-200 text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              id="userName"
              type="text"
              placeholder="e.g., John Doe"
              className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="userEmail" className="block text-gray-200 text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              id="userEmail"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="userPassword" className="block text-gray-200 text-sm font-medium mb-2">
              Password
            </label>
            <input
              id="userPassword"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button onClick={handleSave} className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800">
            Save Changes
          </button>

          
          </div>
        </div>
      </div>
   
  );
}