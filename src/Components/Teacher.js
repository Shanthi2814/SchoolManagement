import React, { useState } from 'react'
import CreateTeacher from './CreateTeacher';
import EditTeacher from './EditTeacher';
import TeacherTable from './TeacherTable';




const Teacher=()=> {
  const teacherData=[
    {id:1,name:'Santhosh',sub:'Tamil',student:'San'},
    {id:2,name:'Sathish',sub:'English',student:'Nisha'},
    {id:3,name:'Anitha',sub:'Maths',student:'shanthi'}
  ];
  const initialFormState ={id:null,name:'',sub:'',student:''};

  const [teachers,setTeachers]=useState(teacherData);
  const [editing,setEditing]=useState(false);
  const [currentTeacher,setCurrentTeacher]=useState(initialFormState);
  const addTeacher=teacher =>{
    teacher.id = teachers.length+1;
    setTeachers([...teachers,teacher]);

  };
  const editRow = teacher=>{
    setEditing(true);
    setCurrentTeacher({id:teacher.id,name:teacher.name,sub:teacher.sub,student:teacher.student});

  };
  const deleteTeacher=id=>{
    setEditing(false);
    setTeachers(teachers.filter(teacher=>teacher.id !==id));
  };
  const updateTeacher=(id,updateTeacher)=>{
    setEditing(false);
    setTeachers(teachers.map(teacher=>(teacher.id===id ? updateTeacher:teacher)));
  };
  return (
<div className='container'>
  <h1 style={{textAlign:'center'}}>Teacher Information</h1>
  
  <div className='flex-row'>
    <div className='flex-large'>
      {editing ? (
        <div>
          <h3>Edit Teacher</h3>
          <EditTeacher editing={editing}
          setEditing ={setEditing}
          currentTeacher ={currentTeacher}
          updateTeacher ={updateTeacher}
          />
          
           </div>
      ):(
        <div ><br/><br/>
          <h3>Add Teacher</h3>
          <CreateTeacher addTeacher={addTeacher}/>
        </div>
      )}
    </div><br/><br/>
    <div className='flex-large'style={{paddingTop:100}}>
      <h3>View Teacher</h3>
        <TeacherTable teachers={teachers} editRow={editRow} deleteTeacher={deleteTeacher}/>
    </div>

  </div>
</div>
    
    
  )
}

export default Teacher