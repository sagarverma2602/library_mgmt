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
    const [duration,setDuration]=useState(0)




    const printname=()=>{
        
        setUsers([...users,{id:v4(),userdata}])
        // localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(name))
        console.log(users)
    }
    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(users))

    },[users])
  return (
    <>
    r{userdata.name}
    <div>
        <h1>Student Registraion</h1>
    {/* <form>
        <table>
            <tr>
                <td>
                    Name:
                </td>
                <td>
                    <input type="text" placeholder="Name"/>
                </td>
            </tr>
            <tr>
                <td>
                    Phone Number:
                </td>   
                <td>
                    <input type="phone" placeholder="9876******"/>
                </td>
            </tr>
            <tr>
                <td>
                    Duration:
                </td>
                <td>
                    <input type="number" placeholder="In hours"/>
                </td>
                <td>
                    Time-Slot:
                </td>
                <td>
                    <input type="time"/>
                    <input type="time"/>
                </td>
            </tr>
            <tr>
                <td>
                    Floor:
                </td>
                <td>
                    <input type="radio" name="Floor"/>First
                    <input type="radio" name="Floor"/>Second
                </td>
                <td>
                    Seat-Number:
                </td>
                <td>
                    <input type="number" placeholder="Seat-Number"/>
                </td>
            </tr>
            <tr>
                <td>
                    Gender:
                </td>
                <td>
                    <input type="radio" name="Gender"/>Male
                    <input type="radio" name="Gender"/>Female
                </td>
            </tr>
            <tr>
                <td>
                    Date-of-joining:
                </td>
                <td>
                    <input type="date"/>
                </td>
            </tr>
            <tr>
                <td>
                    Address:
                </td>
                <td>
                    <textarea rows="3" cols="20" placeholder="Address"></textarea>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="submit" value="Submit"/>
                </td>
            </tr>
        </table>
    </form> */}
    <input type='text' onChange={(e)=>setUserData(...userdata,{name:e.target.value})} value={userdata.name} placeholder="Name"/>
    <br/>
    <input type='email' onChange={(e)=>setUserData([...userdata,{email:e.target.value}])} value={userdata.email} placeholder="Email"/>
    <br/>
    <input type='number' onChange={(e)=>setUserData([...userdata,{phone:e.target.value}])} value={userdata.phone} placeholder="Phone"/>
    <br/>
    <input type='number' onChange={(e)=>setUserData([...userdata,{duration:e.target.value}])} value={userdata.duration} placeholder="Duration"/>
    <br/>
    <input id="gender" value='Male' type="radio" name="Gender" onClick={(e)=>{
        setUserData([...userdata,{gender:e.target.value}])
    }}/>Male
    <input id="gender" value='Female' type="radio" name="Gender" onClick={(e)=>{
        setUserData([...userdata,{gender:e.target.value}])
    }}/>Female
    <button onClick={printname}>submit</button>
    

      </div>

    </>
  )
}

export default RegisterStudent