import { useState } from 'react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { requestCallback } from '../api/api';
import cllbck from '../assets/cllbck.jpg';
import toast from 'react-hot-toast';

export default function Enquire() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    whatsapp: "",
    city: "",
    experience: "",
    concerns: [],
    month: "",
    region: "",
    specialProgram: "",
    treks: "",
    call: "",
    slots: ""
  });

  const [loading, setLoading] = useState(false);


  const cityOptions = [
    { value: "Delhi", label: "Delhi" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Bangalore", label: "Bengaluru" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Ahmedabad", label: "Ahmedabad" },
    { value: "Chennai", label: "Chennai" },
    { value: "Kolkata", label: "Kolkata" },
    { value: "Pune", label: "Pune" },
    { value: "Jaipur", label: "Jaipur" },
    { value: "Lucknow", label: "Lucknow" },
    { value: "Kanpur", label: "Kanpur" },
    { value: "Nagpur", label: "Nagpur" },
    { value: "Indore", label: "Indore" },
    { value: "Bhopal", label: "Bhopal" },
    { value: "Patna", label: "Patna" },
    { value: "Chandigarh", label: "Chandigarh" },
    { value: "Surat", label: "Surat" },
    { value: "Vadodara", label: "Vadodara" },
    { value: "Ranchi", label: "Ranchi" },
    { value: "Dehradun", label: "Dehradun" },
    { value: "Noida", label: "Noida" },
    { value: "Gurgaon", label: "Gurugram" },
    { value: "Ghaziabad", label: "Ghaziabad" },
    { value: "Faridabad", label: "Faridabad" },
    { value: "Varanasi", label: "Varanasi" },
    { value: "Amritsar", label: "Amritsar" },
    { value: "Mysore", label: "Mysuru" },
    { value: "Coimbatore", label: "Coimbatore" },
    { value: "Madurai", label: "Madurai" },
    { value: "Visakhapatnam", label: "Visakhapatnam" },
  ];

  const trekOptions = [
    { value: "Himachal Pradesh", label: "Himachal Pradesh" },
    { value: "Uttarakhand", label: "Uttarakhand" },
    { value: "Jammu & Kashmir", label: "Jammu & Kashmir" },
    { value: "Eastern India", label: "Eastern India" },
    { value: "Southern India", label: "Southern India" },
    { value: "Central India", label: "Central India" },
    { value: "International treks", label: "International treks" },
  ];
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => {
        const updated = prev.concerns.includes(value)
          ? prev.concerns.filter((c) => c !== value)
          : [...prev.concerns, value];
        return { ...prev, concerns: updated };
      });
    } else if (type === "select-multiple") {
      const options = [...e.target.selectedOptions].map((o) => o.value);
      setFormData({ ...formData, [name]: options });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleDateChange = (date) => {
    if (date) {
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      // Store as YYYY-MM which is standard for backend Date casting
      setFormData({ ...formData, month: `${year}-${month}` });
    } else {
      setFormData({ ...formData, month: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Form data", formData);
    // send to your backend or API

    try {
      const { response, data } = await requestCallback(formData);
      if (response.ok) {
        toast.success(data.message || "Request submitted successfully! We will get back to you soon.");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          whatsapp: "",
          city: "",
          experience: "",
          concerns: [],
          month: "",
          region: "",
          specialProgram: "",
          treks: "",
          call: "",
          slots: ""
        });
      } else {
        toast.error(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = 
    formData.firstName && 
    formData.lastName && 
    formData.email && 
    formData.phone && 
    formData.whatsapp && 
    formData.city && 
    formData.experience && 
    formData.month && 
    formData.region && 
    formData.treks && 
    formData.call && 
    formData.slots;

  return (
    <div
      className="flex min-h-screen items-start justify-center bg-cover bg-center bg-fixed py-10 px-4"
      style={{ backgroundImage: `url(${cllbck})` }}
    >
      <form
        className="flex w-full max-w-[700px] flex-col rounded-xl bg-white/95 p-6 md:p-10 shadow-2xl font-serif"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-3xl md:text-4xl font-bold text-[#160e83] mb-2">Request a callback?</h1>
        <h2 className="text-center text-xl md:text-2xl font-medium text-gray-800 mb-6">Plan Your Himalayan Trek With Us</h2>

        <h6 className='text-center text-sm text-gray-600 mb-8 px-2'>
          We’ll help you choose the right one, find the best season, and prepare well.
          Schedule a call with our Trek Advisors for personalised guidance.
          We’ll reach out during your preferred time within Mon–Fri, 9:30 AM–6:30 PM.
        </h6>

        <label className="block mt-4 font-semibold text-gray-800 text-lg">
          Name <span className="text-red-500 font-bold ml-1">*</span>
        </label>
        <div className="flex flex-col md:flex-row gap-4 mt-2">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full p-2.5 border border-gray-300 rounded focus:border-[#f3b322] focus:ring-2 focus:ring-[#f3b322]/20 outline-none transition-all"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full p-2.5 border border-gray-300 rounded focus:border-[#f3b322] focus:ring-2 focus:ring-[#f3b322]/20 outline-none transition-all"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <label className="block mt-4 font-semibold text-gray-800 text-lg">
          Email <span className="text-red-500 font-bold ml-1">*</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mt-2 p-2.5 border border-gray-300 rounded focus:border-[#f3b322] focus:ring-2 focus:ring-[#f3b322]/20 outline-none transition-all"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="flex-1">
            <label className="block font-semibold text-gray-800 text-lg">
              Phone <span className="text-red-500 font-bold ml-1">*</span>
            </label>
            <div className="mt-2">
              <PhoneInput
                country={"in"}
                value={formData.phone}
                onChange={(value) => setFormData({ ...formData, phone: value })}
                inputProps={{
                  name: "phone",
                  required: true,
                }}
                containerStyle={{ width: '100%' }}
                inputStyle={{ 
                  width: '100%', 
                  height: '42px', 
                  fontSize: '14px', 
                  borderRadius: '4px',
                  border: '1px solid #ccc'
                }}
                buttonStyle={{
                  borderRadius: '4px 0 0 4px',
                  border: '1px solid #ccc',
                  borderRight: 'none',
                  backgroundColor: '#f5f5f5'
                }}
              />
            </div>
          </div>

          <div className="flex-1">
            <label className="block font-semibold text-gray-800 text-lg">
              Whatsapp Number <span className="text-red-500 font-bold ml-1">*</span>
            </label>
            <div className="mt-2">
              <PhoneInput
                country={"in"}
                value={formData.whatsapp}
                onChange={(value) => setFormData({ ...formData, whatsapp: value })}
                inputProps={{
                  name: "whatsapp",
                }}
                containerStyle={{ width: '100%' }}
                inputStyle={{ 
                  width: '100%', 
                  height: '42px', 
                  fontSize: '14px', 
                  borderRadius: '4px',
                  border: '1px solid #ccc'
                }}
                buttonStyle={{
                  borderRadius: '4px 0 0 4px',
                  border: '1px solid #ccc',
                  borderRight: 'none',
                  backgroundColor: '#f5f5f5'
                }}
                required={true}
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <label className="block font-semibold text-gray-800 text-lg mb-2">
            Which City are you from? <span className="text-red-500 font-bold ml-1">*</span>
          </label>
          <Select
            options={cityOptions}
            value={cityOptions.find(option => option.value === formData.city)}
            onChange={(selected) =>
              setFormData({ ...formData, city: selected?.value })
            }
            placeholder="Search & Select City"
            isSearchable
            styles={{
              control: (base) => ({
                ...base,
                borderColor: '#ccc',
                minHeight: '42px',
                '&:hover': { borderColor: '#f3b322' }
              })
            }}
          />
        </div>

        <label className="block mt-4 font-semibold text-gray-800 text-lg">
          Do you have previous trekking experience? <span className="text-red-500 font-bold ml-1">*</span>
        </label>
        <div className='flex flex-col gap-2 mt-2'>
          {["First Trek", "1-2 Treks", "3+ Treks"].map((exp) => (
            <label key={exp} className='flex items-center gap-3 cursor-pointer text-sm md:text-base'>
              <input
                type="radio"
                name="experience"
                value={exp}
                checked={formData.experience === exp}
                onChange={handleChange}
                className="w-4 h-4 text-[#ff7a18] focus:ring-[#ff7a18]"
              />
              {exp === "First Trek" ? "No, this is my first trek" : exp === "1-2 Treks" ? "Yes, 1-2 treks" : "Yes, 3 or more treks"}
            </label>
          ))}
        </div>

        <label className="block mt-4 font-semibold text-gray-800 text-lg">
          Any specific concerns you want us to help with?
        </label>
        <div className="flex flex-col gap-2 mt-2">
          {["Fitness", "Gear", "Altitude"].map((concern) => (
            <label key={concern} className="flex items-center gap-3 cursor-pointer text-sm md:text-base">
              <input 
                type="checkbox" 
                name='concerns' 
                value={concern} 
                checked={formData.concerns.includes(concern)} 
                onChange={handleChange} 
                className="w-4 h-4 rounded text-[#ff7a18] focus:ring-[#ff7a18]"
              /> 
              {concern}
            </label>
          ))}
        </div>

        <div className="mt-4">
          <label className="block font-semibold text-gray-800 text-lg mb-2">
            Which month are you planning for? <span className="text-red-500 font-bold ml-1">*</span>
          </label>
          <div className="w-full md:w-1/2">
            <DatePicker
              selected={formData.month ? new Date(formData.month + "-01") : null}
              onChange={handleDateChange}
              dateFormat="MM/yyyy"
              showMonthYearPicker
              showFullMonthYearPicker
              placeholderText="Select Month-Year"
              className="w-full p-2.5 border border-gray-300 rounded focus:border-[#f3b322] focus:ring-2 focus:ring-[#f3b322]/20 outline-none transition-all"
              required
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block font-semibold text-gray-800 text-lg mb-2">
            In which region are you planning your trek? <span className="text-red-500 font-bold ml-1">*</span>
          </label>
          <Select
            options={trekOptions}
            placeholder="Search & Select Region"
            isSearchable={true}
            value={trekOptions.find(option => option.value === formData.region)}
            onChange={(selected) =>
              setFormData({ ...formData, region: selected?.value })
            }
            styles={{
              control: (base) => ({
                ...base,
                borderColor: '#ccc',
                minHeight: '42px',
                '&:hover': { borderColor: '#f3b322' }
              })
            }}
          />
        </div>

        <label className="block mt-4 font-semibold text-gray-800 text-lg">
          Are you looking for a special program? If yes, then which?
        </label>
        <select 
          name="specialProgram" 
          value={formData.specialProgram} 
          onChange={handleChange}
          className="w-full md:w-3/5 mt-2 p-2.5 border border-gray-300 rounded focus:border-[#f3b322] outline-none transition-all bg-white"
        >
          <option value="">Select Program</option>
          <option>Corporate Trek</option>
          <option>School Trek</option>
          <option>Custom Expedition</option>
          <option>Family Trek with Children</option>
          <option>Seniors Trek</option>
        </select>

        <div className="mt-4">
          <label className="block font-semibold text-gray-800 text-lg mb-2">
            Treks <span className="text-red-500 font-bold ml-1">*</span>
          </label>
          <select 
            name="treks" 
            value={formData.treks} 
            onChange={handleChange} 
            required
            className="w-full md:w-1/2 p-2.5 border border-gray-300 rounded focus:border-[#f3b322] outline-none transition-all bg-white"
          >
            <option value="">Select Trek</option>
            <option>Hampta Pass</option>
            <option>Valley of Flowers</option>
            <option>Sandakphu Trek</option>
            <option>Kedarkantha Trek</option>
          </select>
        </div>

        <label className="block mt-4 font-semibold text-gray-800 text-lg">
          Do you want a call from us? <span className="text-red-500 font-bold ml-1">*</span>
        </label>
        <div className="flex gap-10 mt-2">
          {["Yes", "No"].map((choice) => (
            <label key={choice} className="flex items-center gap-3 cursor-pointer text-sm md:text-base">
              <input 
                type="radio" 
                name="call" 
                value={choice} 
                checked={formData.call === choice} 
                onChange={handleChange} 
                required 
                className="w-4 h-4 text-[#ff7a18] focus:ring-[#ff7a18]"
              /> 
              {choice}
            </label>
          ))}
        </div>

        <div className="mt-4">
          <label className="block font-semibold text-gray-800 text-lg mb-2">
            Please choose a time slot based on your availability <span className="text-red-500 font-bold ml-1">*</span>
          </label>
          <select 
            name="slots" 
            value={formData.slots} 
            onChange={handleChange} 
            required
            className="w-full p-2.5 border border-gray-300 rounded focus:border-[#f3b322] outline-none transition-all bg-white"
          >
            <option value="">Select slots</option>
            <option value="11:00 AM to 01:00 PM IST">11 : 00 AM to 01 : 00 PM IST</option>
            <option value="Not available on above timings">Not available on above timings</option>
          </select>
        </div>

        <div className="flex justify-center mt-6 transition-all duration-300">
          {!isFormValid && (
            <div className="text-red-500 font-bold text-md text-center">
              Please fill all required fields
            </div>
          )}
        </div>

        <button 
          type="submit" 
          disabled={!isFormValid || loading}
          className={`w-full mt-4 p-3 rounded-md text-white font-bold text-lg transition-all duration-300 ${
            !isFormValid || loading 
              ? 'bg-gray-400 cursor-not-allowed opacity-50' 
              : 'bg-[#ff7a18] hover:bg-[#e66a15] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
          }`}
        >
          {loading ? "Submitting..." : "Request Callback"}
        </button>
      </form>
    </div>
  );
}
