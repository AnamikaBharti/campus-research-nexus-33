
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Publications = () => {
  const [activeTab, setActiveTab] = useState('publications');
  
  const publications = [
    {
      id: 1,
      title: "Machine Learning Approaches for Climate Change Prediction",
      authors: "Dr. A. Kumar, Dr. B. Singh, Dr. C. Patel",
      journal: "Nature Climate Change",
      year: "2024",
      impact: "15.3",
      citations: 145,
      type: "Journal Article",
      category: "Environmental Science"
    },
    {
      id: 2,
      title: "Quantum Computing Applications in Drug Discovery",
      authors: "Dr. P. Sharma, Dr. R. Gupta",
      journal: "Science",
      year: "2024",
      impact: "47.7",
      citations: 203,
      type: "Research Article",
      category: "Biotechnology"
    },
    {
      id: 3,
      title: "Sustainable Energy Storage Systems: A Comprehensive Review",
      authors: "Dr. S. Mehta, Dr. N. Jain, Dr. V. Agarwal",
      journal: "Energy & Environmental Science",
      year: "2023",
      impact: "32.4",
      citations: 298,
      type: "Review Article",
      category: "Energy"
    },
    {
      id: 4,
      title: "AI-Driven Healthcare: Transforming Medical Diagnosis",
      authors: "Dr. K. Singh, Dr. M. Verma",
      journal: "The Lancet Digital Health",
      year: "2023",
      impact: "23.8",
      citations: 187,
      type: "Original Research",
      category: "Healthcare"
    },
    {
      id: 5,
      title: "Advanced Materials for Space Applications",
      authors: "Dr. D. Rao, Dr. L. Chandra",
      journal: "Materials Today",
      year: "2024",
      impact: "28.1",
      citations: 156,
      type: "Research Article",
      category: "Materials Science"
    }
  ];

  const patents = [
    {
      id: 1,
      title: "Smart Irrigation System Using IoT and Machine Learning",
      inventors: "Dr. A. Patel, Dr. B. Kumar, Ms. S. Sharma",
      patentNo: "IN202411001234",
      filingDate: "2024-03-15",
      status: "Granted",
      category: "AgriTech"
    },
    {
      id: 2,
      title: "Novel Battery Technology for Electric Vehicles",
      inventors: "Dr. R. Singh, Dr. M. Gupta",
      patentNo: "IN202411005678",
      filingDate: "2024-01-20",
      status: "Under Review",
      category: "Energy Storage"
    },
    {
      id: 3,
      title: "AI-Based Medical Image Analysis System",
      inventors: "Dr. P. Sharma, Dr. N. Verma, Dr. K. Jain",
      patentNo: "IN202311009876",
      filingDate: "2023-11-10",
      status: "Granted",
      category: "Healthcare"
    },
    {
      id: 4,
      title: "Quantum Encryption Algorithm for Secure Communications",
      inventors: "Dr. S. Kumar, Dr. A. Singh",
      patentNo: "IN202411002468",
      filingDate: "2024-02-28",
      status: "Filed",
      category: "Cybersecurity"
    }
  ];

  return (
    <>
      <Navbar />
      
      <div className="container" style={{ marginTop: '100px', marginBottom: '50px' }}>
        {/* Page Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold text-primary mb-3">Publications & Patents</h1>
            <p className="lead text-muted">
              Explore our extensive research output and intellectual property portfolio
            </p>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="row mb-5">
          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm bg-primary text-white text-center">
              <div className="card-body">
                <h3 className="fw-bold">500+</h3>
                <p className="mb-0">Total Publications</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm bg-success text-white text-center">
              <div className="card-body">
                <h3 className="fw-bold">75+</h3>
                <p className="mb-0">Patents Filed</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm bg-info text-white text-center">
              <div className="card-body">
                <h3 className="fw-bold">25.5</h3>
                <p className="mb-0">Avg Impact Factor</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm bg-warning text-white text-center">
              <div className="card-body">
                <h3 className="fw-bold">5000+</h3>
                <p className="mb-0">Total Citations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="row mb-4">
          <div className="col-12">
            <ul className="nav nav-pills nav-fill">
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === 'publications' ? 'active' : ''}`}
                  onClick={() => setActiveTab('publications')}
                >
                  <i className="fas fa-book me-2"></i>
                  Research Publications
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === 'patents' ? 'active' : ''}`}
                  onClick={() => setActiveTab('patents')}
                >
                  <i className="fas fa-lightbulb me-2"></i>
                  Patents & IP
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Publications Tab */}
        {activeTab === 'publications' && (
          <div>
            {/* Filter Section */}
            <div className="row mb-4">
              <div className="col-md-3">
                <select className="form-select">
                  <option>All Categories</option>
                  <option>Environmental Science</option>
                  <option>Biotechnology</option>
                  <option>Energy</option>
                  <option>Healthcare</option>
                  <option>Materials Science</option>
                </select>
              </div>
              <div className="col-md-3">
                <select className="form-select">
                  <option>All Years</option>
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </select>
              </div>
              <div className="col-md-3">
                <select className="form-select">
                  <option>All Types</option>
                  <option>Journal Article</option>
                  <option>Research Article</option>
                  <option>Review Article</option>
                  <option>Conference Paper</option>
                </select>
              </div>
              <div className="col-md-3">
                <input type="text" className="form-control" placeholder="Search publications..." />
              </div>
            </div>

            {/* Publications Table */}
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="table-primary">
                  <tr>
                    <th>Title & Authors</th>
                    <th>Journal/Venue</th>
                    <th>Year</th>
                    <th>Impact Factor</th>
                    <th>Citations</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {publications.map((pub) => (
                    <tr key={pub.id}>
                      <td>
                        <div>
                          <h6 className="mb-1 text-primary">{pub.title}</h6>
                          <small className="text-muted">{pub.authors}</small>
                          <div className="mt-1">
                            <span className="badge bg-secondary">{pub.category}</span>
                            <span className="badge bg-info ms-1">{pub.type}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <strong>{pub.journal}</strong>
                      </td>
                      <td>{pub.year}</td>
                      <td>
                        <span className="badge bg-success">{pub.impact}</span>
                      </td>
                      <td>
                        <span className="badge bg-warning text-dark">{pub.citations}</span>
                      </td>
                      <td>
                        <div className="btn-group btn-group-sm">
                          <button className="btn btn-outline-primary">
                            <i className="fas fa-eye"></i>
                          </button>
                          <button className="btn btn-outline-secondary">
                            <i className="fas fa-download"></i>
                          </button>
                          <button className="btn btn-outline-info">
                            <i className="fas fa-share"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Patents Tab */}
        {activeTab === 'patents' && (
          <div>
            {/* Filter Section */}
            <div className="row mb-4">
              <div className="col-md-4">
                <select className="form-select">
                  <option>All Categories</option>
                  <option>AgriTech</option>
                  <option>Energy Storage</option>
                  <option>Healthcare</option>
                  <option>Cybersecurity</option>
                </select>
              </div>
              <div className="col-md-4">
                <select className="form-select">
                  <option>All Status</option>
                  <option>Granted</option>
                  <option>Under Review</option>
                  <option>Filed</option>
                  <option>Published</option>
                </select>
              </div>
              <div className="col-md-4">
                <input type="text" className="form-control" placeholder="Search patents..." />
              </div>
            </div>

            {/* Patents Grid */}
            <div className="row g-4">
              {patents.map((patent) => (
                <div key={patent.id} className="col-lg-6">
                  <div className="card h-100 card-hover border-0 shadow">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <span className="badge bg-primary">{patent.category}</span>
                        <span className={`badge ${
                          patent.status === 'Granted' ? 'bg-success' : 
                          patent.status === 'Under Review' ? 'bg-warning text-dark' : 'bg-info'
                        }`}>
                          {patent.status}
                        </span>
                      </div>
                      
                      <h5 className="card-title text-primary mb-3">{patent.title}</h5>
                      
                      <div className="mb-3">
                        <small className="text-muted d-block mb-1">
                          <strong>Inventors:</strong> {patent.inventors}
                        </small>
                        <small className="text-muted d-block mb-1">
                          <strong>Patent No:</strong> {patent.patentNo}
                        </small>
                        <small className="text-muted d-block">
                          <strong>Filing Date:</strong> {patent.filingDate}
                        </small>
                      </div>
                      
                      <div className="d-flex gap-2 mt-auto">
                        <button className="btn btn-outline-primary btn-sm">
                          <i className="fas fa-eye me-1"></i>
                          View Details
                        </button>
                        <button className="btn btn-outline-secondary btn-sm">
                          <i className="fas fa-download me-1"></i>
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="row mt-5 pt-5 border-top">
          <div className="col-12">
            <div className="bg-light rounded p-5 text-center">
              <h3 className="text-primary mb-3">Submit Your Research</h3>
              <p className="text-muted mb-4">
                Ready to publish your research or file a patent? Get support from our research office.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <button className="btn btn-primary">Submit Publication</button>
                <button className="btn btn-success">File Patent Application</button>
                <button className="btn btn-outline-primary">Research Guidelines</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Publications;
