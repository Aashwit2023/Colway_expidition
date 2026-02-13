
// This is the Login component for the TravelX website, providing a form for user authentication. Connected to src/App.jsx for routing, and src/style.css for styling.
import { Link } from 'react-router-dom' // Imports Link component from react-router-dom for navigation. Connected to src/main.jsx for BrowserRouter setup.
import { useState } from 'react'


export default function Login() {
   // Defines and exports the Login function component, which renders the login form. Connected to src/App.jsx for routing to "/login".
  const [user, setUser] = useState({
    email: "",
    password : "",
     
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
    alert("Welcome back!!");
  }

   return ( // Returns the JSX structure for the login page.
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
    </div> // Closes auth div.
      </form>
  ) // Closes return statement.
} // Closes Login function.
