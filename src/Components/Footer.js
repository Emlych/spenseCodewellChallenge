import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container--item-0">
          <h3>spense.</h3>
          <p>
            Spense is an open platform for individuals to share their unfiltered
            thoughts. Discuss the topics you love, and get paid for doing{" "}
            <span>just</span> that.
          </p>
        </div>
        <div className="footer__container--item-1">
          <h4>Company</h4>
          <ul>
            <li>About</li>
            <li>Customers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer__container--item-2">
          <h4>Opportunities</h4>
          <ul>
            <li>Jobs</li>
          </ul>
        </div>
        <div className="footer__container--item-3">
          <h4>Sitemap</h4>
          <ul>
            <li>Homepage</li>
          </ul>
        </div>
        <div className="footer__container--item-4">
          <h4>Ressources</h4>
          <ul>
            <li>Support</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
