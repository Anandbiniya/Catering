import React from 'react';
import styles from './ContactUs.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function ContactUs() {
  return (
    <div className={styles.contactContainer}>
      <div>Contact Us</div>
      <div className={styles.contactInfo}>
        <div>
          <i className="fa fa-phone"></i>
          <span>Phone: 6301457045</span>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <span>Email: sathvik@gmail.com</span>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
      <div className={styles.footer}>
        &copy; 2024 Your Company Name. All rights reserved.
      </div>
    </div>
  );
}

export default ContactUs;
