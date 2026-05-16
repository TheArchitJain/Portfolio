import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "21dcdf49-e832-4ba7-bbda-20e8a2d0eb2e");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            setResult("Error");
        }
    };


    return (
        <div className="contact" id="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I am currently available to take new projects so feel free to contact me.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="Email Icon" />
                            <p>architjain3691@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="Location Icon" />
                            <p>Delhi, India</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="Call Icon" />
                            <p>(+91) 9058xxxxxx</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your name" name="name" required />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name="email" required />
                    <label htmlFor="">Your Message</label>
                    <textarea placeholder="Enter your message" name="message" rows="5" required></textarea>
                    <button className="contact-submit" type="submit">Submit Now</button>
                    {result && <p className="form-result">{result}</p>}
                </form>
            </div>
        </div>
    );
};

export default Contact;