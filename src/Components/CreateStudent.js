import React, { useState } from 'react';
import '../Styles/CreateStudent.css'

const CreateStudent=props=>{
  const initialFormState ={id:null,name:"",sub:"",teacher:""};
  const [student,setStudent]=useState(initialFormState);
  const handleInputChange=event=>{
    const {name,value}=event.target;
    console.log(event.target)
    setStudent({...student,[name]:value});
  };
  return (
   
    <form className='createapp' onSubmit={event=>{
      event.preventDefault();
      if(!student.name || !student.sub || !student.teacher) return;
      props.addStudent(student);
      setStudent(initialFormState);
    }}>
      <lable style={{color:'black',display:'inline-block',text:'center'}}>Name:-</lable>
      <input type='text' name='name' value={student.name}onChange={handleInputChange} style={{paddingLeft:5,gap:10,marginRight:5}}/><br/><br/>
      <lable>Subject:-</lable>
      <input type='text' name='sub' value={student.sub}onChange={handleInputChange}style={{paddingLeft:5,gap:10,marginRight:5}}/><br/><br/>
      <lable>Teacher:-</lable>
      <input type='text' name='teacher' value={student.teacher} onChange={handleInputChange}style={{paddingLeft:5,gap:10,marginRight:5}}/><br/><br/>
      <button style={{marginRight:5,gap:5,width:100,backgroundColor:'green',color:'white'}}>Add Student</button>
    </form>
  )
}

export default CreateStudent