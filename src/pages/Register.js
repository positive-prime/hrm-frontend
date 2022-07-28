import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import "../assets/css/log-in.css"
import {images} from "../API/images"
const Register=()=>{
	const navigate = useNavigate()
	const [email, setEmail]=useState("")
const [pswrd, setPswrd]=useState("")
const [cpswrd, setCPswrd]=useState("")
const [emailRegEx, setEmailRegex]=useState(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
const [pswrdRegEx, setPswrdRegex]=useState(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
const handleSubmit =(e)=>{
 e.preventDefault()
	console.log(email)
		if (!emailRegEx.test(email))
		{
			alert("You have entered an invalid email!")
			return false
		}
		if(!pswrdRegEx.test(pswrd))
		{
			alert("You have entered an invalid password!")
			return false
		}
		if((pswrd!=cpswrd))
		{
			alert("Password and repeat password must be same ")
			return false
		}
		if(emailRegEx.test(email) && pswrdRegEx.test(pswrd) &&(pswrd==cpswrd)){
			alert("Successfully registered !")
			navigate("/");
		}
	
	}
	
const	emailHandleChange=(e)=>{
	setEmail(e.target.value)

}
	const pswrdHandleChange=(e)=>{
		setPswrd(e.target.value)
	}
	const cpswrdHandleChange=(e)=>{
		setCPswrd(e.target.value)
	}
return(
	<div className='main-outer-div'>
			<div className='container'>
		<div className='logo'>
   <img src={images.logo}/>
		</div>
		<div className='login-form'>
  <div>
			<p className='heading'>Register</p>
			<p className='title'>Access to our dashboard</p>
		</div>
		<form onSubmit={handleSubmit}>
			<div className='form-group'>
  <label for="email" className='mb-1'>Email <span>*</span></label>
		<input type="email" id="#email" value={email} className={`form-control`} onChange={emailHandleChange}/>
			</div>
			<div className='form-group mt-4'>
  <label for="pswrd" className='mb-1'>Password <span>*</span></label>
		<input type="text" id="#pswrd" className='form-control' value={pswrd} onChange={pswrdHandleChange}/>
			</div>
			<div className='form-group mt-4'>
  <label for="cpswrd" className='mb-1'>Repeat Password <span>*</span></label>
		<input type="text" id="#cpswrd" className='form-control' value={cpswrd} onChange={cpswrdHandleChange}/>
			</div>
			<button type='submit'>Register</button>
		</form>
		<p className='register m-0'>Already have an account? <a href='#'> Login</a></p>
		</div>
	</div>
	</div>

)
}
export {Register}

