import React, { useState } from 'react';



const CreateTeacher=props=>{
  const initialFormState ={id:null,name:"",sub:"",student:""};
  const [teacher,setTeacher]=useState(initialFormState);
  const handleInputChange=event=>{
    const {name,value}=event.target;
    console.log(event.target)
    setTeacher({...teacher,[name]:value});
  };
  return (
   
    <form className='createapp' onSubmit={event=>{
      event.preventDefault();
      if(!teacher.name || !teacher.sub || !teacher.student) return;
      props.addTeacher(teacher);
      setTeacher(initialFormState);
    }}>
      <lable style={{color:'black',display:'inline-block',text:'center'}}>Name:-</lable>
      <input type='text' name='name' value={teacher.name}onChange={handleInputChange} style={{paddingLeft:5,gap:10,marginRight:5}}/><br/><br/>
      <lable>Subject:-</lable>
      <input type='text' name='sub' value={teacher.sub}onChange={handleInputChange}style={{paddingLeft:5,gap:10,marginRight:5}}/><br/><br/>
      <lable>Teacher:-</lable>
      <input type='text' name='teacher' value={teacher.student} onChange={handleInputChange}style={{paddingLeft:5,gap:10,marginRight:5}}/><br/><br/>
      <button style={{marginRight:5,gap:5,width:100,backgroundColor:'green',color:'white'}}>Add teacher</button>
    </form>
  )
}

export default CreateTeacher