import { useState } from 'react';

export default function EnquireForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to backend)
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="mx-auto my-20 mt-[100px] w-full max-w-[400px] rounded-xl bg-white p-8 shadow-[0_2px_10px_rgba(0,0,0,0.3)] flex flex-col">
      <h2 className="mb-2.5 text-2xl font-bold text-gray-800">Enquire Now</h2>
      <p className="mb-5 text-sm text-gray-600">Fill in the details below and we'll get back to you.</p>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="mb-4 p-2.5 border border-gray-300 rounded focus:border-[#ff7a18] outline-none transition-all"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="mb-4 p-2.5 border border-gray-300 rounded focus:border-[#ff7a18] outline-none transition-all"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          className="mb-4 p-2.5 border border-gray-300 rounded focus:border-[#ff7a18] outline-none transition-all"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="mb-4 p-2.5 border border-gray-300 rounded focus:border-[#ff7a18] outline-none transition-all resize-y"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>
        <button 
          type="submit"
          className="mb-4 p-3 bg-[#ff7a18] hover:bg-[#e66a15] text-white text-lg rounded font-semibold transition-all cursor-pointer"
        >
          Submit Enquiry
        </button>
      </form>
    </div>
  );
}
