import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password : "",
     
  });

  console.log(user)
  // handling the Input values
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;
    
    setUser({
      ...user,
      [name]: value,
    });
  }

  // Handling the form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Welcome back!!");
  }

   return ( 
      <form onSubmit={handleSubmit}>
    <div className="auth"> 
      <h2>Login to TravelX</h2> 
      <p>Welcome back! Please sign in to your account.</p> 
      <input type="email" name="email" placeholder="Email" 
        value = {user.email}
        onChange={handleInput}
        required /> 
      <input type="password" name= "password" placeholder="Password"
        value = {user.password}
        onChange={handleInput}
        required /> 
      <div className="remember-forgot"> 
        <label>
          <input type="checkbox" /> Remember me 
        </label> 
        <Link to="/forgot-password">Forgot password?</Link> 
      </div>
      <button>Login</button> 
      <p>Don't have an account? <Link to="/signup"> Sign up here </Link></p>
    </div>
      </form>
  ) 
}