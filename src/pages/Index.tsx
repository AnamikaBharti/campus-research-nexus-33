
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="research-hero" style={{ marginTop: '76px' }}>
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
      </section>

      {/* Stats Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-6 col-md-3 mb-4 mb-md-0">
              <h3 className="fw-bold mb-2">150+</h3>
              <p className="mb-0">Research Projects</p>
            </div>
            <div className="col-6 col-md-3 mb-4 mb-md-0">
              <h3 className="fw-bold mb-2">25+</h3>
              <p className="mb-0">Research Centers</p>
            </div>
            <div className="col-6 col-md-3 mb-4 mb-md-0">
              <h3 className="fw-bold mb-2">500+</h3>
              <p className="mb-0">Publications</p>
            </div>
            <div className="col-6 col-md-3">
              <h3 className="fw-bold mb-2">50+</h3>
              <p className="mb-0">Patents Filed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications and Patents Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="fw-bold text-primary mb-3">Publications & Patents</h2>
              <p className="lead text-muted">Explore our latest research publications and patent portfolio</p>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="row mb-4">
            <div className="col-12">
              <ul className="nav nav-pills nav-fill mb-4" id="publicationsTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="publications-tab" data-bs-toggle="pill" data-bs-target="#publications" type="button" role="tab">
                    <i className="fas fa-book me-2"></i>
                    Recent Publications
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="patents-tab" data-bs-toggle="pill" data-bs-target="#patents" type="button" role="tab">
                    <i className="fas fa-lightbulb me-2"></i>
                    Patents & IP
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Tab Content */}
          <div className="tab-content" id="publicationsTabContent">
            {/* Publications Tab */}
            <div className="tab-pane fade show active" id="publications" role="tabpanel">
              <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                  <div className="card h-100 card-hover border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <span className="badge bg-primary">Journal Article</span>
                        <small className="text-muted">2024</small>
                      </div>
                      <h6 className="card-title text-primary">Machine Learning Approaches for Climate Change Prediction</h6>
                      <p className="card-text small text-muted mb-2">
                        <strong>Authors:</strong> Dr. A. Kumar, Dr. B. Singh, Dr. C. Patel
                      </p>
                      <p className="card-text small text-muted mb-2">
                        <strong>Journal:</strong> Nature Climate Change
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-success">Impact Factor: 15.3</small>
                        <small className="text-info">Citations: 145</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="card h-100 card-hover border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <span className="badge bg-success">Research Article</span>
                        <small className="text-muted">2024</small>
                      </div>
                      <h6 className="card-title text-primary">Quantum Computing Applications in Drug Discovery</h6>
                      <p className="card-text small text-muted mb-2">
                        <strong>Authors:</strong> Dr. P. Sharma, Dr. R. Gupta
                      </p>
                      <p className="card-text small text-muted mb-2">
                        <strong>Journal:</strong> Science
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-success">Impact Factor: 47.7</small>
                        <small className="text-info">Citations: 203</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="card h-100 card-hover border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <span className="badge bg-info">Review Article</span>
                        <small className="text-muted">2023</small>
                      </div>
                      <h6 className="card-title text-primary">Sustainable Energy Storage Systems</h6>
                      <p className="card-text small text-muted mb-2">
                        <strong>Authors:</strong> Dr. S. Mehta, Dr. N. Jain, Dr. V. Agarwal
                      </p>
                      <p className="card-text small text-muted mb-2">
                        <strong>Journal:</strong> Energy & Environmental Science
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-success">Impact Factor: 32.4</small>
                        <small className="text-info">Citations: 298</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <Link to="/research/publications" className="btn btn-primary">
                  View All Publications
                </Link>
              </div>
            </div>

            {/* Patents Tab */}
            <div className="tab-pane fade" id="patents" role="tabpanel">
              <div className="row g-4">
                <div className="col-md-6 col-lg-4">
                  <div className="card h-100 card-hover border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <span className="badge bg-success">Granted</span>
                        <small className="text-muted">2024</small>
                      </div>
                      <h6 className="card-title text-primary">Smart Irrigation System Using IoT</h6>
                      <p className="card-text small text-muted mb-2">
                        <strong>Inventors:</strong> Dr. A. Patel, Dr. B. Kumar, Ms. S. Sharma
                      </p>
                      <p className="card-text small text-muted mb-2">
                        <strong>Patent No:</strong> IN202411001234
                      </p>
                      <p className="card-text small text-muted">
                        <strong>Filing Date:</strong> March 15, 2024
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="card h-100 card-hover border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <span className="badge bg-warning">Under Review</span>
                        <small className="text-muted">2024</small>
                      </div>
                      <h6 className="card-title text-primary">Novel Battery Technology for EVs</h6>
                      <p className="card-text small text-muted mb-2">
                        <strong>Inventors:</strong> Dr. R. Singh, Dr. M. Gupta
                      </p>
                      <p className="card-text small text-muted mb-2">
                        <strong>Patent No:</strong> IN202411005678
                      </p>
                      <p className="card-text small text-muted">
                        <strong>Filing Date:</strong> January 20, 2024
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="card h-100 card-hover border-0 shadow-sm">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <span className="badge bg-success">Granted</span>
                        <small className="text-muted">2023</small>
                      </div>
                      <h6 className="card-title text-primary">AI-Based Medical Image Analysis</h6>
                      <p className="card-text small text-muted mb-2">
                        <strong>Inventors:</strong> Dr. P. Sharma, Dr. N. Verma, Dr. K. Jain
                      </p>
                      <p className="card-text small text-muted mb-2">
                        <strong>Patent No:</strong> IN202311009876
                      </p>
                      <p className="card-text small text-muted">
                        <strong>Filing Date:</strong> November 10, 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4">
                <Link to="/research/publications" className="btn btn-primary">
                  View All Patents
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Research Links */}
      <section className="py-5 bg-light">
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
      </section>

      <Footer />
    </>
  );
};

export default Index;
