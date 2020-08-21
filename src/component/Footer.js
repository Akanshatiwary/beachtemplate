import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import './Footerstyle.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer_inner">
          <img src="https://via.placeholder.com/96x48" alt="logo" />
        </div>
        <div className="footer_inner">
          <p>the beach house goa,sernabatim beach,goa 403709,india tel: +91 832 - 6697733 </p>
        </div>
        <div className="footer_inner">
          <a href="https://www.facebook.com/learnbuildteach/" className="facebook social" >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </div>
      </div>
    )
  }
}

export default Footer;