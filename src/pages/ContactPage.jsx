import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'; // npm install lucide-react
import emailjs from '@emailjs/browser'; // npm install emailjs-com

const Contact = () => {

const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    subject: ""
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
          subject: form.subject
        },
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully ✅");

          // THIS CLEARS THE INPUTS
          setForm({ name: "", email: "", message: "" , subject: ""});
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
    <section className="bg-slate-50 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4"
          >
            Get In Touch
          </motion.h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            For enquiries relating to terminal operations, commercial opportunities or public
            feedback, please send a message. We will direct it to the appropriate office.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* CONTACT INFORMATION CARDS */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="space-y-8">
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">Terminal Location</h3>
                    <p className="text-slate-600">Holy Ghost Bus Terminal, Ogbete, Enugu State</p>
                    <p className="text-xs text-slate-500 mt-1">Other terminals: Holy Ghost 2, Gariki, Abakpa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg text-green-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">Telephone</h3>
                    <p className="text-slate-600 text-sm">To be updated</p>
                    <p className="text-xs text-slate-500 mt-1">Official line will be published here</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg text-purple-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">Email</h3>
                    <p className="text-slate-600 text-sm">To be updated</p>
                    <p className="text-xs text-slate-500 mt-1">Official email will be published here</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg text-orange-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg">Office Hours</h3>
                    <p className="text-slate-600">To be confirmed</p>
                    <p className="text-xs text-slate-500 mt-1">Terminal operations are coordinated throughout the day</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-8">Send us a Message</h2>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Full Name</label>
                  <input 
                    type="text"
                    name='name'
                    value={form.name} 
                    onChange={handleChange}
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    name='email'
                    value={form.email} 
                    onChange={handleChange}
                    placeholder="john@example.com" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none bg-white" 
                   onChange={handleChange} value={form.subject} name="subject" required>
                  <option value="" disabled>Select a subject</option>
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Terminal Operations">Terminal Operations</option>
                  <option value="Commercial Opportunities">Commercial Opportunities</option>
                  <option value="Business Advertising">Business Advertising</option>
                  <option value="Public Feedback">Public Feedback</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea 
                  rows="5" name='message'
                  value={form.message} 
                    onChange={handleChange}
                  placeholder="How can we help you today?" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full md:w-max bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-200 transition-all active:scale-95"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;