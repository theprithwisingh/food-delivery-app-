/*
import React, { useState, useContext } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { StoreContext } from '../../Context/StoreContext'
const LoginPopup = ({setShowLogin}) => {
     
  const {url,setToken} = useContext(StoreContext)

    const [currState,setCurrState] = useState('Sign Up')
    const [data, setData] = useState({
      name:"",
      email:"",
      password:""
    })
    const onChangeHandler=(event)=>{
       const name = event.target.name;
       const value = event.target.value;
       setData(data=>({...data,[name]:value}))
    }
    // useEffect(()=>{console.log(data)},[data]);

  const onLogin = async (event) => {
    event.preventDefault()
    let newUrl=url;
    if(currState==="login"){
      newUrl += "/api/user/login"
    } else{
      newUrl += "/api/user/register"
    }
    const response  = axios.post(newUrl,data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token",response.data.token);
      setShowLogin(false)
    }
    else{
      alert(response.data.mesage)
    }
  }
  
  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className='login-popup-title'>
         <h2>{currState}</h2>
         <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className='login-popup-inputs'>
        {currState==="login"?<></>:<input type="text" name="name" onChange={onChangeHandler} value={data.name} placeholder='your name' required/>}
        <input type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder='your email' required/>
        <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder='Password' required/>
        </div>
        <button type='submit'>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="login"?
        <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>click here</span></p>
        :
        <p>Already have an account? <span onClick={()=>setCurrState("login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}
export default LoginPopup;
*/

import React, { useState, useContext } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import axios from "axios"
import { StoreContext } from '../../Context/StoreContext'

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext)

  const [currState, setCurrState] = useState('Sign Up')
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  const onLogin = async (event) => {
    event.preventDefault()
    let newUrl = url;

    if (currState === "login") {
      newUrl += "/api/user/login"
    } else {
      newUrl += "/api/user/register"
    }
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message); // Fixed typo from 'maesage' to 'message'
      }
  }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState === "login" ? "Login" : "Sign Up"}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>

        <div className='login-popup-inputs'>
          {currState === "Sign Up" && (
            <input 
              type="text" 
              name="name" 
              onChange={onChangeHandler} 
              value={data.name} 
              placeholder='Your name' 
              required 
            />
          )}
          <input 
            type="email" 
            name="email" 
            onChange={onChangeHandler} 
            value={data.email} 
            placeholder='Your email' 
            required 
          />
          <input 
            type="password" 
            name="password" 
            onChange={onChangeHandler} 
            value={data.password} 
            placeholder='Password' 
            required 
          />
        </div>

        <button type='submit'>{currState === "Sign Up" ? "Create account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === "login" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("login")}>Login here</span></p>
        )}
      </form>
    </div>
  )
}

export default LoginPopup;
