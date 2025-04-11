import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

const Projects = () => {
  const [open, setOpen] = useState(null);

  const menus = [
    {
      items: "Built a MERN-based music streaming platform with authentication, playlists, and a seamless UI.",
      link: "https://aman-spotify.onrender.com",
      go: "View 1",
      image: image1,
    },
    {
      items: "Built a sleek MERN-based real estate platform for seamless property rentals and sales.",
      link: "https://marketplace-48gl.onrender.com",
      go: "View 2",
      image: image2,
    },
    {
      items: "Developed a dynamic Next.js-powered social media platform for seamless sharing and engagement.",
      link: "https://life-log-sage.vercel.app",
      go: "View 3",
      image: image3,
    },
  ];

  return (
    <motion.div
      id="/project"
      className="mt-[40px] md:mt-[90px] px-6 "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="font-bold text-4xl uppercase text-center text-white mb-8 tracking-widest">
        My Projects
      </h1>
      <div className="flex flex-col gap-6">
        {menus.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,105,180,0.8)]"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-between items-center text-white">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold hover:underline"
              >
                {item.items}
              </a>
              <motion.button
                onClick={() => setOpen(open === item.go ? null : item.go)}
                className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full font-semibold text-white shadow-lg"
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
              >
                {open === item.go ? "Cancel" : item.go}
              </motion.button>
            </div>

            <AnimatePresence>
              {open === item.go && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-4 rounded-lg overflow-hidden border border-gray-500"
                >
                  <img
                    src={item.image}
                    alt="Project Screenshot"
                    className="w-full object-cover h-[300px] rounded-lg"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
