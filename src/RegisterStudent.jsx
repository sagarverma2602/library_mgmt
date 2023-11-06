import { useEffect, useState } from 'react'
import {v4} from 'uuid'



function RegisterStudent() {
    const LOCAL_STORAGE_KEY="users"
    const [users,setUsers]=useState(()=>{
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))||[]})
    const [userdata,setUserData]=useState({name:'',email:'',gender:'',phone:'',duration:''})




    const printname=()=>{
        setUsers([...users,{id:v4(),...userdata}])
        console.log(users)
    }
    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(users))
        setUserData({name:'',email:'',gender:'',phone:'',duration:''})

    },[users])
    
    const changehandler=(e)=>{
        setUserData((prev)=>{
            return {...prev,[e.target.name]:e.target.value}
        })
    }
  return (
    <>
    
    <div>
        <h1>Student Registraion</h1>
    
    <input name='name' type='text' onChange={changehandler} value={userdata.name} placeholder="Name"/>
    <br/>
    <input name="email" type='email' onChange={changehandler} value={userdata.email} placeholder="Email"/>
    <br/>
    <input name="phone" type='number' onChange={changehandler} value={userdata.phone} placeholder="Phone"/>
    <br/>
    <input name="duration" type='number' onChange={changehandler} value={userdata.duration} placeholder="Duration"/>
    <br/>
    <input id="gender"  value='Male' type="radio" name="gender" onChange={changehandler}/>Male
    <input id="gender" value='Female'  type="radio" name="gender" onChange={changehandler}/>Female
    <button onClick={printname}>submit</button>
    

      </div>

    </>
  )
}

export default RegisterStudent