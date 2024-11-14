
import Signup from './components/Signup'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Profile from './components/Profile'
import Exam from './components/Exams'
import Head from './components/Head'
import Protect from './components/Protect';
import Dashboard from './components/Dashboard'
import { UserContext } from './context/contextapi'
import StudentForm from './components/StudentForm';
import { useState } from 'react'


function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Head />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
           <Route path="/student-form" element={<StudentForm />} />
          <Route path="/Dashboard" element={<Protect element={<Dashboard />} />} />
          <Route path="/profile" element={<Protect element={<Profile />} />} />
          <Route path="/Exams" element={<Protect element={<Exam/>} />} />
        </Routes>

      </UserContext.Provider>
    </div>
   
  )
}

export default App

{/* <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/Exams' element={<Exam/>}></Route> */}