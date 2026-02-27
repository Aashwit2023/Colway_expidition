import { useState } from 'react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";

export default function UserDataForm() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   interest: '',
  //   message: ''
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here (e.g., send to backend)
  //   console.log('User data submitted:', formData);
  //   alert('Thank you for sharing your details! We\'ll reach out with personalized travel recommendations soon.');
  //   // Reset form
  //   setFormData({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     interest: '',
  //     message: ''
  //   });
  // };

  // return (
  //   <div className="user-data-form">
  //     <h2>Discover Your Next Adventure</h2>
  //     <p>Share your details with us, and let's craft unforgettable travel experiences tailored just for you. Whether you're dreaming of mountain treks, beach getaways, or cultural explorations, we're here to make it happen!</p>
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         name="name"
  //         placeholder="Your Full Name"
  //         value={formData.name}
  //         onChange={handleChange}
  //         required
  //       />
  //       <input
  //         type="email"
  //         name="email"
  //         placeholder="Your Email Address"
  //         value={formData.email}
  //         onChange={handleChange}
  //         required
  //       />
  //       <input
  //         type="tel"
  //         name="phone"
  //         placeholder="Your Phone Number"
  //         value={formData.phone}
  //         onChange={handleChange}
  //         required
  //       />
  //       <select
  //         name="interest"
  //         value={formData.interest}
  //         onChange={handleChange}
  //         required
  //       >
  //         <option value="">Select Your Travel Interest</option>
  //         <option value="trekking">Trekking & Hiking</option>
  //         <option value="beach">Beach Holidays</option>
  //         <option value="cultural">Cultural Tours</option>
  //         <option value="adventure">Adventure Sports</option>
  //         <option value="wildlife">Wildlife Safaris</option>
  //         <option value="luxury">Luxury Travel</option>
  //       </select>
  //       <textarea
  //         name="message"
  //         placeholder="Tell us more about your dream trip or any specific preferences..."
  //         value={formData.message}
  //         onChange={handleChange}
  //         rows="5"
  //         required
  //       ></textarea>
  //       <button type="submit">Start Planning My Trip</button>
  //     </form>
  //     <p className="privacy-note">We respect your privacy and will only use your information to provide personalized travel suggestions.</p>
  //   </div>
  // );

  const [selectedRegion, setSelectedRegion] = useState(null);

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
    special: "",
    treks: []
  });


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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data", formData);
    // send to your backend or API
  };

  return (
    <form className="callback-form" onSubmit={handleSubmit}>
      <h1>Request a callback?</h1>
      <h2>Plan Your Himalayan Trek With Us</h2>

      <p>We’ll help you choose the right one, find the best season, and prepare well.
        Schedule a call with our Trek Advisors for personalised guidance.
        We’ll reach out during your preferred time within Mon–Fri, 9:30 AM–6:30 PM.</p>

      <label>Name <span className="required">*</span></label>
      <div className="row">
        <input
          type="text"
          name="firstName"
          placeholder="First Name "
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name "
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <label>Email <span className="required">*</span> </label>
      <input
        type="email"
        name="email"
        placeholder="Email "
        onChange={handleChange}
        required
      />

      <div className="row">
        <div className="phone-box">
          <label>Phone <span className="required">*</span></label>
          <PhoneInput
            country={"in"}
            enableSearch={true}
            disableSearchIcon={false}
            inputProps={{
              name: "phone",
              required: true,
            }}
            containerClass="phone-container"
            inputClass="phone-input"
            buttonClass="flag-button"
          />
        </div>

        <div className="phone-box">
          <label>Whatsapp Number</label>
          <PhoneInput
            country={"in"}
            enableSearch={true}
            disableSearchIcon={false}
            inputProps={{
              name: "whatsapp number",
              required: true,
            }}

            containerClass="phone-container"
            inputClass="phone-input"
            buttonClass="flag-button"
          />
        </div>
      </div>



      {/* City */}
      <div className="city-field">
        <label>
          Which City are you from? <span className="required">*</span>
        </label>

        <Select
          options={cityOptions}
          value={selectedRegion}
          onChange={setSelectedRegion}
          placeholder="Search & Select City"
          isSearchable={true}
          noOptionsMessage={() => "No options found"}
          classNamePrefix="custom-select"
        />
      </div>

      {/* Experience */}
      <label>Do you have previous trekking experience?</label>

      <div className='checkbox-group'>
        <label className="checkbox-line">
          <input
            type="checkbox"
            value="First Trek"
            onChange={handleChange}
          />
          <span> No, this is my first trek</span>
        </label>

        <label className="checkbox-line">
          <input
            type="checkbox"
            value="1-2 Treks"
            onChange={handleChange}
          />
          <span> Yes, 1-2 treks</span>
        </label>

        <label className="checkbox-line">
          <input
            type="checkbox"
            value="1-2 Treks"
            onChange={handleChange}
          />
          <span> Yes, 3 or more treks</span>
        </label>
      </div>

      {/* Concerns */}
      <label>Any specific concerns you want us to help with?</label>
      <div className="checkbox-row">
        <label className="checkbox-item"><input type="checkbox" value="Fitness" /> Fitness</label>
        <label className="checkbox-item"><input type="checkbox" value="Gear" /> Gear</label>
        <label className="checkbox-item"><input type="checkbox" value="Altitude" /> Altitude</label>
      </div>

      {/* Month */}
      <label>Which month are you planning for?</label>
      <input type="month" name="month" />

      {/* Region */}
      <label>
        In which region are you planning your trek?
        <span className="required">*</span>
      </label>
      <Select
        options={trekOptions}
        placeholder="Search & Select Trek"
        isSearchable={true}
        noOptionsMessage={() => "No options found"}
        onChange={(selected) => console.log(selected?.value)}
      />

      {/* Special Program */}
      <label>Are you looking for a special program? If yes, then which?</label>
      <select name="program">
        <option value="">Select Program</option>
        <option>Corporate Trek</option>
        <option>School Trek</option>
        <option>Custom Expedition</option>
        <option>Family Trek with Children</option>
        <option>Seniors Trek</option>
      </select>

      {/* Treks */}
      <div className="treks">
        <label>
          Treks <span className="required">*</span>
        </label>
        <select name="treks" required>
          <option value="">Select Trek</option>
          <option>Hampta Pass</option>
          <option>Valley of Flowers</option>
          <option>Sandakphu Trek</option>
          <option>Kedarkantha Trek</option>
        </select>
      </div>


      {/* Call Option */}
      <label>
        Do you want a call from us?
        <span className="required">*</span>
      </label>
      <div className="choice">
        <label className="choice-item"><input type="radio" name="call" value="Yes" required /> Yes</label>
        <label className="choice-item"><input type="radio" name="call" value="No" required /> No</label>
      </div>

      <div className="slots">
        <label>
          Please choose a time slot based on your availabilty
        </label>
        <select name="slots" required>
          <option value="">Select slots</option>
          <option value="">11 : 00 AM to 01 : 00 PM IST</option>
          <option>Not available on above timings</option>
          
        </select>
      </div>
      <button type="submit">Request Callback</button>
    </form>
  );


}
