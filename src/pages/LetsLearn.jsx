import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Tutorial from "../components/Tutorial";

const LetsLearn = () => {
    const navigate = useNavigate()
  const cards = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4"},
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" },
  ];
  return(
    <div className="w-11/12 mx-auto my-10">
    <div className="bg-[#EEEDFE] py-10">
    <h1 className="text-center text-2xl lg:text-4xl text-[#172566] font-semibold my-10">Lets Learn</h1>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {
            cards.map(card=> <motion.div onClick={()=>navigate(`/lessons/lesson/${card.id}`)}  key={card.id}
             className="flex flex-col justify-center items-center p-6 rounded-sm bg-[#172566] text-gray-100 text-2xl font-medium"
             
             whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
             >
                <h3>Lesson No : {card.id}</h3>
            </motion.div> )
        }
    </div>
    </div>
    <Tutorial></Tutorial>
    </div>
  );
};

export default LetsLearn;
