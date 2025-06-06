
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="navbar navbar-expand-lg university-navbar fixed-top">
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">
                About Us
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Vision & Mission</a></li>
                <li><a className="dropdown-item" href="#">History</a></li>
                <li><a className="dropdown-item" href="#">Leadership</a></li>
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
                <li><a className="dropdown-item" href="#">Sports</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">
                Announcements
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Latest News</a></li>
                <li><a className="dropdown-item" href="#">Events</a></li>
                <li><a className="dropdown-item" href="#">Notifications</a></li>
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
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
