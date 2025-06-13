
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      {/* <section className="research-hero" style={{ marginTop: '' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold text-primary mb-4">
                Research & Innovation at GBU
              </h1>
              <p className="lead text-muted mb-4">
                Driving groundbreaking research and fostering innovation across multiple disciplines. 
                Explore our research excellence, cutting-edge laboratories, and startup ecosystem.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/research/publications" className="btn btn-primary btn-lg">
                  View Publications
                </Link>
                <Link to="/research/centers" className="btn btn-outline-primary btn-lg">
                  Research Centers
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                alt="Research at GBU" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section> */}
<section className="research-hero position-relative" style={{ marginTop: '' }}>
  {/* Background Image */}
  <div
    className="background-image"
    style={{
      backgroundImage: 'url(https://www.elmhurst.edu/wp-content/uploads/2018/12/5-skills-project-management-degree-elmhurst-college-infographic-thumb.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.2,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1
    }}
  ></div>

  {/* Foreground Content */}
  <div className="container position-relative" style={{ zIndex: 2 }}>
    <div className="row align-items-center">
      <div className="col-lg-8">
        <h1 className="display-4 fw-bold text-primary mb-4">
          Research & Innovation at GBU
        </h1>
        <p className="lead text-muted mb-4">
          Driving groundbreaking research and fostering innovation across multiple disciplines. 
          Explore our research excellence, cutting-edge laboratories, and startup ecosystem.
        </p>
        <div className="d-flex gap-3 flex-wrap">
          <Link to="/research/publications" className="btn btn-primary btn-lg">
            View Publications
          </Link>
          <Link to="/research/centers" className="btn btn-outline-primary btn-lg">
            Research Centers
          </Link>
        </div>
      </div>
      <div className="col-lg-4">
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
          alt="Research at GBU" 
          className="img-fluid rounded shadow"
        />
      </div>
    </div>
  </div>
</section>

      {/* Stats Section */}
  
        <div className="py-10 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {/* Research Projects */}
      <div className="bg-blue-600 text-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
        <h3 className="text-3xl font-bold">150+</h3>
        <p className="mt-2 text-sm">Research Projects</p>
      </div>

      {/* Research Centers */}
      <div className="bg-green-600 text-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
        <h3 className="text-3xl font-bold">25+</h3>
        <p className="mt-2 text-sm">Research Centers</p>
      </div>

      {/* Publications */}
      <div className="bg-cyan-600 text-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
        <h3 className="text-3xl font-bold">500+</h3>
        <p className="mt-2 text-sm">Publications</p>
      </div>

      {/* Patents Filed */}
      <div className="bg-yellow-500 text-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
        <h3 className="text-3xl font-bold">50+</h3>
        <p className="mt-2 text-sm">Patents Filed</p>
      </div>
    </div>
  </div>
