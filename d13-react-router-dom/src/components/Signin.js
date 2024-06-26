import React from 'react'
import {Link} from "react-router-dom";

function Signin() {
  return (
<div className='App'>
<form>
    <h2>Login</h2>
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
    
    <Link to="/dashboard">Login</Link>
 </div>
 </form>
 <br></br>
 <Link to="/signup">Create Account</Link>
</div>
  )
}

export default Signin
