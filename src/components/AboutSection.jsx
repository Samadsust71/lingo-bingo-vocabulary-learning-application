import React from "react";
import { motion } from "framer-motion";
import { FaBook, FaChartLine, FaUserCheck, FaGraduationCap } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="py-10 bg-[#EEEDFE] text-gray-800 mb-10">
      <div className="px-6 max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Lingo Bingo
        </motion.h2>

        <motion.p
          className="text-lg text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Welcome to <span className="font-bold">Lingo Bingo</span>, your
          ultimate companion for mastering new vocabularies in a fun, engaging,
          and effective way!
        </motion.p>

        <motion.div
          className="grid gap-6 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          {/* Mission Section */}
          <div className="card bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <FaBook className="mr-2 text-primary" /> Our Mission
            </h3>
            <p>
              Make language learning exciting and accessible for everyone with a
              dynamic and interactive approach tailored to your needs.
            </p>
          </div>

          {/* How It Works */}
          <div className="card bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <FaChartLine className="mr-2 text-secondary" /> How It Works
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Interactive Lessons:</strong> Learn words with
                real-world context.
              </li>
              <li>
                <strong>Practice:</strong> Quizzes and games to reinforce
                learning.
              </li>
              <li>
                <strong>Scenarios:</strong> "When to Say" modals for real-life
                usage.
              </li>
              <li>
                <strong>Progress Tracking:</strong> Celebrate milestones.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="card bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <FaUserCheck className="mr-2 text-accent" /> Why Choose Us?
            </h3>
            <p>
              We believe in learning through repetition, context, and fun. Our
              platform is designed to help you build confidence and enjoy the
              process.
            </p>
          </div>

          {/* Call to Action */}
          <div className="card bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <FaGraduationCap className="mr-2 text-info" /> Start Your Journey
            </h3>
            <p>
              Join us and expand your language skills with every word you
              master. Let’s unlock new opportunities together! 😊
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
