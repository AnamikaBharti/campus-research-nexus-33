
// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const ResearchCenters = () => {
//   const centers = [
//     {
//       id: 1,
//       name: "Centre for Artificial Intelligence & Machine Learning",
//       shortName: "AI-ML Center",
//       description: "Advanced research in AI, ML, deep learning, and neural networks with state-of-the-art computing infrastructure.",
//       image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
//       location: "Block A, Research Complex",
//       head: "Dr. Rajesh Kumar",
//       established: "2020",
//       facilities: ["GPU Clusters", "Quantum Simulators", "Edge Computing Lab", "Vision Lab"],
//       researchAreas: ["Computer Vision", "NLP", "Robotics", "Quantum ML"]
//     },
//     {
//       id: 2,
//       name: "Biotechnology Research Centre",
//       shortName: "BioTech Center",
//       description: "Cutting-edge biotechnology research focusing on healthcare, pharmaceuticals, and agricultural applications.",
//       image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
//       location: "Life Sciences Building",
//       head: "Dr. Priya Sharma",
//       established: "2018",
//       facilities: ["Cell Culture Lab", "Genomics Lab", "Protein Lab", "Biosafety Level 2"],
//       researchAreas: ["Gene Therapy", "Drug Discovery", "Bioprocessing", "Synthetic Biology"]
//     },
//     {
//       id: 3,
//       name: "Renewable Energy Research Institute",
//       shortName: "RERI",
//       description: "Sustainable energy solutions including solar, wind, and energy storage technologies.",
//       image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
//       location: "Green Technology Campus",
//       head: "Dr. Amit Patel",
//       established: "2019",
//       facilities: ["Solar Testing Lab", "Wind Tunnel", "Battery Testing", "Smart Grid Lab"],
//       researchAreas: ["Photovoltaics", "Energy Storage", "Smart Grids", "Fuel Cells"]
//     },
//     {
//       id: 4,
//       name: "Materials Science & Engineering Lab",
//       shortName: "MSE Lab",
//       description: "Advanced materials research for aerospace, automotive, and electronics industries.",
//       image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
//       location: "Engineering Block C",
//       head: "Dr. Sanjay Gupta",
//       established: "2017",
//       facilities: ["XRD Lab", "SEM/TEM", "Mechanical Testing", "Thin Film Lab"],
//       researchAreas: ["Nanomaterials", "Composites", "Smart Materials", "Biomaterials"]
//     },
//     {
//       id: 5,
//       name: "IoT & Cyber Security Research Centre",
//       shortName: "IoT-Security Center",
//       description: "Internet of Things and cybersecurity research for smart cities and industrial applications.",
//       image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
//       location: "IT Building, Floor 3",
//       head: "Dr. Neha Singh",
//       established: "2021",
//       facilities: ["IoT Testbed", "Security Lab", "5G Lab", "Blockchain Lab"],
//       researchAreas: ["IoT Security", "Blockchain", "5G Networks", "Edge Computing"]
//     },
//     {
//       id: 6,
//       name: "Environmental Science Research Lab",
//       shortName: "ESR Lab",
//       description: "Environmental monitoring, climate change research, and sustainable development solutions.",
//       image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
//       location: "Environmental Sciences Building",
//       head: "Dr. Kavita Mehta",
//       established: "2016",
//       facilities: ["Air Quality Lab", "Water Testing", "GIS Lab", "Climate Chamber"],
//       researchAreas: ["Climate Change", "Pollution Control", "Remote Sensing", "Green Chemistry"]
//     }
//   ];

//   return (
//     <>
//       <Navbar />
      
