import React from "react";
import { certificates } from "../data/certificates";
import { RevealOnScroll } from "./RevealOnScroll";

const Certification = () => {
  return (
    <section id="certification" className="min-h-screen py-20 flex justify-center items-center">
      <RevealOnScroll>
        <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {certificates.map((cert, key) => (
            <div key={key} className="border border-white hover:-translate-y-1 transition-all">
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className="w-full h-60 object-contain rounded-md"
              />
              <div className="px-4 py-2">
                <h3 className="font-bold text-lg dark:text-white">{cert.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{cert.issueDate}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{cert.instructor}</p>
                {/* <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                    View Certificate
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Certification;
