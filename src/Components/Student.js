import React, { useState } from 'react'
import CreateStudent from './CreateStudent';
import EditStudent from './EditStudent';
import StudentTable from './StudentTable';



const Student=()=> {
  const studentData=[
    {id:1,name:'San',sub:'Tamil',teacher:'Santhosh'},
    {id:2,name:'Nisha',sub:'English',teacher:'Sathish'},
    {id:3,name:'Shanthi',sub:'Maths',teacher:'Anitha'}
  ];
  const initialFormState ={id:null,name:'',sub:'',teacher:''};

  const [students,setStudents]=useState(studentData);
  const [editing,setEditing]=useState(false);
  const [currentStudent,setCurrentStudent]=useState(initialFormState);
  const addStudent=student =>{
    student.id = students.length+1;
    setStudents([...students,student]);

  };
  const editRow = student=>{
    setEditing(true);
    setCurrentStudent({id:student.id,name:student.name,sub:student.sub,teacher:student.teacher});

  };
  const deleteStudent=id=>{
    setEditing(false);
    setStudents(students.filter(student=>student.id !==id));
  };
  const updateStudent=(id,updateStudent)=>{
    setEditing(false);
    setStudents(students.map(student=>(student.id===id ? updateStudent:student)));
  };
  return (
<div className='container'>
  <h1 style={{textAlign:'center'}}>Student Information</h1>
  
  <div className='flex-row'>
    <div className='flex-large'>
      {editing ? (
        <div>
          <h3>Edit Student</h3>
          <EditStudent editing={editing}
          setEditing = {setEditing}
          currentStudent ={currentStudent}
          updateStudent ={updateStudent}
          />
          
           </div>
      ):(
        <div ><br/><br/>
          <h3>Add Student</h3>
          <CreateStudent addStudent={addStudent}/>
        </div>
      )}
    </div><br/><br/>
    <div className='flex-large'style={{paddingTop:100}}>
      <h3>View Student</h3>
        <StudentTable students={students} editRow={editRow} deleteStudent={deleteStudent}/>
    </div>

  </div>
</div>
    
    
  )
}

export default Student