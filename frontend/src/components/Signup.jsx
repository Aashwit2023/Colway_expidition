
// This is the Signup component for the TravelX website, providing a form for user registration. Connected to src/App.jsx for routing, and src/style.css for styling.
import { Link } from 'react-router-dom' 
import { useState } from 'react'


export default function Signup() {

  const [user, setUser] = useState({
    fullname: "",
    email: "",
    password : "",
    // cnfm_passwrod: "",
     
  });

  console.log(user) // Print the data
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
    alert("Thank you for choosing us.");
  }
  return (
    <form onSubmit = {handleSubmit}>
    <div className="auth"> 
      <h2>Join TravelX</h2>
      <p>Create your account to start exploring amazing destinations.</p> 
      <input type="text" placeholder="Full Name" 
        name="fullname"
        value={user.fullname}
        onChange={handleInput}
        required /> 
      <input type="email" placeholder="Email" 
        name="email"
        value={user.email}
        onChange={handleInput}
        required /> 
      <input type="password" placeholder="Password" 
        name="password"
        value={user.password}
        onChange={handleInput}
        required /> 
      <input type="password" placeholder="Confirm Password" 
        name="cnfm_password"
        value={user.cnfm_password}
        onChange={handleInput}
        required /> 
      <div className="terms">
        <label> 
          <input type="checkbox" required /> 
          I agree to the <Link to=" /terms "> Terms and Conditions </Link> and <Link to=" /privacy "> Privacy Policy</Link> 
        </label> 
      </div> 
      <button>Create Account</button> 
      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </div>
    </form>
  ) 
}
