import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store form data as user types
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    city: '',
    province: '',
    postalCode: ''
  });

  // State to store submitted data (null until form is submitted)
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes - updates formData as user types
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    setSubmittedData(formData); // Save the form data to display it
  };

  return (
      <div className="App">
        <h1>Data Entry Form</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
            />
          </div>

          <div className="form-group">
            <label>Full Name:</label>
            <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter full name"
                required
            />
          </div>

          <div className="form-group">
            <label>Address:</label>
            <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City:</label>
              <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  required
              />
            </div>

            <div className="form-group">
              <label>Province:</label>
              <input
                  type="text"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  placeholder="Enter province"
                  required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Postal Code:</label>
            <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="Enter postal code"
                required
            />
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>

        {/* Display submitted data - only shows after Submit is clicked */}
        {submittedData && (
            <div className="submitted-data">
              <h2>Submitted Information</h2>
              <div className="data-display">
                <p><strong>Email:</strong></p>
                <p>{submittedData.email}</p>

                <p><strong>Full Name:</strong></p>
                <p>{submittedData.fullName}</p>

                <p><strong>Address:</strong></p>
                <p>{submittedData.address}</p>

                <p><strong>City:</strong></p>
                <p>{submittedData.city}</p>

                <p><strong>Province:</strong></p>
                <p>{submittedData.province}</p>

                <p><strong>Postal Code:</strong></p>
                <p>{submittedData.postalCode}</p>
              </div>
            </div>
        )}
      </div>
  );
}

export default App;