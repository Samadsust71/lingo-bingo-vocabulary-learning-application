import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-[#172566] rounded p-10 text-white">
      <nav className="grid grid-flow-col gap-4">
        <Link to="/about" className="link link-hover">About us</Link>
        <a href="mailto: samadsust71@gmail.com" target="_blank" className="link link-hover">Contact</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a href="https://www.facebook.com/samad.reza.31" target="_blank">
            <FaFacebook/>
          </a>
          <a href="https://x.com/SamadReza71" target="_blank">
           <FaTwitter/>
          </a>
          <a href="https://www.linkedin.com/in/abdus-samad-3989b5317" target="_blank">
            <FaLinkedin/>
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Samad Reza
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
