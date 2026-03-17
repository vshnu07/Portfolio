import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { close } from "../assets";
import { publicUrls } from "../constants";

const ResumeCard = ({ title, resumeUrl, downloadName }) => {
  const getDownloadUrl = (url) => {
    const idMatch = url.match(/\/d\/(.*?)(\/|$|\?)/);
    if (idMatch && idMatch[1]) {
      return `https://drive.google.com/uc?export=download&id=${idMatch[1]}`;
    }
    return url;
  };

  return (
    <div className="flex-1 bg-tertiary p-6 rounded-2xl border border-white/10 flex flex-col items-center gap-4 hover:border-purple-500/50 transition-colors shadow-2xl">
      <h3 className="text-white text-[20px] font-bold">{title}</h3>
      <div className="flex flex-col w-full gap-3 mt-4">
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#915eff] py-3 px-6 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-primary text-center hover:bg-[#804dee] transition-colors"
        >
          Preview
        </a>
        <a
          href={getDownloadUrl(resumeUrl)}
          className="bg-black-200 py-3 px-6 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-primary text-center border border-white/10 hover:bg-black-100 transition-colors"
        >
          Download
        </a>
      </div>
    </div>
  );
};

const ResumeModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-[#1d1836] w-full max-w-2xl rounded-3xl p-8 border border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Background Gradient Glow */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500" />
            
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-white font-black md:text-[40px] sm:text-[35px] xs:text-[30px] text-[25px]">
                Resume.
              </h2>
              <button
                onClick={onClose}
                className="bg-tertiary p-2 rounded-full hover:bg-black-100 transition-colors border border-white/10"
              >
                <img src={close} alt="close" className="w-6 h-6 object-contain" />
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <ResumeCard 
                title="General CV" 
                resumeUrl={publicUrls.resumes.general}
                downloadName="Golla_Vishnu_General_CV.pdf"
              />
              <ResumeCard 
                title="Specialised CV" 
                resumeUrl={publicUrls.resumes.specialised}
                downloadName="Golla_Vishnu_Specialised_CV.pdf"
              />
            </div>

            <p className="text-secondary text-[14px] text-center mt-8">
              Choose the version that best fits your requirements.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
