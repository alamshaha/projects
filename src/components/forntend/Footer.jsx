import React from "react";
 
 const Footer = () => {
  return (
     <footer className="footer">
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          <div className="footer-links">
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>
      </footer>
   );
};

export default Footer;