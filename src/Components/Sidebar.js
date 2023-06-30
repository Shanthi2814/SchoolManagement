import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link } from 'react-router-dom'


function Sidebar() {
  return (
    <div className='sidebar d-flex flex-column justify-content-between bg-dark text-white p-4 vh-100'>
      <div>
        <div className="d-flex align-items-center">
          <i class="bi bi-buildings-fill fs-2 me-3 " style={{ color: 'white' }}></i>
          <span style={{ color: 'white' }} className='fs-4'>School Admin</span>
        </div>
        <hr className='text-secondary mt-4' />
        <ul className='nav nav-pills flex-column p-0 m-0'>
          <li className='nav-items p-1'>
            <Link to='/' className='nav-link'>
              <i class="bi bi-speedometer2 fs-3 me-2" style={{ color: 'white' }}></i>
              <span style={{ color: 'white' }} className='fs-5'>Dashboard</span>
            </Link>
          </li>
          <li className='nav-items p-1'>
            <Link to='/teachers' className='nav-link'>
              <i class="bi bi-people-fill fs-3 me-2" style={{ color: 'white' }}></i>
              <span style={{ color: 'white' }} className='fs-5'>Teachers</span>
            </Link>
          </li>
          <li className='nav-items p-1'>
            <Link to='/students' className='nav-link'>
              <i class="bi bi-person-workspace fs-3 me-2" style={{ color: 'white' }}></i>
              <span style={{ color: 'white' }} className='fs-5'>Students</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar