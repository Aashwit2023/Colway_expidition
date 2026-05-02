import { useState } from "react";
import "../style.css"
import contactimg from '../assets/contact.jpg';

export default function ContactUs() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
    console.log(formData);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${contactimg})` }}
    >
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 md:py-16">
        <div className="w-full max-w-[900px] bg-white rounded-xl flex flex-col md:flex-row shadow-2xl overflow-hidden">

        {/* Left Section */}
        <div className="w-full md:w-[40%] p-6 md:p-10 bg-gray-50">

          <h2 className="text-xl md:text-2xl font-bold mb-4">Let's Talk</h2>

          <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
            Have some big idea or brand to develop and need help?
            Then reach out we'd love to hear about your project and provide help.
          </p>

          <div className="mb-6">
            <h4 className="font-semibold mb-1 text-sm md:text-base">Email</h4>
            <p className="text-gray-600 text-sm md:text-base">info@example.com</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2 text-sm md:text-base">Socials</h4>

            <div className="flex gap-4 mt-2">

              <span className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold cursor-pointer hover:bg-gray-300 text-sm">
                F
              </span>

              <span className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold cursor-pointer hover:bg-gray-300 text-sm">
                In
              </span>

              <span className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold cursor-pointer hover:bg-gray-300 text-sm">
                Ig
              </span>

            </div>
          </div>

        </div>

        {/* Right Section */}
        <div className="w-full md:w-[60%] p-6 md:p-10">

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-md focus:border-blue-600 outline-none text-sm md:text-base"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-md focus:border-blue-600 outline-none text-sm md:text-base"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-md focus:border-blue-600 outline-none text-sm md:text-base"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-md focus:border-blue-600 outline-none text-sm md:text-base"
            />

            <button
              type="submit"
              className="mt-2 p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm md:text-base"
            >
              Send message
            </button>

          </form>

        </div>

      </div>
      </div>
    </div>
  );
}