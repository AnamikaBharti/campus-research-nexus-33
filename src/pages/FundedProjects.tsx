
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FundedProjects = () => {
  const [activeAccordion, setActiveAccordion] = useState('projects');
  
  const fundedProjects = [
    {
      id: 1,
      title: "AI-Powered Climate Change Modeling for Agricultural Sustainability",
      pi: "Dr. Ramesh Kumar",
      coPi: "Dr. Priya Sharma, Dr. Amit Singh",
      fundingAgency: "Department of Science & Technology (DST)",
      amount: "₹45.2 Lakhs",
      duration: "3 years (2022-2025)",
      status: "Ongoing",
      category: "Climate Research",
      description: "Development of machine learning models to predict climate change impacts on crop yields and recommend adaptive farming strategies."
    },
    {
      id: 2,
      title: "Quantum Computing Applications in Drug Discovery",
      pi: "Dr. Neha Verma",
      coPi: "Dr. Sanjay Gupta",
      fundingAgency: "Indian Council of Medical Research (ICMR)",
      amount: "₹38.7 Lakhs",
      duration: "4 years (2023-2027)",
      status: "Ongoing",
      category: "Biotechnology",
      description: "Leveraging quantum algorithms to accelerate the drug discovery process for treating rare genetic diseases."
    },
    {
      id: 3,
      title: "Smart Grid Integration with Renewable Energy Sources",
      pi: "Dr. Vikash Patel",
      coPi: "Dr. Kavita Jain, Dr. Rohit Agarwal",
      fundingAgency: "Ministry of New and Renewable Energy (MNRE)",
      amount: "₹52.1 Lakhs",
      duration: "3 years (2023-2026)",
      status: "Ongoing",
      category: "Energy Systems",
      description: "Development of intelligent grid systems for optimal integration of solar and wind energy with traditional power infrastructure."
    },
    {
      id: 4,
      title: "Biodegradable Plastic Alternatives from Agricultural Waste",
      pi: "Dr. Meera Joshi",
      coPi: "Dr. Arjun Mehta",
      fundingAgency: "Department of Biotechnology (DBT)",
      amount: "₹31.5 Lakhs",
      duration: "2 years (2024-2026)",
      status: "Recently Started",
      category: "Environmental Science",
      description: "Creating eco-friendly plastic substitutes using agricultural waste through innovative biotechnology processes."
    },
    {
      id: 5,
      title: "IoT-Based Healthcare Monitoring for Rural Areas",
      pi: "Dr. Ankit Singh",
      coPi: "Dr. Ritu Kumari",
      fundingAgency: "Indian Space Research Organisation (ISRO)",
      amount: "₹42.8 Lakhs",
      duration: "3 years (2022-2025)",
      status: "Final Phase",
      category: "Healthcare Technology",
      description: "Satellite-connected IoT devices for remote health monitoring and telemedicine in underserved rural communities."
    },
    {
      id: 6,
      title: "Advanced Materials for Aerospace Applications",
      pi: "Dr. Suresh Chandra",
      coPi: "Dr. Deepak Rao",
      fundingAgency: "Defence Research and Development Organisation (DRDO)",
      amount: "₹67.3 Lakhs",
      duration: "4 years (2021-2025)",
      status: "Ongoing",
      category: "Materials Science",
      description: "Development of ultra-lightweight, high-strength composite materials for next-generation aerospace vehicles."
    }
  ];

  const iprInfo = [
    {
      title: "Patent Filing Support",
      description: "Complete assistance for patent application preparation, filing, and prosecution.",
      services: ["Prior art search", "Patent drafting", "Filing assistance", "Prosecution support"]
    },
    {
      title: "Intellectual Property Protection",
      description: "Comprehensive IP protection strategies for research innovations and commercial applications.",
      services: ["IP strategy development", "Freedom to operate analysis", "IP portfolio management", "Licensing support"]
    },
    {
      title: "Technology Transfer",
      description: "Facilitating the transfer of university research to industry and commercial applications.",
      services: ["Technology evaluation", "Industry partnerships", "Licensing negotiations", "Startup formation"]
    },
    {
      title: "IP Education & Training",
      description: "Training programs for faculty and students on intellectual property rights and commercialization.",
      services: ["IP awareness workshops", "Patent writing training", "Commercialization seminars", "Industry interactions"]
    }
  ];

  const fundingStats = {
    totalProjects: 75,
    totalFunding: "₹15.2 Crores",
    activeProjects: 45,
    completedProjects: 30,
    agencies: 12,
    patents: 28
  };

  return (
    <>
      <Navbar />
      
      <div className="container" style={{ marginTop: '100px', marginBottom: '50px' }}>
        {/* Page Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-4 fw-bold text-primary mb-3">Funded Projects & IPR Cell</h1>
            <p className="lead text-muted">
              Comprehensive research funding information and intellectual property support services
            </p>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="row mb-5">
          <div className="col-md-2 mb-3">
            <div className="card border-0 shadow-sm bg-primary text-white text-center">
              <div className="card-body py-3">
                <h4 className="fw-bold mb-1">{fundingStats.totalProjects}</h4>
                <small>Total Projects</small>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-3">
            <div className="card border-0 shadow-sm bg-success text-white text-center">
              <div className="card-body py-3">
                <h4 className="fw-bold mb-1">{fundingStats.totalFunding}</h4>
                <small>Total Funding</small>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-3">
            <div className="card border-0 shadow-sm bg-info text-white text-center">
              <div className="card-body py-3">
                <h4 className="fw-bold mb-1">{fundingStats.activeProjects}</h4>
                <small>Active Projects</small>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-3">
            <div className="card border-0 shadow-sm bg-warning text-white text-center">
              <div className="card-body py-3">
                <h4 className="fw-bold mb-1">{fundingStats.completedProjects}</h4>
                <small>Completed</small>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-3">
            <div className="card border-0 shadow-sm bg-secondary text-white text-center">
              <div className="card-body py-3">
                <h4 className="fw-bold mb-1">{fundingStats.agencies}</h4>
                <small>Funding Agencies</small>
              </div>
            </div>
          </div>
          <div className="col-md-2 mb-3">
            <div className="card border-0 shadow-sm bg-danger text-white text-center">
              <div className="card-body py-3">
                <h4 className="fw-bold mb-1">{fundingStats.patents}</h4>
                <small>Patents Filed</small>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Accordion */}
        <div className="accordion" id="mainAccordion">
          {/* Funded Projects Section */}
          <div className="accordion-item border-0 shadow-sm mb-3">
            <h2 className="accordion-header">
              <button 
                className={`accordion-button ${activeAccordion !== 'projects' ? 'collapsed' : ''}`}
                type="button" 
                onClick={() => setActiveAccordion(activeAccordion === 'projects' ? '' : 'projects')}
              >
                <i className="fas fa-project-diagram me-3 text-primary"></i>
                <strong>Funded Research Projects</strong>
              </button>
            </h2>
            <div className={`accordion-collapse collapse ${activeAccordion === 'projects' ? 'show' : ''}`}>
              <div className="accordion-body">
                {/* Filter Section */}
                <div className="row mb-4">
                  <div className="col-md-3">
                    <select className="form-select">
                      <option>All Categories</option>
                      <option>Climate Research</option>
                      <option>Biotechnology</option>
                      <option>Energy Systems</option>
                      <option>Environmental Science</option>
                      <option>Healthcare Technology</option>
                      <option>Materials Science</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select className="form-select">
                      <option>All Status</option>
                      <option>Ongoing</option>
                      <option>Recently Started</option>
                      <option>Final Phase</option>
                      <option>Completed</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <select className="form-select">
                      <option>All Agencies</option>
                      <option>DST</option>
                      <option>ICMR</option>
                      <option>MNRE</option>
                      <option>DBT</option>
                      <option>ISRO</option>
                      <option>DRDO</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <input type="text" className="form-control" placeholder="Search projects..." />
                  </div>
                </div>

                {/* Projects Table */}
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead className="table-light">
                      <tr>
                        <th>Project Details</th>
                        <th>Principal Investigator</th>
                        <th>Funding Agency</th>
                        <th>Amount & Duration</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fundedProjects.map((project) => (
                        <tr key={project.id}>
                          <td>
                            <div>
                              <h6 className="mb-1 text-primary">{project.title}</h6>
                              <p className="text-muted small mb-2">{project.description}</p>
                              <span className="badge bg-secondary">{project.category}</span>
                            </div>
                          </td>
                          <td>
                            <div>
                              <strong>{project.pi}</strong>
                              {project.coPi && (
                                <div className="small text-muted">
                                  Co-PI: {project.coPi}
                                </div>
                              )}
                            </div>
                          </td>
                          <td>
                            <strong>{project.fundingAgency}</strong>
                          </td>
                          <td>
                            <div>
                              <div className="text-success fw-bold">{project.amount}</div>
                              <small className="text-muted">{project.duration}</small>
                            </div>
                          </td>
                          <td>
                            <span className={`badge ${
                              project.status === 'Ongoing' ? 'bg-primary' :
                              project.status === 'Recently Started' ? 'bg-success' :
                              project.status === 'Final Phase' ? 'bg-warning text-dark' : 'bg-info'
                            }`}>
                              {project.status}
                            </span>
                          </td>
                          <td>
                            <div className="btn-group btn-group-sm">
                              <button className="btn btn-outline-primary">
                                <i className="fas fa-eye"></i>
                              </button>
                              <button className="btn btn-outline-secondary">
                                <i className="fas fa-download"></i>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* IPR Cell Section */}
          <div className="accordion-item border-0 shadow-sm mb-3">
            <h2 className="accordion-header">
              <button 
                className={`accordion-button ${activeAccordion !== 'ipr' ? 'collapsed' : ''}`}
                type="button" 
                onClick={() => setActiveAccordion(activeAccordion === 'ipr' ? '' : 'ipr')}
              >
                <i className="fas fa-balance-scale me-3 text-primary"></i>
                <strong>Intellectual Property Rights (IPR) Cell</strong>
              </button>
            </h2>
            <div className={`accordion-collapse collapse ${activeAccordion === 'ipr' ? 'show' : ''}`}>
              <div className="accordion-body">
                <div className="row mb-4">
                  <div className="col-12">
                    <div className="bg-light rounded p-4">
                      <h5 className="text-primary mb-3">About IPR Cell</h5>
                      <p className="text-muted">
                        The Intellectual Property Rights (IPR) Cell at Gautam Buddha University provides comprehensive 
                        support for protecting intellectual property generated through research and innovation. 
                        Our mission is to foster a culture of innovation and help researchers transform their ideas 
                        into protected intellectual assets that benefit society.
                      </p>
                      <div className="row mt-4">
                        <div className="col-md-4 mb-3">
                          <div className="d-flex align-items-center">
                            <i className="fas fa-check-circle text-success me-2"></i>
                            <span>IP Protection & Management</span>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="d-flex align-items-center">
                            <i className="fas fa-check-circle text-success me-2"></i>
                            <span>Technology Transfer</span>
                          </div>
                        </div>
                        <div className="col-md-4 mb-3">
                          <div className="d-flex align-items-center">
                            <i className="fas fa-check-circle text-success me-2"></i>
                            <span>Industry Collaboration</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* IPR Services */}
                <div className="row g-4 mb-4">
                  {iprInfo.map((item, index) => (
                    <div key={index} className="col-md-6">
                      <div className="card h-100 border-0 shadow-sm card-hover">
                        <div className="card-body">
                          <h5 className="card-title text-primary mb-3">{item.title}</h5>
                          <p className="card-text text-muted mb-4">{item.description}</p>
                          <ul className="list-group list-group-flush">
                            {item.services.map((service, i) => (
                              <li key={i} className="list-group-item bg-transparent px-0">
                                <i className="fas fa-angle-right text-primary me-2"></i>
                                {service}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* IPR Process */}
                <div className="row mt-4">
                  <div className="col-12">
                    <h5 className="text-primary mb-3">IP Filing Process</h5>
                    <div className="row text-center">
                      <div className="col-md-3 mb-4">
                        <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{width: '60px', height: '60px'}}>
                          <span className="fw-bold">1</span>
                        </div>
                        <h6>Innovation Disclosure</h6>
                        <small className="text-muted">Submit your invention disclosure form</small>
                      </div>
                      
                      <div className="col-md-3 mb-4">
                        <div className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{width: '60px', height: '60px'}}>
                          <span className="fw-bold">2</span>
                        </div>
                        <h6>IP Evaluation</h6>
                        <small className="text-muted">Assessment and patentability analysis</small>
                      </div>
                      
                      <div className="col-md-3 mb-4">
                        <div className="bg-warning text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{width: '60px', height: '60px'}}>
                          <span className="fw-bold">3</span>
                        </div>
                        <h6>Filing Application</h6>
                        <small className="text-muted">Drafting and filing with patent office</small>
                      </div>
                      
                      <div className="col-md-3 mb-4">
                        <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                           style={{width: '60px', height: '60px'}}>
                          <span className="fw-bold">4</span>
                        </div>
                        <h6>Commercialization</h6>
                        <small className="text-muted">Technology transfer and licensing</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Funding Opportunities Section */}
          <div className="accordion-item border-0 shadow-sm mb-3">
            <h2 className="accordion-header">
              <button 
                className={`accordion-button ${activeAccordion !== 'funding' ? 'collapsed' : ''}`}
                type="button" 
                onClick={() => setActiveAccordion(activeAccordion === 'funding' ? '' : 'funding')}
              >
                <i className="fas fa-money-bill-wave me-3 text-primary"></i>
                <strong>Funding Opportunities</strong>
              </button>
            </h2>
            <div className={`accordion-collapse collapse ${activeAccordion === 'funding' ? 'show' : ''}`}>
              <div className="accordion-body">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead className="table-light">
                      <tr>
                        <th>Funding Agency</th>
                        <th>Scheme Name</th>
                        <th>Research Area</th>
                        <th>Deadline</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>DST</strong></td>
                        <td>Technology Innovation Hubs</td>
                        <td>AI & Machine Learning</td>
                        <td>30 June 2024</td>
                        <td><button className="btn btn-sm btn-outline-primary">View Details</button></td>
                      </tr>
                      <tr>
                        <td><strong>DBT</strong></td>
                        <td>Biotechnology Ignition Grant</td>
                        <td>Healthcare & Biotech</td>
                        <td>15 July 2024</td>
                        <td><button className="btn btn-sm btn-outline-primary">View Details</button></td>
                      </tr>
                      <tr>
                        <td><strong>MNRE</strong></td>
                        <td>Renewable Energy Research</td>
                        <td>Green Technologies</td>
                        <td>20 August 2024</td>
                        <td><button className="btn btn-sm btn-outline-primary">View Details</button></td>
                      </tr>
                      <tr>
                        <td><strong>ICMR</strong></td>
                        <td>Health Research Scheme</td>
                        <td>Medical Sciences</td>
                        <td>10 September 2024</td>
                        <td><button className="btn btn-sm btn-outline-primary">View Details</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="text-center mt-4">
                  <button className="btn btn-primary">
                    View All Funding Opportunities
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Partnership */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="bg-light rounded p-5">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <h3 className="text-primary mb-3">Industry-Academia Collaboration</h3>
                  <p className="text-muted mb-4">
                    We actively seek partnerships with industry to translate our research into 
                    real-world applications. Our collaboration models include sponsored research, 
                    consultancy services, technology licensing, and joint R&D projects.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <strong className="d-block mb-2">Collaboration Models:</strong>
                      <ul className="list-unstyled">
                        <li className="mb-1"><i className="fas fa-check-circle text-success me-2"></i> Sponsored Research</li>
                        <li className="mb-1"><i className="fas fa-check-circle text-success me-2"></i> Joint R&D Projects</li>
                        <li className="mb-1"><i className="fas fa-check-circle text-success me-2"></i> Technology Licensing</li>
                        <li className="mb-1"><i className="fas fa-check-circle text-success me-2"></i> Consultancy Services</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <strong className="d-block mb-2">Industry Partners:</strong>
                      <ul className="list-unstyled">
                        <li className="mb-1"><i className="fas fa-building text-primary me-2"></i> Leading IT Companies</li>
                        <li className="mb-1"><i className="fas fa-building text-primary me-2"></i> Pharmaceutical Firms</li>
                        <li className="mb-1"><i className="fas fa-building text-primary me-2"></i> Manufacturing Industries</li>
                        <li className="mb-1"><i className="fas fa-building text-primary me-2"></i> Energy Corporations</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="card border-0 shadow-sm">
                    <div className="card-body p-4">
                      <h5 className="text-primary mb-3">Partner With Us</h5>
                      <form>
                        <div className="mb-3">
                          <label className="form-label">Organization Name</label>
                          <input type="text" className="form-control" placeholder="Your organization name" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Contact Person</label>
                          <input type="text" className="form-control" placeholder="Full name" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input type="email" className="form-control" placeholder="Email address" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Collaboration Interest</label>
                          <select className="form-select">
                            <option>Select your interest</option>
                            <option>Sponsored Research</option>
                            <option>Technology Licensing</option>
                            <option>Joint R&D Project</option>
                            <option>Consultancy</option>
                          </select>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Submit Inquiry</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FundedProjects;
