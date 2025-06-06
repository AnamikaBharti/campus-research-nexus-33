
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5 className="text-primary mb-3">Gautam Buddha University</h5>
            <p className="small">
              An Ultimate Destination for Higher Learning committed to excellence in education, research, and innovation.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-light"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-light"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-light"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="text-light"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          
          <div className="col-md-2 mb-4">
            <h6 className="text-primary mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Academics</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Admissions</a></li>
              <li className="mb-2"><a href="#" className="text-light text-decoration-none">Research</a></li>
            </ul>
          </div>
          
          <div className="col-md-3 mb-4">
            <h6 className="text-primary mb-3">Research</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="/research/highlights" className="text-light text-decoration-none">Research Highlights</a></li>
              <li className="mb-2"><a href="/research/centers" className="text-light text-decoration-none">Research Centers</a></li>
              <li className="mb-2"><a href="/research/publications" className="text-light text-decoration-none">Publications</a></li>
              <li className="mb-2"><a href="/research/startup" className="text-light text-decoration-none">StartUp</a></li>
            </ul>
          </div>
          
          <div className="col-md-3 mb-4">
            <h6 className="text-primary mb-3">Contact Info</h6>
            <div className="small">
              <p className="mb-2">
                <i className="fas fa-map-marker-alt me-2"></i>
                Greater Noida, Uttar Pradesh, India
              </p>
              <p className="mb-2">
                <i className="fas fa-phone me-2"></i>
                +91-120-2344200
              </p>
              <p className="mb-2">
                <i className="fas fa-envelope me-2"></i>
                info@gbu.ac.in
              </p>
            </div>
          </div>
        </div>
        
        <hr className="my-4 border-secondary" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="small mb-0">&copy; 2024 Gautam Buddha University. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex justify-content-md-end gap-3">
              <a href="#" className="text-light text-decoration-none small">Privacy Policy</a>
              <a href="#" className="text-light text-decoration-none small">Terms of Service</a>
              <a href="#" className="text-light text-decoration-none small">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
