
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Assuming you're using React Router for navigation
// import Login from './Login';
function Signup() {
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword]= useState()
  const navigate = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
      try{
        const result = axios.post('http://localhost:5000/users',{name,email,password});
        console.log(result)
        navigate('/login')
      }
      catch (error){
        console.log(error)
      }
    }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
            //   value={formData.name}
            onChange={(e)=>setName(e.target.value)}
          
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
           
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
            //   value={formData.password}
            onChange={(e)=>setPassword(e.target.value)}
          
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <Link to={'/Login'} className="text-indigo-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
