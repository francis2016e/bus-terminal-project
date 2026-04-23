import React, { useState } from "react";
import enuguMap from "../assets/static enugu map.png";
import { FaPhone, FaMapMarker, FaMailBulk } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
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
          message: form.message,
        },
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully ✅");

          // THIS CLEARS THE INPUTS
          setForm({ name: "", email: "", message: "" });
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
    <div className="w-full">
      {/* HERO */}
      <div className="bg-gradient-to-r from-gray-800 to-indigo-700 text-white text-center py-20 px-4">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-4 max-w-2xl mx-auto">
          Reach out to us for inquiries, ticketing support, or travel assistance.
        </p>
      </div>

      {/* CONTACT INFO */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-3">
        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <h3 className="font-semibold flex items-center justify-center gap-2"><FaMapMarker className="text-red-600"/>Address</h3>
          <p className="text-gray-600">
            Holy Ghost Bus Terminal, Ogbete, Enugu State
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <h3 className="font-semibold mb-2 flex items-center justify-center gap-2"><FaPhone className="text-blue-400"/> Phone</h3>
          <p className="text-gray-600">0803 123 4567</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <h3 className="font-semibold mb-2 flex items-center justify-center gap-2"><FaMailBulk className="text-yellow-500"/> Email</h3>
          <p className="text-gray-600">info@enuguterminal.com</p>
        </div>
      </div>

      {/* FORM + MAP */}
      <div className="max-w-6xl mx-auto px-6 pb-16 grid gap-10 md:grid-cols-2">

        {/* CONTACT FORM */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-6">Send Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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