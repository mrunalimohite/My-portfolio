import { useState } from "react";
import './Contact.css';
import {
FaGithub,
FaLinkedinIn,
FaEnvelope,
FaLocationDot,
} from "react-icons/fa6"; 
import { FaPhoneAlt } from "react-icons/fa";
function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "", }); 
    const handleChange = (e) => { 
        setFormData({ 
            ...formData, [e.target.id]: e.target.value, 
        }); 
    }; 
    const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await fetch(
        "https://script.google.com/macros/s/AKfycbyDFEgILRFJHRtVpR2wziz9CD-em9DqhCyPedqRR7J2Y8tcT7FMtRj9UhYB4M34ttHyPA/exec",
        {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
    alert("Something went wrong!");
  }
};
    return (
        <section className="contact" id="contact">
            <div className="section-label">Contact</div>
            <h2 className="section-title centered">Let's <span>Connect</span></h2>
            <div className="contact-grid">
                <div className="contact-info">
                    <p>Have a project in mind or looking for a developer? I'd love to hear from you.</p>
                    <div className="contact-details">
                        <a href="mailto:mrunalimohite24@gmail.com"><FaEnvelope /> mrunalimohite24@gmail.com</a>
                        <a href="tel:+919082329207"><FaPhoneAlt /> +91 9082329207</a>
                        <span><FaLocationDot /> Mumbai, Maharashtra</span>
                    </div>
                    <div className="contact-social">
                        <a href="https://github.com/mrunalimohite" target="_blank"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/mrunali-mohite-78226b2ba" target="_blank"><FaLinkedinIn /></a>
                    </div>
                </div>
                <form className="contact-form" id="contactForm"  onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" value={formData.subject} onChange={handleChange}  placeholder="What's this about?" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Tell me about your project…" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary full-width">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;