//       <div className="min-h-screen bg-background" style={{ marginBottom: '50px' }}>
//         {/* Page Header */}
//         {/* <div className="row mb-5">
//           <div className="col-12 text-center">
//             <h1 className="display-4 fw-bold text-primary mb-3">Research Centers & Laboratories</h1>
//             <p className="lead text-muted">
//               World-class research facilities driving innovation across multiple disciplines
//             </p>
//           </div>
//         </div> */}
//          <section className="relative h-96 bg-gradient-to-r from-emerald-900 via-teal-800 to-blue-800">
//         <div className="absolute inset-0 bg-black/50"></div>
//         <div 
//           className="absolute inset-0 bg-cover bg-center opacity-10"
//           style={{
//             backgroundImage: 'url("https://c8.alamy.com/comp/2BPF3KC/hexagon-grid-with-icon-and-keywords-about-project-management-and-life-cycle-corporate-office-on-background-2BPF3KC.jpg")'
//           }}
//         ></div>
//         <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
//           <div className="text-center text-white">
//             <h1 className="text-5xl font-bold mb-4">Research Centers & Laboratories</h1>
//             <p className="text-xl opacity-90">World-class research facilities driving innovation across multiple disciplines</p>
//           </div>
//         </div>
//       </section>

// <div className="container">
//         {/* Quick Stats */}
//         <div className="row mb-5 mt-10">
//           <div className="col-md-3 text-center mb-4">
//             <div className="bg-primary text-white rounded p-3">
//               <h3 className="fw-bold mb-1">25+</h3>
//               <p className="mb-0 small">Research Centers</p>
//             </div>
//           </div>
//           <div className="col-md-3 text-center mb-4">
//             <div className="bg-success text-white rounded p-3">
//               <h3 className="fw-bold mb-1">150+</h3>
//               <p className="mb-0 small">Research Faculty</p>
//             </div>
//           </div>
//           <div className="col-md-3 text-center mb-4">
//             <div className="bg-info text-white rounded p-3">
//               <h3 className="fw-bold mb-1">₹50Cr+</h3>
//               <p className="mb-0 small">Research Funding</p>
//             </div>
//           </div>
//           <div className="col-md-3 text-center mb-4">
//             <div className="bg-warning text-white rounded p-3">
//               <h3 className="fw-bold mb-1">300+</h3>
//               <p className="mb-0 small">Active Projects</p>
//             </div>
//           </div>
//         </div>

//         {/* Research Centers Grid */}
//         <div className="row g-4">
//           {centers.map((center) => (
//             <div key={center.id} className="col-lg-6">
//               <div className="card h-100 card-hover border-0 shadow">
//                 <div className="position-relative">
//                   <img 
//                     src={center.image} 
//                     alt={center.name}
//                     className="card-img-top"
//                     style={{ height: '200px', objectFit: 'cover' }}
//                   />
//                   <div className="position-absolute top-0 end-0 m-2">
//                     <span className="badge bg-primary">Est. {center.established}</span>
//                   </div>
//                 </div>
                
//                 <div className="card-body d-flex flex-column">
//                   <div className="mb-3">
//                     <h5 className="card-title text-primary mb-1">{center.name}</h5>
//                     <small className="text-muted">{center.shortName}</small>
//                   </div>
                  
//                   <p className="card-text text-muted mb-3">{center.description}</p>
                  
//                   <div className="mb-3">
//                     <div className="row g-2 text-sm">
//                       <div className="col-12">
//                         <strong className="text-primary">Head:</strong> {center.head}
//                       </div>
//                       <div className="col-12">
//                         <strong className="text-primary">Location:</strong> {center.location}
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="mb-3">
//                     <h6 className="text-primary mb-2">Key Facilities:</h6>
//                     <div className="d-flex flex-wrap gap-1">
//                       {center.facilities.map((facility, index) => (
//                         <span key={index} className="badge bg-light text-dark small">
//                           {facility}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
                  
//                   <div className="mb-4">
//                     <h6 className="text-primary mb-2">Research Areas:</h6>
//                     <div className="d-flex flex-wrap gap-1">
//                       {center.researchAreas.map((area, index) => (
//                         <span key={index} className="badge bg-secondary small">
//                           {area}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
                  
