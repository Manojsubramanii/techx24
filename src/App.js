import React, { useState } from "react";
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    degree: "",
    collegeName: "",
    contactNo: "",
    firstEvent: "",
    secondEvent: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Registration Successful!");
  };

  return (
    <div className="App">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Degree:</label>
          <select
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            required
          >
            <option value="ud">Undergraduate (UG)</option>
            <option value="pg">Postgraduate (PG)</option>
          </select>
        </div>

        <div>
          <label>College Name:</label>
          <input
            type="text"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Contact No:</label>
          <input
            type="text"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>TECHNICAL EVENTS:</label>
          <select
            name="firstEvent"
            value={formData.firstEvent}
            onChange={handleChange}
            required
          >
            <option value="">Select an event</option>
            <option value="event1">CODE CRACK(DEBUGGING)</option>
            <option value="event2">WEB MAESTRO(WEB DESIGN)</option>
            <option value="event3">QUIZ QUEST(QUIZ)</option>
            <option value="event4">INNOVEXHIBIT(IDEA PRESENTATION)</option>
          </select>
        </div>

        <div>
          <label>NON-TECHNICAL EVENTS:</label>
          <select
            name="secondEvent"
            value={formData.secondEvent}
            onChange={handleChange}
            required
          >
            <option value="">Select an event</option>
            <option value="event1">QUIET QUEST(DUMB CHARADES)</option>
            <option value="event2">TECH LINK(CONNECTION)</option>
            <option value="event3">BRAND BLAST(AD-ZAP)</option>
            <option value="event4">DESIGN DAZZLE(POSTER MAKING)</option>
          </select>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
