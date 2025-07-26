import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialAccount = () => {
  return (
    <div className="flex justify-center items-center my-5 gap-2">
      <a href="https://github.com/leoncen26" target="_blank" rel="noopener noreferrer">
        <FaGithub size={30}/>
      </a>
      <a href="https://www.linkedin.com/in/leon-cenwijaya/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={30}/>
      </a>
    </div>
  );
};

export default SocialAccount;
