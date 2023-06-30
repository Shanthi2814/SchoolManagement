
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Teacher from './Components/Teacher';
import Student from './Components/Student';



function App() {
  return (
    <BrowserRouter>
      <div className='d-flex'>

        <div className='col-2 '>
          <Sidebar />
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/teachers' element={<Teacher />} />
            <Route path='/students' element={<Student />} />
          </Routes>


        </div>

      </div>
    </BrowserRouter>
  )
}

export default App