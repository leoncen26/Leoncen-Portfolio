import React from "react";
import { FaGithub, FaLinkedin, FaVoicemail } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-blue-500">
            Home
          </a>
          <a href="#about" className="hover:text-blue-500">
            About
          </a>
          <a href="#projects" className="hover:text-blue-500">
            Projects
          </a>
          <a href="#certification" className="hover:text-blue-500">
            Certification
          </a>
          <a href="#contact" className="hover:text-blue-500">
            Contact
          </a>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/leoncen26"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-500"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/leon-cenwijaya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-500"
          >
            <FaLinkedin />
          </a>
         
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
