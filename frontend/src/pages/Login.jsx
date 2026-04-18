import { Link } from 'react-router-dom'
import { useState } from 'react'
import { loginUser } from '../api/api';


export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password : ""     
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    
    setUser({
      ...user,
      [name]: value,
    });
  }

  // Handling the form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const {response, data} = await  loginUser(user.email, user.password);

      if (response.ok) {
        setSuccess(data.message || "Logged in successfully!");
        setUser({
          email: "",
          password: "",
        });
      } else {
        setError(data.message || "Login failed. Please check your Credentials.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
   
  }

   return ( 
      <form onSubmit={handleSubmit}>
    <div className="auth"> 
      <h2>Login to TravelX</h2>
      <p>Welcome back! Please sign in to your account.</p> 

      {error && <p style={{ color: "#ff4d4d", fontSize: "14px", margin: "8px 0" }}>{error}</p>}
      {success && <p style={{ color: "#4dff88", fontSize: "14px", margin: "8px 0" }}>{success}</p>}
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
      <button disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
      <p>Don't have an account? <Link to="/signup"> Sign up here </Link></p>
    </div>
      </form>
  ) 
}