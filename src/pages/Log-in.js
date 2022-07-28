import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

import { IoEyeSharp} from 'react-icons/io5';

import "../assets/css/log-in.css"
import {images} from "../API/images"
const LognIn=()=>{
const [email, setEmail]=useState("")
const [pswrd, setPswrd]=useState("")
const navigate = useNavigate()
const handleSubmit =(e)=>{
e.preventDefault()
if(email=="amjadmalikf53@gmail.com" && pswrd=="Azad@3653")
{
	console.log("logged in ")
	alert("logged in successfully")
	navigate("https://stackoverflow.com/questions/71499678/navigate-using-react-router-dom-v6-after-performing-user-action")
	return true
}
if(email!="amjadmalikf53@gmail.com")
{
	console.log("email is incorrect, failed logged in ")
	return false
}
if(pswrd!="Azad@3653")
{
	console.log("password is incorrcet, failed logged in ")
}
	
}


const	emailHandleChange=(e)=>{
		setEmail(e.target.value)

	}
	const pswrdHandleChange=(e)=>{
		setPswrd(e.target.value)
	}

return(
	<div className='main-outer-div'>
			<div className='container'>
		<div className='logo'>
   <img src={images.logo}/>
		</div>
		<div className='login-form'>
  <div>
			<p className='heading'>Login</p>
			<p className='title'>Access to our dashboard</p>
		</div>
		<form onSubmit={handleSubmit}>
			<div className='form-group'>
  <label for="email" className='mb-1'>Email Address</label>
		<input type="email" id="#email" value={email} className={`form-control`} onChange={emailHandleChange}/>
	
			</div>
			<div className='form-group mt-4'>
				<div  className='d-flex justify-content-between mb-1'><label for="pswrd" >Password</label><label for="email" className='forgat'><a href="#">Forgot Password?</a></label></div>
		<input type="text" id="#pswrd" value={pswrd} className='form-control' onChange={pswrdHandleChange}/>
		<span className="password-eye"><IoEyeSharp /></span>
			</div>
			<button type='submit' >Login</button>
		</form>
		<p className='register m-0'>Don't have an account yet? <a href='#'> Register</a></p>
		</div>
	</div>
	</div>

)
}
export {LognIn}

