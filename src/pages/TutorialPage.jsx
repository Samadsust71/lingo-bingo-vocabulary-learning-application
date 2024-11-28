import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TutorialPage = () => {
  const videos = [
    "https://www.youtube.com/embed/rGrBHiuPlT0?si=GT4I22oyL4b45Tx7",
    "https://www.youtube.com/embed/bOUqVC4XkOY?si=Yy8GoDFHpG1Siass",
    "https://www.youtube.com/embed/JnoZE51WZg4?si=HtncphfoGTaYWM-t",
    "https://www.youtube.com/embed/k74yjmfFb_A?si=-vaL_ngV0sPwEcgH",
    "https://www.youtube.com/embed/KUIWRsVZZZA?si=3500znKYGHlkYZHL",
    "https://www.youtube.com/embed/ZGGufccTLso?si=y5ojUb_KUCrCRb_X",
  ];

  return (
    <section className="py-12 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-10">Tutorials</h1>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  src={video}
                  title={`Tutorial Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        {/* Learn Vocabularies Button */}
        <div className="text-center mt-12">
          <Link to="/lessons">
            <motion.button className="text-white font-semibold bg-[#5754F7] px-8 py-2 rounded-full shadow-lg hover:bg-primary-focus"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            >
              Learn Vocabularies
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TutorialPage;