//                   <div className="mt-auto d-flex gap-2">
//                     <button className="btn btn-primary btn-sm flex-fill">Visit Lab</button>
//                     <button className="btn btn-outline-primary btn-sm flex-fill">Contact</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Collaboration Section */}
//         <div className="row mt-5 pt-5 border-top">
//           <div className="col-12">
//             <div className="bg-light rounded p-5">
//               <div className="row align-items-center">
//                 <div className="col-lg-8">
//                   <h3 className="text-primary mb-3">Industry Collaborations & Partnerships</h3>
//                   <p className="text-muted mb-4">
//                     Our research centers actively collaborate with leading industries, government organizations, 
//                     and international institutions to drive innovation and translate research into real-world solutions.
//                   </p>
//                   <div className="row g-3">
//                     <div className="col-md-4">
//                       <div className="d-flex align-items-center">
//                         <i className="fas fa-handshake text-primary me-2"></i>
//                         <span>50+ Industry Partners</span>
//                       </div>
//                     </div>
//                     <div className="col-md-4">
//                       <div className="d-flex align-items-center">
//                         <i className="fas fa-globe text-success me-2"></i>
//                         <span>20+ International Ties</span>
//                       </div>
//                     </div>
//                     <div className="col-md-4">
//                       <div className="d-flex align-items-center">
//                         <i className="fas fa-users text-info me-2"></i>
//                         <span>100+ Joint Projects</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-lg-4 text-center">
//                   <button className="btn btn-primary btn-lg mb-2 w-100">
//                     Partner With Us
//                   </button>
//                   <button className="btn btn-outline-primary w-100">
//                     Schedule Lab Visit
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
// </div>
//         {/* Equipment & Infrastructure */}
//         <div className="row mt-5">
//           <div className="col-12 text-center mb-4">
//             <h3 className="text-primary">Research Infrastructure</h3>
//             <p className="text-muted">State-of-the-art equipment and facilities</p>
//           </div>
          
//           <div className="col-md-3 text-center mb-4">
//             <div className="border rounded p-4 h-100">
//               <i className="fas fa-microscope text-primary fs-2 mb-3"></i>
//               <h5>Advanced Instrumentation</h5>
//               <p className="text-muted small">High-end analytical and characterization equipment</p>
//             </div>
//           </div>
          
//           <div className="col-md-3 text-center mb-4">
//             <div className="border rounded p-4 h-100">
//               <i className="fas fa-server text-success fs-2 mb-3"></i>
//               <h5>Computing Infrastructure</h5>
//               <p className="text-muted small">High-performance computing clusters and cloud resources</p>
//             </div>
//           </div>
          
//           <div className="col-md-3 text-center mb-4">
//             <div className="border rounded p-4 h-100">
//               <i className="fas fa-shield-alt text-info fs-2 mb-3"></i>
//               <h5>Safety Systems</h5>
//               <p className="text-muted small">Comprehensive safety protocols and emergency systems</p>
//             </div>
//           </div>
          
