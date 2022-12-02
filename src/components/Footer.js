import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-24 footer footer-center p-10 bg-base-100 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <Link to="/" className="link link-hover">
          About us
        </Link>
        <Link to="/" className="link link-hover">
          Contact
        </Link>
        <Link to="/" className="link link-hover">
          Jobs
        </Link>
        <Link to="/" className="link link-hover">
          Press kit
        </Link>
      </div>
      <div>
        <p>Developed by © Shahtaz Rahman</p>
        <p>shahtazrahman17@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
