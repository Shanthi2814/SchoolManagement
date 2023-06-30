import React, { useEffect, useState } from 'react'

const EditStudent=props=> {
  const[student,setStudent]=useState(props.currentStudent);
  const handleInputChange=event=>{
    const{name,value}=event.target;
    setStudent({...student,[name]:value});
  };
  useEffect(()=>{
    setStudent(props.currentStudent);
  },[props]);
  return (
    <form onClick={event=>{
      event.preventDefault();
      props.updateStudent(student.id,student);

    }}>
      <lable>Name:-</lable>
      <input type='text' name='name' value={student.name}onChange={handleInputChange}/><br/><br/>
      <lable>Subject:-</lable>
      <input type='text' name='sub' value={student.sub}onChange={handleInputChange} className='sub'/><br/><br/>
      <lable>Teacher:-</lable>
      <input type='text' name='teacher' value={student.teacher} onChange={handleInputChange}/><br/><br/>
      <button style={{gap:5,marginRight:10,padding:5,color:'white',backgroundColor:'#008CBA'}}>Update</button>
      <button style={{gap:5,marginRight:10,padding:5,backgroundColor:'#008CBA',color:'white'}} onClick={()=>props.setEditing(false)} className='button muted-button'>Cancel</button>
    </form>
  );
};

export default EditStudent