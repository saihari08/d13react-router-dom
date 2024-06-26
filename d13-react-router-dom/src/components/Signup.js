import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
<div className='App'>
<form>
    <h2>Signup</h2>
    <div> 
        <ladel>First Name</ladel>
        <input></input>
    </div>

    <div> 
        <ladel>Last Name</ladel>
        <input></input>
    </div>     
        
    <div> 
        <ladel>Password</ladel>
        <input></input>
    </div>
        
    <div> 
        <ladel>Email-id</ladel>
        <input></input>
    </div>
        
    <div> 
        <ladel>Phone-No</ladel>
        <input></input>
    </div>
        
    <div> 
        <ladel>Address</ladel>
        <input></input>
    </div>
    <button>Create Account</button>
    
</form>
<br></br>
    <Link to="/">Signin</Link>
</div>
  )
}

export default Signup
