import { Link } from 'react-router-dom'
import { useState } from 'react'
import { loginUser } from '../api/api';
import loginimg from '../assets/loginimg.jpg';


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
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${loginimg})` }}
      >
        <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-16">
          <form onSubmit={handleSubmit} className="w-full max-w-[500px] rounded-3x p-6">
            <div className="auth"> 
              <h2 className="text-2xl font-bold text-white">Login to Colway Expeditions</h2>
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
                <label className="text-sm text-black/80">
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
        </div>
      </div>
  ) 
}