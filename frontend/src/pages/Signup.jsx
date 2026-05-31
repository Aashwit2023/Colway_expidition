import { Link, useNavigate, Navigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { signUpUser } from '../api/api';
import signimg from '../assets/signimg.jpg';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthContext'

export default function Signup() {
  const { user: CurrentUser } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cnfm_password: ""
  });

  const [loading, setLoading] = useState(false);

  if (CurrentUser) {
    const from = location.state?.from || '/';
    const bookingState = location.state?.bookingState;
    return <Navigate to={from} state={{ bookingState }} replace />
  }

  // handling the Input values
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

    if (user.password !== user.cnfm_password) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const { response, data } = await signUpUser({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        cnfmPassword: user.cnfm_password,
      });

      // const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Account created successfully! Please log in.");
        setUser({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          cnfm_password: ""
        });
        navigate('/login', { state: location.state });
      } else {
        toast.error(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${signimg})` }}
    >
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20">
        <form onSubmit={handleSubmit} className="w-full max-w-[500px]">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl flex flex-col">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Join Colway Expeditions</h2>
            <p className="text-gray-600 mb-6 text-sm font-medium">Create your account to start exploring amazing destinations.</p>

            <input
              type="text"
              placeholder="First Name"
              className="mb-4 p-3 border border-gray-300 rounded-lg focus:border-[#ff7a18] focus:ring-2 focus:ring-[#ff7a18]/20 outline-none transition-all"
              name="firstname"
              value={user.firstname}
              onChange={handleInput}
              required
            />

            <input
              type="text"
              placeholder="Last Name"
              className="mb-4 p-3 border border-gray-300 rounded-lg focus:border-[#ff7a18] focus:ring-2 focus:ring-[#ff7a18]/20 outline-none transition-all"
              name="lastname"
              value={user.lastname}
              onChange={handleInput}
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="mb-4 p-3 border border-gray-300 rounded-lg focus:border-[#ff7a18] focus:ring-2 focus:ring-[#ff7a18]/20 outline-none transition-all"
              name="email"
              value={user.email}
              onChange={handleInput}
              required
            />

            <input
              type="password"
              placeholder="Password"
              className="mb-4 p-3 border border-gray-300 rounded-lg focus:border-[#ff7a18] focus:ring-2 focus:ring-[#ff7a18]/20 outline-none transition-all"
              name="password"
              value={user.password}
              onChange={handleInput}
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="mb-6 p-3 border border-gray-300 rounded-lg focus:border-[#ff7a18] focus:ring-2 focus:ring-[#ff7a18]/20 outline-none transition-all"
              name="cnfm_password"
              value={user.cnfm_password}
              onChange={handleInput}
              required
            />
            <div className="mb-6 text-sm">
              <label className="flex items-start gap-2 cursor-pointer text-gray-700">
                <input type="checkbox" required className="mt-1 w-4 h-4 rounded text-[#ff7a18] focus:ring-[#ff7a18]" />
                <span>
                  I agree to the <Link to="/terms" className="text-[#ff7a18] hover:underline font-medium">Terms and Conditions</Link> and <Link to="/privacy" className="text-[#ff7a18] hover:underline font-medium">Privacy Policy</Link>
                </span>
              </label>
            </div>
            <button
              disabled={loading}
              className={`w-full p-3 rounded-lg text-white font-bold text-lg transition-all duration-300 ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#ff7a18] hover:bg-[#e66a15] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                }`}
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
             <p className="mt-6 text-center text-sm text-gray-600 font-medium">Already have an account? <Link to="/login" state={location.state} className="text-[#ff7a18] hover:underline font-bold ml-1">Login here</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}
