import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react"; // Using Lucide React icons for a modern touch

// Simple component for displaying contact information
const ContactInfoItem = ({ Icon, title, content }) => (
  <div className="d-flex align-items-start mb-4">
    <div className="p-3 bg-primary text-white rounded-circle me-3 flex-shrink-0">
      <Icon size={24} />
    </div>
    <div>
      <h5 className="mb-0 fw-bold">{title}</h5>
      <p className="text-muted mb-0">{content}</p>
    </div>
  </div>
);

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // 'initial', 'submitting', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    // --- SIMULATED FORM SUBMISSION ---
    try {
      // In a real application, you would replace this with an API call:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // if (!response.ok) throw new Error('Submission failed');

      // Simulate successful API response delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form Data Sent:", formData);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
    }
  };

  const isFormDisabled = status === "submitting";

  return (
    <div className="container my-5 py-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold">Get In Touch</h1>
        <p className="lead text-muted">
          We're here to help! Send us a message or use the contact details
          below.
        </p>
      </header>

      <div className="row g-5">
        {/* --- Contact Form Section --- */}
        <div className="col-lg-7">
          <h2 className="mb-4">Send Us A Message</h2>

          {/* Submission Status Alerts */}
          {status === "success" && (
            <div className="alert alert-success" role="alert">
              Thank you for your message! We will get back to you shortly.
            </div>
          )}
          {status === "error" && (
            <div className="alert alert-danger" role="alert">
              Oops! Something went wrong. Please try again later or contact us
              directly via email.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isFormDisabled}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isFormDisabled}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={isFormDisabled}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isFormDisabled}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={isFormDisabled}
            >
              {isFormDisabled ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Sending...
                </>
              ) : (
                "Submit Message"
              )}
            </button>
          </form>
        </div>

        {/* --- Contact Information Section --- */}
        <div className="col-lg-5">
          <h2 className="mb-4">Contact Information</h2>
          <p className="text-muted mb-5">
            You can reach us directly using the details below during business
            hours.
          </p>

          <ContactInfoItem
            Icon={MapPin}
            title="Office Address"
            content="123 Web Dev Street, Suite 500, Tech City"
          />

          <ContactInfoItem
            Icon={Phone}
            title="Call Us"
            content="(555) 123-4567"
          />

          <ContactInfoItem
            Icon={Mail}
            title="Email Support"
            content="support@example.com"
          />

          <h5 className="mt-5 pt-3 border-top">Business Hours</h5>
          <p className="text-muted">
            Monday - Friday: 9:00 AM to 5:00 PM (EST)
          </p>
        </div>
      </div>

      {/* Optional: Embed a map */}
      <div className="row mt-5 pt-5">
        <div className="col-12">
          <h2 className="mb-4 text-center">Find Us</h2>
          {/* Replace this with an actual Google Maps or Leaflet embed */}
          <div className="bg-light border rounded" style={{ height: "400px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509736!2d144.9537363155046!3d-37.8166579797511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af1e57c8d9%3A0x6b44c6c2b1a1a7c3!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1617156157078!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Map Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
