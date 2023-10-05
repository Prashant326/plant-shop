import React, { useState } from "react";
import "./contact.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pieces1 from "../Pieces/Pieces1";


const Contact = () => {

  const navigate=useNavigate();

  const [contact_name,setcontact_name]=useState('');
  const [contact_email,setcontact_email]=useState('');
  const [contact_message,setcontact_message]=useState('');
  
  const handlecontact_submit = async(e)=>{
    e.preventDefault();
    alert('Contact Done')
    console.log(contact_email,contact_message,contact_name);
    setcontact_name('');
    setcontact_email('');
    setcontact_message('');

    await axios.post("http://localhost:4000/contact", {
        contact_name,
        contact_email,
        contact_message,
      }).then((data)=>{} );

  navigate("/contact");
  }

  return (
    <div>
      <div className="contact-container1">
        <div className="contact-form1">
          <h2>Contact Us</h2>
          <form>
            <div className="contact_group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="contact_input"
                onChange={(e)=>{setcontact_name(e.target.value)}}
                value={contact_name}
                required
              />
            </div>
            <div className="contact_group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="contact_input"
                onChange={(e)=>{setcontact_email(e.target.value)}}
                value={contact_email}
                required
              />
            </div>
            <div className="contact_group">
              <textarea
                id="message"
                name="message"
                rows={4}
                defaultValue={""}
                placeholder="Enter Message"
                className="contact_input"          
                onChange={(e)=>{setcontact_message(e.target.value)}}
                value={contact_message}
                required
              />
            </div>
            <div className="contact_group">
              <button type="submit" className="order_btn" onClick={handlecontact_submit}>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="map">
          <iframe
            className="position-relative w-500 h-500"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.918410101646!2d72.48180187949012!3d22.990027563923338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9aee6c89a621%3A0x872df2d55fbb0008!2sLJ%20University!5e0!3m2!1sen!2sin!4v1694178185457!5m2!1sen!2sin"
            frameBorder={0}
            style={{ minHeight: 450, minWidth: 500, border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex={0}
            title="address"
          />
        </div>
      </div>

      <Pieces1/>
    </div>
  );
};

export default Contact;
