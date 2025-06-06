
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
                <Link to="/research/highlights" className="btn btn-primary btn-lg">
                  Research Highlights
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

      {/* Quick Research Links */}
      <section className="py-5">
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
                  <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-trophy text-primary fs-3"></i>
                  </div>
                  <h5 className="card-title text-primary mb-3">Research Highlights</h5>
                  <p className="card-text text-muted mb-4">
                    Discover our major research achievements, awards, and breakthrough discoveries.
                  </p>
                  <Link to="/research/highlights" className="btn btn-outline-primary">
                    Explore Achievements
                  </Link>
                </div>
              </div>
            </div>

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
                  <div className="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '80px', height: '80px'}}>
                    <i className="fas fa-book text-info fs-3"></i>
                  </div>
                  <h5 className="card-title text-info mb-3">Publications & Patents</h5>
                  <p className="card-text text-muted mb-4">
                    Access our extensive collection of research publications and patents.
                  </p>
                  <Link to="/research/publications" className="btn btn-outline-info">
                    View Publications
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

      <Footer />
    </>
  );
};

export default Index;
