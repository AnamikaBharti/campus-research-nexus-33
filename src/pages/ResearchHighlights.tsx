
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ResearchHighlights = () => {
  const highlights = [
    {
      id: 1,
      title: "AI-Powered Healthcare Diagnosis System",
      description: "Revolutionary machine learning model achieving 95% accuracy in early disease detection",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      award: "Best Innovation Award 2024",
      category: "Healthcare Technology",
      year: "2024"
    },
    {
      id: 2,
      title: "Sustainable Energy Storage Solutions",
      description: "Breakthrough in lithium-ion battery technology increasing efficiency by 40%",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      award: "Green Tech Excellence Award",
      category: "Energy Research",
      year: "2024"
    },
    {
      id: 3,
      title: "Advanced Materials for Space Applications",
      description: "Development of ultra-lightweight composites for aerospace industry",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      award: "ISRO Recognition",
      category: "Materials Science",
      year: "2023"
    },
    {
      id: 4,
      title: "Smart Agriculture IoT Platform",
      description: "Precision farming solution using AI and IoT to optimize crop yields",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      award: "Agricultural Innovation Prize",
      category: "AgriTech",
      year: "2023"
    },
    {
      id: 5,
      title: "Quantum Computing Research Breakthrough",
      description: "Novel quantum algorithm implementation for complex optimization problems",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      award: "Quantum Excellence Award",
      category: "Quantum Computing",
      year: "2024"
    },
    {
      id: 6,
      title: "Biodegradable Plastic Alternatives",
      description: "Eco-friendly plastic substitutes made from agricultural waste",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      award: "Environmental Impact Award",
      category: "Environmental Science",
      year: "2023"
    }
  ];

  return (
    <>
      <Navbar />
      
      <div className="container" style={{ marginTop: '100px', marginBottom: '50px' }}>
        {/* Page Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold text-primary mb-3">Research Highlights & Achievements</h1>
            <p className="lead text-muted">
              Celebrating breakthrough discoveries and innovative research that's shaping the future
            </p>
          </div>
        </div>

        {/* Filter Section */}
        <div className="row mb-4">
          <div className="col-md-8">
            <div className="d-flex flex-wrap gap-2">
              <button className="btn btn-primary btn-sm">All Categories</button>
              <button className="btn btn-outline-secondary btn-sm">Healthcare</button>
              <button className="btn btn-outline-secondary btn-sm">Energy</button>
              <button className="btn btn-outline-secondary btn-sm">Materials</button>
              <button className="btn btn-outline-secondary btn-sm">AgriTech</button>
              <button className="btn btn-outline-secondary btn-sm">Quantum</button>
            </div>
          </div>
          <div className="col-md-4">
            <select className="form-select">
              <option>Sort by Year</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
          </div>
        </div>

        {/* Research Highlights Grid */}
        <div className="row g-4">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="col-lg-6">
              <div className="card h-100 card-hover border-0 shadow">
                <div className="row g-0 h-100">
                  <div className="col-md-5">
                    <img 
                      src={highlight.image} 
                      alt={highlight.title}
                      className="img-fluid rounded-start h-100 object-cover"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body d-flex flex-column h-100">
                      <div>
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <span className="badge bg-primary">{highlight.category}</span>
                          <small className="text-muted">{highlight.year}</small>
                        </div>
                        <h5 className="card-title text-primary">{highlight.title}</h5>
                        <p className="card-text text-muted small mb-3">
                          {highlight.description}
                        </p>
                      </div>
                      <div className="mt-auto">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="text-success small">
                            <i className="fas fa-award me-1"></i>
                            {highlight.award}
                          </div>
                          <button className="btn btn-outline-primary btn-sm">
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="row mt-5 pt-5 border-top">
          <div className="col-12 text-center mb-4">
            <h3 className="text-primary">Research Impact</h3>
          </div>
          <div className="col-md-3 text-center mb-4">
            <div className="display-4 text-primary fw-bold">250+</div>
            <p className="text-muted">Research Publications</p>
          </div>
          <div className="col-md-3 text-center mb-4">
            <div className="display-4 text-success fw-bold">75+</div>
            <p className="text-muted">Awards & Recognition</p>
          </div>
          <div className="col-md-3 text-center mb-4">
            <div className="display-4 text-info fw-bold">50+</div>
            <p className="text-muted">Patents Filed</p>
          </div>
          <div className="col-md-3 text-center mb-4">
            <div className="display-4 text-warning fw-bold">30+</div>
            <p className="text-muted">Industry Partnerships</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="bg-light rounded p-5">
              <h4 className="text-primary mb-3">Want to collaborate with our research teams?</h4>
              <p className="text-muted mb-4">
                Join our research community and be part of groundbreaking discoveries
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <button className="btn btn-primary">Contact Research Office</button>
                <button className="btn btn-outline-primary">View Open Positions</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ResearchHighlights;
