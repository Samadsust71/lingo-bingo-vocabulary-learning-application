import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const Tutorial = () => {
  return (
    <div>
      <div className="rounded-lg p-6 mb-12 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-center mb-6">
            Learn the Alphabet
          </h2>
          <div className=" relative">
          <iframe 
          className='w-full lg:w-[560px] h-[315px]'
          src="https://www.youtube.com/embed/rGrBHiuPlT0?si=Tqv3gDRP1egPov4m" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen></iframe>
          </div>
        </div>
        <div className="text-center">
          <Link to="/tutorials">
            <motion.button
              className="text-white font-semibold bg-[#5754F7] px-8 py-2 rounded-full shadow-lg hover:bg-primary-focus"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              View More Tutorials
            </motion.button>
          </Link>
        </div>
    </div>
  )
}

export default Tutorial
