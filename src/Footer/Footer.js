import React from "react";
import "./Footer.css";
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TranslateIcon from '@mui/icons-material/Translate';

export default function Footer() {
  return (
    <div
      className="footer"
      style={{ borderTop: "8px", borderColor: "#2d2d2d" }}
    >
      <div className="content">
        <div className="services">
          <h4>Questions? Call <a href="/"> 000-800-919-1694</a></h4>
          <p>
            <a href="/">FAQ</a>
          </p>
          <p>
            <a href="/">Investor Relations</a>
          </p>
          <p>
            <a href="/">Privacy</a>
          </p>
          <p>
            <a href="/">Speed Test</a>
          </p>
          <p>
            {" "}
            <Button
              variant="outlined"
              size="small"
              color="inherit"
              startIcon={<TranslateIcon />}
              endIcon={<ArrowDropDownIcon />}
            >
              English
            </Button>
          </p>
          <p>
        Netflix India
          </p>
        </div>
        <div clasNames="social-media" style={{paddingTop: "6.1vh"}}>
          
          <p>
            <a href="/">
              <i className="fab fa-linkedin"></i> 
Help Centre
            </a>
          </p>
          <p>
            <a href="/">
              <i className="fab fa-twitter"></i>
Jobs
            </a>
          </p>
          <p>
            <a href="/">
              <i className="fab fa-github"></i>Cookie Preferences
            </a>
          </p>
          <p>
            <a href="/">
              <i className="fab fa-facebook"></i> Legal Notices
            </a>
          </p>
        </div>
        <div className="links" style={{paddingTop: "6.1vh"}}>
         
          <p>
            <a href="/">Account</a>
          </p>
          <p>
            <a href="/">Ways to Watch</a>
          </p>
          <p>
            <a href="/">
Corporate Information</a>
          </p>
          <p>
            <a href="/">
Only on Netflix</a>
          </p>
        </div>
        <div className="details" style={{paddingTop: "6.1vh"}}>
        
          <p>
        <a href="/">Media Centre </a>
          </p>
          <p>
            <a href="/">Terms of Use</a>
          </p>
          <p className="mail">
<a href="/">Contact Us</a></p>
        </div>
      </div>
    </div>
  );
}
