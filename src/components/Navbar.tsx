
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <>
      {/* Top Thin Bar */}
      <div className="bg-gray-100 py-2 border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="d-flex gap-3">
                <a href="#" className="text-dark text-decoration-none small">
                  <i className="fas fa-file-contract me-1"></i>Tenders
                </a>
                <a href="#" className="text-dark text-decoration-none small">
                  <i className="fas fa-users me-1"></i>Recruitments
                </a>
                <a href="#" className="text-dark text-decoration-none small">
                  <i className="fas fa-calendar-check me-1"></i>Booking
                </a>
                <a href="#" className="text-dark text-decoration-none small">
                  <i className="fas fa-info-circle me-1"></i>RTI
                </a>
                <a href="#" className="text-dark text-decoration-none small">
                  <i className="fas fa-sitemap me-1"></i>Sitemap
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-end gap-3">
                <a href="#" className="text-dark text-decoration-none small">
                  <i className="fas fa-credit-card me-1"></i>Online Fee Payment
                </a>
                <a href="#" className="text-dark text-decoration-none small">
                  <i className="fas fa-user-graduate me-1"></i>Student Portal
                </a>
                <a href="#" className="text-dark text-decoration-none small">
                  <i className="fas fa-sign-in-alt me-1"></i>Employee Login
                </a>
                <a href="#" className="text-dark text-decoration-none small">
                  <i className="fas fa-address-book me-1"></i>Directory
                </a>
                <a href="#" className="text-dark text-decoration-none small">
                  <i className="fas fa-question-circle me-1"></i>FAQs
                </a>
                <a href="#" className="text-dark text-decoration-none small">
                  <i className="fas fa-phone me-1"></i>Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="navbar navbar-expand-lg university-navbar sticky-top">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center text-white" to="/">
            <div className="me-3">
              <div className="bg-white rounded-circle p-2" style={{width: '50px', height: '50px'}}>
                <div className="bg-primary rounded-circle w-100 h-100 d-flex align-items-center justify-center">
                  <span className="text-white fw-bold">GBU</span>
                </div>
              </div>
            </div>
            <div>
              <div className="fw-bold">गौतम बुद्ध विश्वविद्यालय</div>
              <div className="small">GAUTAM BUDDHA UNIVERSITY</div>
              <div className="small opacity-75">An Ultimate Destination for Higher Learning</div>
            </div>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">
                  About Us
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Vision & Mission</a></li>
                  <li><a className="dropdown-item" href="#">History</a></li>
                  <li><a className="dropdown-item" href="#">Leadership</a></li>
                  <li><a className="dropdown-item" href="#">Campus</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">
                  Academics
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Schools</a></li>
                  <li><a className="dropdown-item" href="#">Programs</a></li>
                  <li><a className="dropdown-item" href="#">Faculty</a></li>
                  <li><a className="dropdown-item" href="#">Academic Calendar</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">
                  Admissions
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Undergraduate</a></li>
                  <li><a className="dropdown-item" href="#">Postgraduate</a></li>
                  <li><a className="dropdown-item" href="#">PhD</a></li>
                  <li><a className="dropdown-item" href="#">International Students</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className={`nav-link dropdown-toggle text-white ${location.pathname.includes('/research') ? 'active' : ''}`} 
                   href="#" role="button" data-bs-toggle="dropdown">
                  Research
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/research/highlights">Research Highlights and Achievements</Link></li>
                  <li><Link className="dropdown-item" to="/research/centers">Research Centers and Labs</Link></li>
                  <li><Link className="dropdown-item" to="/research/publications">Publications and Patents</Link></li>
                  <li><Link className="dropdown-item" to="/research/innovations">Innovations and Incubation</Link></li>
                  <li><Link className="dropdown-item" to="/research/startup">StartUp</Link></li>
                  <li><Link className="dropdown-item" to="/research/funded-projects">Funded Projects and IPR Cell</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">
                  Campus Life
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Student Activities</a></li>
                  <li><a className="dropdown-item" href="#">Hostels</a></li>
                  <li><a className="dropdown-item" href="#">Sports & Recreation</a></li>
                  <li><a className="dropdown-item" href="#">Clubs & Societies</a></li>
                  <li><a className="dropdown-item" href="#">Library</a></li>
                  <li><a className="dropdown-item" href="#">Medical Facilities</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">
                  Announcement
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Latest News</a></li>
                  <li><a className="dropdown-item" href="#">Events</a></li>
                  <li><a className="dropdown-item" href="#">Notifications</a></li>
                  <li><a className="dropdown-item" href="#">Press Releases</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">
                  Placements
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Placement Statistics</a></li>
                  <li><a className="dropdown-item" href="#">Training & Development</a></li>
                  <li><a className="dropdown-item" href="#">Career Services</a></li>
                  <li><a className="dropdown-item" href="#">Recruiters</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">
                  Alumni
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Alumni Network</a></li>
                  <li><a className="dropdown-item" href="#">Success Stories</a></li>
                  <li><a className="dropdown-item" href="#">Alumni Events</a></li>
                  <li><a className="dropdown-item" href="#">Alumni Registration</a></li>
                </ul>
              </li>
            </ul>

            {/* Search Bar */}
            <div className="d-flex">
              <div className="input-group" style={{width: '250px'}}>
                <input type="search" className="form-control form-control-sm" placeholder="Search..." />
                <button className="btn btn-outline-light btn-sm" type="button">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