</div>

      {/* Publications and Patents Section */}
      <section className=" py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="row text-center mb-8">
            <div className="col-12">
              <h2 className="fw-bold text-xl text-blue-600 mb-2">Publications & Patents</h2>
              <p className="lead text-muted">Explore our latest research publications and patent portfolio</p>
            </div>
          </div>
 
          {/* Tab Content */}
            <div className="flex flex-col lg:flex-row  justify-center items-start">

      {/* Publications Section */}
      <div className="w-full lg:w-1/2 max-w-md mx-auto bg-white rounded-lg shadow-md">
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold text-lg p-3 rounded-t-lg">
          Publications
        </div>
        <div className="max-h-96 overflow-y-auto">
          <ul className="divide-y">
            {/* Publication 1 */}
            <li className="p-4">
              <h6 className="text-blue-600 font-semibold mb-1">Machine Learning Approaches for Climate Change Prediction</h6>
              <small className="text-gray-500 block mb-1">2024</small>
              <p className="text-sm text-gray-700 mb-1">Authors: Dr. A. Kumar, Dr. B. Singh, Dr. C. Patel</p>
              <span className="inline-block bg-yellow-400 text-black text-xs px-2 py-1 rounded">School of ICT</span>
            </li>
            {/* Publication 2 */}
            <li className="p-4">
              <h6 className="text-blue-600 font-semibold mb-1">Quantum Computing Applications in Drug Discovery</h6>
              <small className="text-gray-500 block mb-1">2024</small>
              <p className="text-sm text-gray-700 mb-1">Authors: Dr. P. Sharma, Dr. R. Gupta</p>
              <span className="inline-block bg-green-400 text-black text-xs px-2 py-1 rounded">School of Biotechnology</span>
            </li>
            {/* Publication 3 */}
            <li className="p-4">
              <h6 className="text-blue-600 font-semibold mb-1">Sustainable Energy Storage Systems</h6>
              <small className="text-gray-500 block mb-1">2023</small>
              <p className="text-sm text-gray-700 mb-1">Authors: Dr. S. Mehta, Dr. N. Jain, Dr. V. Agarwal</p>
              <span className="inline-block bg-blue-300 text-black text-xs px-2 py-1 rounded">School of Engineering</span>
            </li>
          </ul>
        </div>
        <div className="text-center p-3 border-t">
          <Link to="/research/publications" className="text-blue-600 font-medium hover:underline">View All Publications</Link>
        </div>
      </div>

      {/* Patents Section */}
      <div className="w-full lg:w-1/2 max-w-md mx-auto bg-white rounded-lg shadow-md">
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold text-lg p-3 rounded-t-lg">
          Patents
        </div>
        <div className="max-h-96 overflow-y-auto">
          <ul className="divide-y">
            {/* Patent 1 */}
            <li className="p-4">
              <h6 className="text-blue-600 font-semibold mb-1">Smart Irrigation System Using IoT</h6>
              <small className="text-gray-500 block mb-1">2024</small>
              <p className="text-sm text-gray-700 mb-1">Inventors: Dr. A. Patel, Dr. B. Kumar, Ms. S. Sharma</p>
              <span className="inline-block bg-green-400 text-black text-xs px-2 py-1 rounded mb-1">School of Agriculture</span>
              <p className="text-sm text-gray-700 mb-1">Patent No: IN202411001234</p>
              <p className="text-sm text-gray-700">Filing Date: March 15, 2024</p>
            </li>
            {/* Patent 2 */}
            <li className="p-4">
              <h6 className="text-blue-600 font-semibold mb-1">Novel Battery Technology for EVs</h6>
              <small className="text-gray-500 block mb-1">2024</small>
              <p className="text-sm text-gray-700 mb-1">Inventors: Dr. R. Singh, Dr. M. Gupta</p>
              <span className="inline-block bg-yellow-400 text-black text-xs px-2 py-1 rounded mb-1">School of Engineering</span>
              <p className="text-sm text-gray-700 mb-1">Patent No: IN202411005678</p>
              <p className="text-sm text-gray-700">Filing Date: January 20, 2024</p>
            </li>
            {/* Patent 3 */}
            <li className="p-4">
              <h6 className="text-blue-600 font-semibold mb-1">AI-Based Medical Image Analysis</h6>
              <small className="text-gray-500 block mb-1">2023</small>
              <p className="text-sm text-gray-700 mb-1">Inventors: Dr. P. Sharma, Dr. N. Verma, Dr. K. Jain</p>
              <span className="inline-block bg-pink-400 text-black text-xs px-2 py-1 rounded mb-1">School of Medical Sciences</span>
              <p className="text-sm text-gray-700 mb-1">Patent No: IN202311009876</p>
              <p className="text-sm text-gray-700">Filing Date: November 10, 2023</p>
            </li>
          </ul>
        </div>
        <div className="text-center p-3 border-t">
          <Link to="/research/publications" className="text-blue-600 font-medium hover:underline">View All Patents</Link>
        </div>
      </div>
    </div>

        </div>
      </section>

      {/* Quick Research Links */}
      {/* <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="fw-bold text-primary mb-3">Explore Our Research Ecosystem</h2>
              <p className="lead text-muted">Discover the various facets of research and innovation at our university</p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 card-hover border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-flask text-success fs-3"></i>
                  </div>
                  <h5 className="card-title text-success mb-3">Research Centers & Labs</h5>
                  <p className="card-text text-muted mb-4">
                    State-of-the-art research facilities and specialized laboratories.
                  </p>
                  <Link to="/research/centers" className="btn btn-outline-success">
                    Visit Centers
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 card-hover border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-warning bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-lightbulb text-warning fs-3"></i>
                  </div>
                  <h5 className="card-title text-warning mb-3">Innovations & Incubation</h5>
                  <p className="card-text text-muted mb-4">
                    Cutting-edge innovations and our technology incubation programs.
                  </p>
                  <Link to="/research/innovations" className="btn btn-outline-warning">
                    Explore Innovations
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 card-hover border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-rocket text-danger fs-3"></i>
                  </div>
                  <h5 className="card-title text-danger mb-3">StartUp Ecosystem</h5>
                  <p className="card-text text-muted mb-4">
                    Meet the startups born from our research and innovation programs.
                  </p>
                  <Link to="/research/startup" className="btn btn-outline-danger">
                    Meet Startups
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 card-hover border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-secondary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-chart-line text-secondary fs-3"></i>
                  </div>
                  <h5 className="card-title text-secondary mb-3">Funded Projects & IPR</h5>
                  <p className="card-text text-muted mb-4">
                    Research funding information and intellectual property resources.
                  </p>
                  <Link to="/research/funded-projects" className="btn btn-outline-secondary">
                    View Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-blue-700">Explore Our Research Ecosystem</h2>
      <p className=" lead text-muted mt-2">Discover the various facets of research and innovation at our university</p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      {/* Research Centers & Labs */}
      <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <i className="fas fa-flask text-green-600 text-2xl"></i>
        </div>
        <h3 className="text-green-700 font-semibold text-lg mb-2">Research Centers & Labs</h3>
        <p className="text-gray-600 mb-4">State-of-the-art research facilities and specialized laboratories.</p>
        <Link to="/research/centers" className="text-green-600 border border-green-600 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition">
          Visit Centers
        </Link>
      </div>

      {/* Innovations & Incubation */}
      <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
        <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
          <i className="fas fa-lightbulb text-yellow-600 text-2xl"></i>
        </div>
        <h3 className="text-yellow-600 font-semibold text-lg mb-2">Innovations & Incubation</h3>
        <p className="text-gray-600 mb-4">Cutting-edge innovations and our technology incubation programs.</p>
        <Link to="/research/innovations" className="text-yellow-600 border border-yellow-600 px-4 py-2 rounded hover:bg-yellow-600 hover:text-white transition">
          Explore Innovations
        </Link>
      </div>

      {/* StartUp Ecosystem */}
      <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
          <i className="fas fa-rocket text-red-600 text-2xl"></i>
        </div>
        <h3 className="text-red-600 font-semibold text-lg mb-2">StartUp Ecosystem</h3>
        <p className="text-gray-600 mb-4">Meet the startups born from our research and innovation programs.</p>
        <Link to="/research/startup" className="text-red-600 border border-red-600 px-4 py-2 rounded hover:bg-red-600 hover:text-white transition">
          Meet Startups
        </Link>
      </div>

      {/* Funded Projects & IPR */}
      <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
          <i className="fas fa-chart-line text-cyan-600 text-2xl"></i>
        </div>
        <h3 className="text-cyan-600 font-semibold text-lg mb-2">Funded Projects & IPR</h3>
        <p className="text-gray-600 mb-4">Research funding information and intellectual property resources.</p>
        <Link to="/research/funded-projects" className="text-cyan-600 border border-cyan-600 px-4 py-2 rounded hover:bg-cyan-700 hover:text-white transition">
          View Projects
        </Link>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </>
  );
};

export default Index;
