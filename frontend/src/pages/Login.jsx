import { Link, useNavigate, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { loginUser } from '../api/api';
import loginimg from '../assets/loginimg.jpg';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';


export default function Login() {
  const { user: currentUser, login } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  }

  if (currentUser) {
    return <Navigate to="/" />
  }

  // Handling the form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { response, data } = await loginUser(user.email, user.password);

      if (response.ok) {
        localStorage.setItem('colwayAuthEmail', user.email);
        toast.success(data.message || "Logged in successfully!");
        login(data.user);
        setUser({
          email: "",
          password: "",
        });
        navigate('/');
      } else {
        toast.error(data.message || "Login failed. Please check your Credentials.");
      }
    } catch (err) {
      toast.error("An error occurred. Please try again later.");
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
        <form onSubmit={handleSubmit} className="w-full max-w-[450px]">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl flex flex-col">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Login to Colway Expeditions</h2>
            <p className="text-gray-600 mb-6 text-sm font-medium">Welcome back! Please sign in to your account.</p>
            <input type="email" name="email" placeholder="Email"
              className="mb-4 p-3 border border-gray-300 rounded-lg focus:border-[#ff7a18] focus:ring-2 focus:ring-[#ff7a18]/20 outline-none transition-all"
              value={user.email}
              onChange={handleInput}
              required />
            <input type="password" name="password" placeholder="Password"
              className="mb-4 p-3 border border-gray-300 rounded-lg focus:border-[#ff7a18] focus:ring-2 focus:ring-[#ff7a18]/20 outline-none transition-all"
              value={user.password}
              onChange={handleInput}
              required />
            <div className="flex justify-between items-center mb-6 text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-gray-700">
                <input type="checkbox" className="w-4 h-4 rounded text-[#ff7a18] focus:ring-[#ff7a18]" /> Remember me
              </label>
              <Link to="/forgot-password" title="Forgot password?" className="text-[#ff7a18] hover:underline font-medium">Forgot password?</Link>
            </div>
            <button
              disabled={loading}
              className={`w-full p-3 rounded-lg text-white font-bold text-lg transition-all duration-300 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#ff7a18] hover:bg-[#e66a15] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <p className="mt-6 text-center text-sm text-gray-600 font-medium">Don't have an account? <Link to="/signup" className="text-[#ff7a18] hover:underline font-bold ml-1"> Sign up here </Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}