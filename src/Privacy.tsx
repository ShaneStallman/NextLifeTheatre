import React from "react";
import BuildFooter  from "./components/Footer.tsx";
import "./Privacy.css"

const Policy = () => {

  return (
    <div className="page">
      <div className="spacer"></div>
      <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy describes how we collect, use, and disclose
        information when you use our website.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We collect information you provide directly to us, such as when you
        fill out a contact form or sign up for our newsletter.
      </p>
      <h2>How We Use Your Information</h2>
      <p>
        We may use your information to communicate with you, provide customer
        support, and improve our services.
      </p>
      <h2>Information Sharing</h2>
      <p>
        We may share your information with third-party service providers who
        assist us in providing and improving our services.
      </p>
      <h2>Data Security</h2>
      <p>
        We take reasonable measures to protect your information from
        unauthorized access or disclosure.
      </p>
      <h2>Your Choices</h2>
      <p>
        You may choose to opt out of certain communications or request to
        access, correct, or delete your information.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at privacy@example.com.
      </p>
    </div>
      <BuildFooter/>
    </div>  
  );
} 

export default Policy;