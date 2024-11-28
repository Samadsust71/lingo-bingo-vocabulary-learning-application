import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { SiExpress, SiMongodb } from "react-icons/si";

const AboutUsPage = () => {
  const projects = [
    {
      name: "Peddy - Pet Adoption Website",
      link: "https://pet-website-react.netlify.app",
    },
    {
      name: "Chefs Table - Recipe Website",
      link: "https://chefstable007.netlify.app/",
    },
    {
      name: "GadgetHaven - E-commerce Platform",
      link: "https://gadgetheaven71.netlify.app",
    },
    {
      name: "Dragon News - E-news Website",
      link: "https://dragon-news-d1487.web.app",
    },
  ];

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-400 text-3xl" /> },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-500 text-3xl" />,
    },
    { name: "Python", icon: <FaPython className="text-green-500 text-3xl" /> },
    { name: "React.js", icon: <FaReact className="text-blue-500 text-3xl" /> },
    { name: "Node.js", icon: <FaNode className="text-green-800 text-3xl" /> },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-800 text-3xl" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600 text-3xl" />,
    },
  ];

  return (
    <section className="py-12 bg-[#EEEDFE] text-gray-800">
      <div className="w-11/12 mx-auto px-6">
        {/* About Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Hi, I'm a passionate front-end developer transitioning to full-stack
            development. I specialize in creating interactive, user-friendly
            applications. I have experience working on diverse projects and
            enjoy solving complex problems through clean code and design.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-32 hover:shadow-xl transition-shadow"
              >
                {skill.icon}
                <span className="mt-4 text-gray-700 font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-6">
            Other Projects
          </h2>
          <ul className="space-y-4 max-w-3xl mx-auto text-center">
            {projects.map((project, index) => (
              <li
                key={index}
                className="text-lg font-medium text-[#5754F7] hover:text-primary-focus transition"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsPage;