//           <div className="col-md-3 text-center mb-4">
//             <div className="border rounded p-4 h-100">
//               <i className="fas fa-wifi text-warning fs-2 mb-3"></i>
//               <h5>Smart Connectivity</h5>
//               <p className="text-muted small">IoT-enabled labs with real-time monitoring</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default ResearchCenters;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
const ResearchCenters = () => {
  const centers = [
    {
      id: 1,
      name: "Centre for Artificial Intelligence & Machine Learning",
      shortName: "AI-ML Center",
      description: "Advanced research in AI, ML, deep learning, and neural networks with state-of-the-art computing infrastructure.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
      location: "Block A, Research Complex",
      head: "Dr. Rajesh Kumar",
      established: "2020",
      facilities: ["GPU Clusters", "Quantum Simulators", "Edge Computing Lab", "Vision Lab"],
      researchAreas: ["Computer Vision", "NLP", "Robotics", "Quantum ML"],
      school: "Information & Communication Technology"
    },
    {
      id: 2,
      name: "Biotechnology Research Centre",
      shortName: "BioTech Center",
      description: "Cutting-edge biotechnology research focusing on healthcare, pharmaceuticals, and agricultural applications.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      location: "Life Sciences Building",
      head: "Dr. Priya Sharma",
      established: "2018",
      facilities: ["Cell Culture Lab", "Genomics Lab", "Protein Lab", "Biosafety Level 2"],
      researchAreas: ["Gene Therapy", "Drug Discovery", "Bioprocessing", "Synthetic Biology"],
      school: "Biotechnology"
    },
    {
      id: 3,
      name: "Renewable Energy Research Institute",
      shortName: "RERI",
      description: "Sustainable energy solutions including solar, wind, and energy storage technologies.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      location: "Green Technology Campus",
      head: "Dr. Amit Patel",
      established: "2019",
      facilities: ["Solar Testing Lab", "Wind Tunnel", "Battery Testing", "Smart Grid Lab"],
      researchAreas: ["Photovoltaics", "Energy Storage", "Smart Grids", "Fuel Cells"],
      school: "Engineering"
    },
    {
      id: 4,
      name: "Materials Science & Engineering Lab",
      shortName: "MSE Lab",
      description: "Advanced materials research for aerospace, automotive, and electronics industries.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
      location: "Engineering Block C",
      head: "Dr. Sanjay Gupta",
      established: "2017",
      facilities: ["XRD Lab", "SEM/TEM", "Mechanical Testing", "Thin Film Lab"],
      researchAreas: ["Nanomaterials", "Composites", "Smart Materials", "Biomaterials"],
      school: "Engineering"
    },
    {
      id: 5,
      name: "IoT & Cyber Security Research Centre",
      shortName: "IoT-Security Center",
      description: "Internet of Things and cybersecurity research for smart cities and industrial applications.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      location: "IT Building, Floor 3",
      head: "Dr. Neha Singh",
      established: "2021",
      facilities: ["IoT Testbed", "Security Lab", "5G Lab", "Blockchain Lab"],
      researchAreas: ["IoT Security", "Blockchain", "5G Networks", "Edge Computing"],
      school: "Information & Communication Technology"
    },
    {
      id: 6,
      name: "Environmental Science Research Lab",
      shortName: "ESR Lab",
      description: "Environmental monitoring, climate change research, and sustainable development solutions.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      location: "Environmental Sciences Building",
      head: "Dr. Kavita Mehta",
      established: "2016",
      facilities: ["Air Quality Lab", "Water Testing", "GIS Lab", "Climate Chamber"],
      researchAreas: ["Climate Change", "Pollution Control", "Remote Sensing", "Green Chemistry"],
      school: "Vocational Studies & Applied Sciences"
    }
  ];
  const [selectedSchool, setSelectedSchool] = useState('all');
  const [selectedTechnology, setSelectedTechnology] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const schools = [...new Set(centers.map(center => center.school))];
  const technologies = [...new Set(centers.flatMap(center => center.researchAreas))];

  const filteredCenters = centers.filter(center => {
    const matchesSchool = selectedSchool === 'all' || center.school === selectedSchool;
    const matchesTechnology = selectedTechnology === 'all' || center.researchAreas.includes(selectedTechnology);
    const matchesSearch = center.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSchool && matchesTechnology && matchesSearch;
  });


  return (
    <>
      <Navbar />
      
      <div className="min-h-screen bg-background" style={{ marginBottom: '50px' }}>
        <section className="relative h-96 bg-gradient-to-r from-emerald-900 via-teal-800 to-blue-800">
          <div className="absolute inset-0 bg-black/50"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage: 'url("https://c8.alamy.com/comp/2BPF3KC/hexagon-grid-with-icon-and-keywords-about-project-management-and-life-cycle-corporate-office-on-background-2BPF3KC.jpg")'
            }}
          ></div>
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Research Centers & Laboratories</h1>
              <p className="text-xl opacity-90">World-class research facilities driving innovation across multiple disciplines</p>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row mb-5 mt-10">
            <div className="col-md-3 text-center mb-4">
              <div className="bg-primary text-white rounded p-3">
                <h3 className="fw-bold mb-1">25+</h3>
                <p className="mb-0 small">Research Centers</p>
              </div>
            </div>
            <div className="col-md-3 text-center mb-4">
              <div className="bg-success text-white rounded p-3">
                <h3 className="fw-bold mb-1">150+</h3>
                <p className="mb-0 small">Research Faculty</p>
              </div>
            </div>
            <div className="col-md-3 text-center mb-4">
              <div className="bg-info text-white rounded p-3">
                <h3 className="fw-bold mb-1">₹50Cr+</h3>
                <p className="mb-0 small">Research Funding</p>
              </div>
            </div>
            <div className="col-md-3 text-center mb-4">
              <div className="bg-warning text-white rounded p-3">
                <h3 className="fw-bold mb-1">300+</h3>
                <p className="mb-0 small">Active Projects</p>
              </div>
            </div>
          </div>
