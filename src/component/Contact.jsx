import React, { useState } from "react";
import enuguMap from "../assets/static enugu map.png";
import { FaPhone, FaMapMarker, FaMailBulk } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // Added loading state

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully ✅");

          // THIS CLEARS THE INPUTS
          setForm({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong ❌");
        }
      )
      .finally(() => {
        setLoading(false); // Stop loading regardless of success or failure
      });
  };

  return (
    <div className="w-full bg-slate-50">
      {/* Header — concise institutional, not customer support hero */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8 text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-blue-600" aria-hidden="true" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
            Contact
          </span>
          <span className="h-px w-8 bg-blue-600" aria-hidden="true" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          Get in Touch
        </h2>
        <p className="mt-3 max-w-xl mx-auto text-slate-600 leading-relaxed">
          For enquiries relating to terminal operations, commercial opportunities or public feedback.
        </p>
      </div>

      {/* CONTACT INFO — institutional placeholders, not fake numbers */}
      <div className="max-w-6xl mx-auto px-6 py-8 grid gap-6 md:grid-cols-3">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
          <h3 className="font-semibold flex items-center justify-center gap-2 text-slate-900"><FaMapMarker className="text-red-600"/> Address</h3>
          <p className="text-slate-600 text-sm mt-2">
            Holy Ghost Bus Terminal, Ogbete, Enugu State
          </p>
          <p className="text-xs text-slate-500 mt-1">Other terminals: Holy Ghost 2, Gariki, Abakpa</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
          <h3 className="font-semibold mb-2 flex items-center justify-center gap-2 text-slate-900"><FaPhone className="text-blue-600"/> Telephone</h3>
          <a href="tel:08085555642" className="text-sm font-medium text-blue-600 hover:text-blue-700">
            08085555642
          </a>
          <p className="text-xs text-slate-500 mt-1">For all four terminals</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
          <h3 className="font-semibold mb-2 flex items-center justify-center gap-2 text-slate-900"><FaMailBulk className="text-slate-600"/> Email</h3>
          <a href="mailto:enugueastbustterminals@gmail.com" className="text-sm font-medium text-blue-600 hover:text-blue-700 break-all">
            enugueastbustterminals@gmail.com
          </a>
          <p className="text-xs text-slate-500 mt-1">For all terminals</p>
        </div>
      </div>

      {/* FORM + MAP */}
      <div className="max-w-6xl mx-auto px-6 pb-16 grid gap-10 md:grid-cols-2">

        {/* CONTACT FORM */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold mb-6 text-slate-900">Send a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full mb-4 p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full mb-4 p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full mb-4 p-3 border border-slate-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="" disabled>Select subject</option>
            <option value="General Enquiry">General Enquiry</option>
            <option value="Terminal Operations">Terminal Operations</option>
            <option value="Commercial Opportunities">Commercial Opportunities</option>
            <option value="Business Advertising">Business Advertising</option>
            <option value="Public Feedback">Public Feedback</option>
          </select>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="w-full mb-4 p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button 
            type="submit" 
            disabled={loading} // Disable button while sending
            className={`${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} text-white px-6 py-3 rounded-lg transition`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* MAP PLACEHOLDER */}
        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
          <div className="bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500 hover:border-2 hover:border-blue-500 transition p-7 overflow-hidden h-full">
            <img src={enuguMap} alt="Enugu Map" className="w-full h-full object-cover" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;