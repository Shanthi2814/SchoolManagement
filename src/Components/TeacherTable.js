import React from 'react'



const TeacherTable=props=>(
  <table className="bp4-html-table bp4-html-table-bordered 
  bp4-html-table-condensed bp4-html-table-striped">
    <thead className='heading'>
      <tr>
        <th>Name</th>
        <th>Subject</th>
        <th>Student</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {props.teachers.length >0 ?(
        props.teachers.map(teacher=>(
          <tr key={teacher.id}>
        <td>{teacher.name}</td>
        <td>{teacher.sub}</td>
        <td>{teacher.student}</td>
        <td>
          <button onClick={()=>{ props.editRow(teacher);}} className='button muted-button' style={{backgroundColor:'green',padding:3,width:50,gap:10,paddingRight:5,marginRight:5,color:'white'}}>
            Edit
            </button>
            <button onClick={()=>props.deleteStudent(teacher.id)} className='button muted-button'style={{backgroundColor:'red',padding:3,width:70,gap:10,paddingRight:5,color:'white'}}>
            Delete
            </button>
        </td>

      </tr>

        ))
      ):(
        <tr>
          <td colSpan={4}>No Teacher</td>
        </tr>
      )}
      
    </tbody>
  </table>
);

export default TeacherTable