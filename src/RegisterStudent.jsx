import { useEffect, useState } from 'react'
import {v4} from 'uuid'



function RegisterStudent() {
    const LOCAL_STORAGE_KEY="users"
    const [users,setUsers]=useState(()=>{
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))||[]})
    const [userdata,setUserData]=useState({name:'',email:'',gender:'',phone:'',duration:''})
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [gender,setGender]=useState('')
    const [duration,setDuration]=useState('')




    const printname=()=>{
        setUsers([...users,{id:v4(),...userdata}])
        console.log(users)
    }
    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(users))
        setUserData({name:'',email:'',gender:'',phone:'',duration:''})

    },[users])
    

  return (
    <>
    r{userdata.name}
    <div>
        <h1>Student Registraion</h1>
    
    <input type='text' onChange={(e)=>{
        setUserData((prev)=>{
            return {...prev,name:e.target.value}
        })
    }} value={userdata.name} placeholder="Name"/>
    <br/>
    <input type='email' onChange={(e)=>{
        setUserData((prev)=>{
            return {...prev,email:e.target.value}
        })
    }} value={userdata.email} placeholder="Email"/>
    <br/>
    <input type='number' onChange={(e)=>{
        setUserData((prev)=>{
            return {...prev,phone:e.target.value}
        })
    }} value={userdata.phone} placeholder="Phone"/>
    <br/>
    <input type='number' onChange={(e)=>{
        setUserData((prev)=>{
            return {...prev,duration:e.target.value}
        })
    }} value={userdata.duration} placeholder="Duration"/>
    <br/>
    <input id="gender" value='Male' type="radio" name="Gender" onChange={(e)=>{
        setUserData((prev)=>{
            return {...prev,gender:e.target.value}
        })
    }}/>Male
    <input id="gender" value='Female' type="radio" name="Gender" onChange={(e)=>{
        setUserData((prev)=>{
            return {...prev,gender:e.target.value}
        })
    }}/>Female
    <button onClick={printname}>submit</button>
    

      </div>

    </>
  )
}

export default RegisterStudent