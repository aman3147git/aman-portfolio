
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formdata, setFormdata] = useState({
    subject: '',
    email: 'amanc3147@gmail.com',
    message: ''
  });

  const handlechange = (e) => {
    setFormdata({ ...formdata, [e.target.id]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const email = formdata.email;
    const subject = `Regarding: ${formdata.subject}`;
    const body = formdata.message;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setFormdata({
      subject: '',
      email: 'amanc3147@gmail.com',
      message: ''
    });
  };

  return (
    <div className="">
      <motion.h1
        className="font-bold text-3xl uppercase max-w-4xl mx-auto mt-[40px] md:mt-[90px]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Contact me
      </motion.h1>

      <div id="/contact" className="p-4 text-white flex flex-col gap-4 md:flex-row justify-between">
        <motion.div
          className="mt-3 md:mt-[60px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            I'd love to hear from you! Whether you have a question, want to discuss a project, or just want to say hello, feel free to drop me a message.<br /> Looking forward to connecting with you!
          </h1>
        </motion.div>

        <motion.div
          className="text-black"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.form
            onSubmit={submitHandler}
            className="flex flex-col gap-3 w-full max-w-md mx-auto mt-6 md:mt-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, staggerChildren: 0.2 }}
          >
            
            <motion.input
              value={formdata.subject}
              onChange={handlechange}
              type="text"
              id="subject"
              placeholder="Message regarding."
              className="p-2 md:p-4 border border-slate-100 outline-none hover:scale-105 focus:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
            />

            
            <motion.input
              value={formdata.email}
              readOnly
              type="email"
              id="email"
              className="p-2 md:p-4 border border-gray-200 outline-none"
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
            />

            
            <motion.textarea
              value={formdata.message}
              onChange={handlechange}
              id="message"
              placeholder="Message here..."
              rows={4}
              className="p-2 md:p-4 border border-gray-200 outline-none"
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
            />

            
            <motion.button
              type="submit"
              className="p-3 bg-gradient-to-tr from-pink-700 to-orange-600 rounded-md font-bold hover:opacity-75 text-white"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              Send
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
