import { Route, Routes } from "react-router-dom"
import AddUser from "./components/AddUser"
import UsersDetails from "./components/UsersDetails"
import EditUserDetails from "./components/EditUserDetails"
function App() {
 

  return (
     <div className='w-full h-full '>
      
      <Routes>
        <Route path="/" element={<AddUser />} />
        <Route path="/users" element={<UsersDetails />} />
        <Route path="/edit-user" element={<EditUserDetails />} />
      </Routes>

   </div>
  )
}

export default App
