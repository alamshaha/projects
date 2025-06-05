import React, { useState } from 'react';
// import './ContactPage.css'; // Optional: for styling

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';
    if (!formData.message) tempErrors.message = 'Message is required';
    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      // You can also send the form data via API call here
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="contact-page  ">
    <div className=" row p-4">
       <div className="col-sm-7">
        <div className="map-container" >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4155366189043!2d73.84862919999999!3d18.510115000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c073fb085985%3A0x33d11c2672e6f462!2sPerugate%2C%20Sadashiv%20Peth%2C%20Pune%2C%20Maharashtra%20411030!5e0!3m2!1sen!2sin!4v1749109042640!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
       </div>
       <div className="col-sm-5 padding-0 contact-form">
      <h4 className='alert alert-warning1 text-center text-bold'>CONTACT US</h4>     
     
    
      {submitted && <p className="success-message">Thanks for your message!</p>}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group ">
          <label>Name:</label>
          <input name="name" value={formData.name} className="form-control" onChange={handleChange} />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group  ">
          <label>Email:</label>
          <input name="email" value={formData.email}   className="form-control"onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group  ">
          <label>Subject:</label>
          <input name="subject" value={formData.subject}  className="form-control" onChange={handleChange} />
        </div>

        <div className="form-group ">
          <label>Message:</label>
          <textarea name="message" value={formData.message}  className="form-control" rows="6" onChange={handleChange} />
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
         <div className="form-group  text-center">
        <button type="submit"  className="btn btn-md btn-primary my-4 "> Send Message</button>
        </div>
      </form>
    </div>
    </div>
    </div>
  );
};

export default ContactPage;