<div className="container my-5">
        <div className="mb-4 d-flex flex-wrap gap-3">
          <select className="form-select w-auto" value={selectedSchool} onChange={(e) => setSelectedSchool(e.target.value)}>
            <option value="all">All Schools</option>
            {schools.map((school, index) => (
              <option key={index} value={school}>{school}</option>
            ))}
          </select>

          <select className="form-select w-auto" value={selectedTechnology} onChange={(e) => setSelectedTechnology(e.target.value)}>
            <option value="all">All Technologies</option>
            {technologies.map((tech, index) => (
              <option key={index} value={tech}>{tech}</option>
            ))}
          </select>

          <input
            type="text"
            className="form-control w-auto"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="row g-4">
          {filteredCenters.length > 0 ? filteredCenters.map((center) => (
            <div key={center.id} className="col-lg-6">
              <div className="card h-100 card-hover border-0 shadow">
                <div className="position-relative">
                  <img src={center.image} alt={center.name} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className="badge bg-primary">Est. {center.established}</span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <div className="mb-3">
                    <h5 className="card-title text-primary mb-1">{center.name}</h5>
                    <small className="text-muted">{center.shortName} | {center.school}</small>
                  </div>
                  <p className="card-text text-muted mb-3">{center.description}</p>
                  <div className="mb-3">
                    <div className="row g-2 text-sm">
                      <div className="col-12">
                        <strong className="text-primary">Head:</strong> {center.head}
                      </div>
                      <div className="col-12">
                        <strong className="text-primary">Location:</strong> {center.location}
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <h6 className="text-primary mb-2">Key Facilities:</h6>
                    <div className="d-flex flex-wrap gap-1">
                      {center.facilities.map((facility, index) => (
                        <span key={index} className="badge bg-light text-dark small">{facility}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h6 className="text-primary mb-2">Research Areas:</h6>
                    <div className="d-flex flex-wrap gap-1">
                      {center.researchAreas.map((area, index) => (
                        <span key={index} className="badge bg-secondary small">{area}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto d-flex gap-2">
                    <button className="btn btn-primary btn-sm flex-fill">Visit Lab</button>
                    <button className="btn btn-outline-primary btn-sm flex-fill">Contact</button>
                  </div>
                </div>
              </div>
            </div>
          )) : (
            <div className="col-12 text-center">
              <p className="text-muted">No research centers found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
          <div className="row g-4">
            {centers.map((center) => (
              <div key={center.id} className="col-lg-6">
                <div className="card h-100 card-hover border-0 shadow">
                  <div className="position-relative">
                    <img 
                      src={center.image} 
                      alt={center.name}
                      className="card-img-top"
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-0 end-0 m-2">
                      <span className="badge bg-primary">Est. {center.established}</span>
                    </div>
                  </div>
                  
                  <div className="card-body d-flex flex-column">
                    <div className="mb-3">
                      <h5 className="card-title text-primary mb-1">{center.name}</h5>
                      <small className="text-muted">{center.shortName}</small>
                    </div>
                    
                    <p className="card-text text-muted mb-3">{center.description}</p>
                    
                    <div className="mb-3">
                      <div className="row g-2 text-sm">
                        <div className="col-12">
                          <strong className="text-primary">Head:</strong> {center.head}
                        </div>
                        <div className="col-12">
                          <strong className="text-primary">Location:</strong> {center.location}
                        </div>
                        <div className="col-12">
                          <strong className="text-primary">School:</strong> {center.school}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <h6 className="text-primary mb-2">Key Facilities:</h6>
                      <div className="d-flex flex-wrap gap-1">
                        {center.facilities.map((facility, index) => (
                          <span key={index} className="badge bg-light text-dark small">
                            {facility}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h6 className="text-primary mb-2">Research Areas:</h6>
                      <div className="d-flex flex-wrap gap-1">
                        {center.researchAreas.map((area, index) => (
                          <span key={index} className="badge bg-secondary small">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-auto d-flex gap-2">
                      <button className="btn btn-primary btn-sm flex-fill">Visit Lab</button>
                      <button className="btn btn-outline-primary btn-sm flex-fill">Contact</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Collaboration Section */}
          <div className="row mt-5 pt-5 border-top">
            <div className="col-12">
              <div className="bg-light rounded p-5">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <h3 className="text-primary mb-3">Industry Collaborations & Partnerships</h3>
                    <p className="text-muted mb-4">
                      Our research centers actively collaborate with leading industries, government organizations, 
                      and international institutions to drive innovation and translate research into real-world solutions.
                    </p>
                    <div className="row g-3">
                      <div className="col-md-4">
                        <div className="d-flex align-items-center">
                          <i className="fas fa-handshake text-primary me-2"></i>
                          <span>50+ Industry Partners</span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="d-flex align-items-center">
                          <i className="fas fa-globe text-success me-2"></i>
                          <span>20+ International Ties</span>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="d-flex align-items-center">
                          <i className="fas fa-users text-info me-2"></i>
                          <span>100+ Joint Projects</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 text-center">
                    <button className="btn btn-primary btn-lg mb-2 w-100">
                      Partner With Us
                    </button>
                    <button className="btn btn-outline-primary w-100">
                      Schedule Lab Visit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Equipment & Infrastructure */}
          <div className="row mt-5">
            <div className="col-12 text-center mb-4">
              <h3 className="text-primary">Research Infrastructure</h3>
              <p className="text-muted">State-of-the-art equipment and facilities</p>
            </div>

            <div className="col-md-3 text-center mb-4">
              <div className="border rounded p-4 h-100">
                <i className="fas fa-microscope text-primary fs-2 mb-3"></i>
                <h5>Advanced Instrumentation</h5>
                <p className="text-muted small">High-end analytical and characterization equipment</p>
              </div>
            </div>

            <div className="col-md-3 text-center mb-4">
              <div className="border rounded p-4 h-100">
                <i className="fas fa-server text-success fs-2 mb-3"></i>
                <h5>Computing Infrastructure</h5>
                <p className="text-muted small">High-performance computing clusters and cloud resources</p>
              </div>
            </div>

            <div className="col-md-3 text-center mb-4">
              <div className="border rounded p-4 h-100">
                <i className="fas fa-shield-alt text-info fs-2 mb-3"></i>
                <h5>Safety Systems</h5>
                <p className="text-muted small">Comprehensive safety protocols and emergency systems</p>
              </div>
            </div>

            <div className="col-md-3 text-center mb-4">
              <div className="border rounded p-4 h-100">
                <i className="fas fa-wifi text-warning fs-2 mb-3"></i>
                <h5>Smart Connectivity</h5>
                <p className="text-muted small">IoT-enabled labs with real-time monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ResearchCenters;
