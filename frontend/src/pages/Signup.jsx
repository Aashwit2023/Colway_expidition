import { Link } from 'react-router-dom'
import { useState } from 'react'
import { signUpUser } from '../api/api';
import signimg from '../assets/signimg.jpg';

export default function Signup() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cnfm_password: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
    setError("");
    setSuccess("");

    if (user.password !== user.cnfm_password) {
      setError("Passwords do not match");
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
        setSuccess(data.message || "Account created successfully!");
        setUser({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          cnfm_password: ""
        });
      } else {
        setError(data.message || "Signup failed. Please try again.");
      }
      alert("Thank you for choosing us.");
    } catch (error) {
      console.error(error);
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
        <form onSubmit={handleSubmit} className="w-full max-w-[500px] rounded-3xl  p-3">
          <div className="auth">
            <h2 className="text-3xl font-bold text-white mb-4">Join Colway Expeditions</h2>
            <p>Create your account to start exploring amazing destinations.</p>

            {error && <p style={{ color: "#ff4d4d", fontSize: "14px", margin: "8px 0" }}>{error}</p>}
            {success && <p style={{ color: "#4dff88", fontSize: "14px", margin: "8px 0" }}>{success}</p>}

            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              value={user.firstname}
              onChange={handleInput}
              required
            />

            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={user.lastname}
              onChange={handleInput}
              required
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              value={user.email}
              onChange={handleInput}
              required
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleInput}
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              name="cnfm_password"
              value={user.cnfm_password}
              onChange={handleInput}
              required
            />
            <div className="terms">
              <label className="text-sm text-black/80">
                <input type="checkbox" required />
                I agree to the  <Link to="/terms" className="mx-1"> Terms and Conditions </Link> and <Link to="/privacy" className="mx-1 text-blue-600 hover:underline">Privacy Policy</Link>
              </label>
            </div>
            <button disabled={loading}>{loading ? "Creating Account..." : "Create Account"}</button>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}
