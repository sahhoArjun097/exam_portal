import { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/contextapi';


function Login() {
  const { setUser } = useContext(UserContext); // Get the setter for user data
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:5000/login", { email, password })
  //     if (response.data.status === "success") {
  //       setUser(response.data.userData);
  //       navigate("/Home");

  //     }
  //     else {
  //       alert(response.data.message || "login failed");
  //     }
  //   }
  //   catch (error) {
  //     alert(" A error occure during login")
  //     console.log("error occuse", error)

  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      console.log(response.data); // Check the response data structure
      console.log("hello")
      if (response.data.status === "success") {
        // Set user data in context
        setUser(response.data.userData);
        navigate('/Dashboard'); // Redirect to home page
      } else {
        alert(response.data.message || "Login failed");
      }
    } catch (error) {
      alert("An error occurred during login");
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

