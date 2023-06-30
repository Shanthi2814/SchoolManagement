import React from 'react'
import '../Styles/StudentTable.css'

const StudentTable=props=>(
  <table className="bp4-html-table bp4-html-table-bordered 
  bp4-html-table-condensed bp4-html-table-striped">
    <thead className='heading'>
      <tr>
        <th>Name</th>
        <th>Subject</th>
        <th>Teacher</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {props.students.length >0 ?(
        props.students.map(student=>(
          <tr key={student.id}>
        <td>{student.name}</td>
        <td>{student.sub}</td>
        <td>{student.teacher}</td>
        <td>
          <button onClick={()=>{ props.editRow(student);}} className='button muted-button' style={{backgroundColor:'green',padding:3,width:50,gap:10,paddingRight:5,marginRight:5,color:'white'}}>
            Edit
            </button>
            <button onClick={()=>props.deleteStudent(student.id)} className='button muted-button'style={{backgroundColor:'red',padding:3,width:70,gap:10,paddingRight:5,color:'white'}}>
            Delete
            </button>
        </td>

      </tr>

        ))
      ):(
        <tr>
          <td colSpan={4}>No Student</td>
        </tr>
      )}
      
    </tbody>
  </table>
);

export default StudentTable