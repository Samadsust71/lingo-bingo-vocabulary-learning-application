import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FaUsers, FaBookOpen, FaLanguage, FaChalkboardTeacher } from "react-icons/fa";

const SuccessSection = () => {
  const stats = [
    { icon: <FaUsers />, label: "Users", count: 1500, color: "text-primary" },
    { icon: <FaBookOpen />, label: "Lessons", count: 200, color: "text-secondary" },
    { icon: <FaLanguage />, label: "Vocabularies", count: 5000, color: "text-accent" },
    { icon: <FaChalkboardTeacher />, label: "Tutorials", count: 50, color: "text-info" },
  ];

  return (
    <section className="py-12 bg-white text-gray-700">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Achievements
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="card bg-[#EEEDFE] shadow-md p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`text-6xl mb-4 ${stat.color}`}>{stat.icon}</div>
              <h3 className="text-3xl font-bold">
                <CountUp end={stat.count} duration={2} />
              </h3>
              <p className="text-lg mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
