import React, { useEffect, useState } from 'react'

const EditTeacher=props=> {
  const[teacher,setTeacher]=useState(props.currentTeacher);
  const handleInputChange=event=>{
    const{name,value}=event.target;
    setTeacher({...teacher,[name]:value});
  };
  useEffect(()=>{
    setTeacher(props.currentTeacher);
  },[props]);
  return (
    <form onClick={event=>{
      event.preventDefault();
      props.updateTeacher(teacher.id,teacher);

    }}>
      <lable>Name:-</lable>
      <input type='text' name='name' value={teacher.name}onChange={handleInputChange}/><br/><br/>
      <lable>Subject:-</lable>
      <input type='text' name='sub' value={teacher.sub}onChange={handleInputChange} className='sub'/><br/><br/>
      <lable>Student:-</lable>
      <input type='text' name='teacher' value={teacher.student} onChange={handleInputChange}/><br/><br/>
      <button style={{gap:5,marginRight:10,padding:5,color:'white',backgroundColor:'#008CBA'}}>Update</button>
      <button style={{gap:5,marginRight:10,padding:5,backgroundColor:'#008CBA',color:'white'}} onClick={()=>props.setEditing(false)} className='button muted-button'>Cancel</button>
    </form>
  );
};

export default EditTeacher