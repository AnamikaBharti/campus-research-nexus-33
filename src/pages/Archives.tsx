 import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Archive } from "lucide-react";

const Archives = () => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeYear, setActiveYear] = useState(null);

  const schools = [
    "Biotechnology",
    "Buddhist Studies & Civilization",
    "Engineering",
    "Humanities & Social Sciences",
    "Information & Communication Technology",
    "Law, Justice and Governance",
    "Management",
    "Vocational Studies & Applied Sciences",
  ];

  const archiveData = [
    {
      year: 2022,
      publications: [
        {
          id: 1,
          title: "Advancements in Renewable Energy Systems",
          authors: "Dr. R. Verma, Dr. S. Mehta",
          journal: "Energy Today",
          school: "Engineering",
          impactFactor: 12.5,
          citations: 110,
          category: "Energy",
          type: "Journal Article",
        },
        {
          id: 2,
          title: "Machine Vision for Smart Cities",
          authors: "Dr. A. Sharma, Dr. N. Gupta",
          journal: "Smart Technologies Journal",
          school: "Information & Communication Technology",
          impactFactor: 9.2,
          citations: 85,
          category: "Technology",
          type: "Research Article",
        },
        {
          id: 3,
          title: "Sustainable Agriculture Practices in Asia",
          authors: "Dr. M. Singh, Dr. P. Kaur",
          journal: "Agricultural Sciences",
          school: "Vocational Studies & Applied Sciences",
          impactFactor: 8.7,
          citations: 92,
          category: "Agriculture",
          type: "Review Article",
        },
      ],
    },
    {
      year: 2021,
      publications: [
        {
          id: 4,
          title: "Blockchain for Secure Supply Chains",
          authors: "Dr. P. Singh, Dr. M. Kaur",
          journal: "Blockchain Journal",
          school: "Management",
          impactFactor: 7.5,
          citations: 73,
          category: "Technology",
          type: "Original Research",
        },
        {
          id: 5,
          title: "Legal Framework for Digital Rights",
          authors: "Dr. A. Gupta, Dr. S. Sharma",
          journal: "Digital Law Review",
          school: "Law, Justice and Governance",
          impactFactor: 6.8,
          citations: 64,
          category: "Law",
          type: "Journal Article",
        },
        {
          id: 6,
          title: "Buddhist Ethics in Modern Society",
          authors: "Dr. T. Norbu, Dr. L. Pema",
          journal: "Buddhist Philosophy Quarterly",
          school: "Buddhist Studies & Civilization",
          impactFactor: 5.3,
          citations: 48,
          category: "Philosophy",
          type: "Research Article",
        },
      ],
    },
    {
      year: 2020,
      publications: [
        {
          id: 7,
          title: "AI-Powered Healthcare Systems",
          authors: "Dr. V. Kumar, Dr. S. Das",
          journal: "Healthcare AI Journal",
          school: "Biotechnology",
          impactFactor: 14.8,
          citations: 120,
          category: "Healthcare",
          type: "Original Research",
        },
        {
          id: 8,
          title: "Social Impact of Digital Transformation",
          authors: "Dr. R. Patel, Dr. N. Agarwal",
          journal: "Social Sciences Review",
          school: "Humanities & Social Sciences",
          impactFactor: 7.2,
          citations: 86,
          category: "Social Sciences",
          type: "Review Article",
        },
      ],
    },
    {
      year: 2019,
      publications: [
        {
          id: 9,
          title: "Quantum Mechanics Applications in Computing",
          authors: "Dr. S. Rao, Dr. K. Menon",
          journal: "Quantum Computing Today",
          school: "Engineering",
          impactFactor: 11.4,
          citations: 98,
          category: "Physics",
          type: "Research Article",
        },
        {
          id: 10,
          title: "Corporate Social Responsibility in Emerging Markets",
          authors: "Dr. A. Jain, Dr. P. Gupta",
          journal: "Business Ethics Quarterly",
          school: "Management",
          impactFactor: 9.1,
          citations: 77,
          category: "Business Ethics",
          type: "Journal Article",
        },
      ],
    },
  ];

  const toggleYear = (year) => {
    setActiveYear(activeYear === year ? null : year);
  };

  // Filter function for archives
  const getFilteredData = () => {
    return archiveData
      .filter(yearData => !selectedYear || yearData.year.toString() === selectedYear)
      .map(yearData => ({
        ...yearData,
        publications: yearData.publications.filter(pub => {
          const matchesSchool = !selectedSchool || pub.school === selectedSchool;
          const matchesCategory = !selectedCategory || pub.category === selectedCategory;
          const matchesSearch = !searchTerm || 
            pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pub.journal.toLowerCase().includes(searchTerm.toLowerCase());
          
          return matchesSchool && matchesCategory && matchesSearch;
        })
      }))
      .filter(yearData => yearData.publications.length > 0);
  };

  const filteredData = getFilteredData();
  const totalPublications = filteredData.reduce((sum, yearData) => sum + yearData.publications.length, 0);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-background" style={{ marginTop: "", marginBottom: "50px" }}>
        {/* Page Header */}
        <section className="relative h-96 bg-gradient-to-r from-blue-600   to-blue-400">
          <div className="absolute inset-0 bg-black/50"></div>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage: 'url("https://c8.alamy.com/comp/2BPF3KC/hexagon-grid-with-icon-and-keywords-about-project-management-and-life-cycle-corporate-office-on-background-2BPF3KC.jpg")',
            }}
          ></div>
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white">
              <div className="flex items-center justify-center mb-4">
                <Archive className="w-16 h-16 mr-4" />
                <h1 className="text-5xl font-bold">Publications Archives</h1>
              </div>
              <p className="text-xl opacity-90">
                Historical research publications and scholarly works
              </p>
            </div>
          </div>
        </section>

        <div className="container">
          {/* Back to Publications Button */}
          <div className="row mt-4 mb-4">
            <div className="col-12">
              <Link to="/publications" className="btn btn-outline-primary">
                <i className="fas fa-arrow-left me-2"></i>
                Back to Publications
              </Link>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="row mb-5 mt-6">
            <div className="col-md-3 mb-4">
              <div className="card border-0 shadow-sm bg-purple-600 text-white text-center">
                <div className="card-body">
                  <h3 className="fw-bold">{archiveData.reduce((sum, year) => sum + year.publications.length, 0)}+</h3>
                  <p className="mb-0">Archived Publications</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card border-0 shadow-sm bg-indigo-600 text-white text-center">
                <div className="card-body">
                  <h3 className="fw-bold">{archiveData.length}</h3>
                  <p className="mb-0">Years Covered</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card border-0 shadow-sm bg-blue-600 text-white text-center">
                <div className="card-body">
                  <h3 className="fw-bold">8.9</h3>
                  <p className="mb-0">Avg Impact Factor</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card border-0 shadow-sm bg-teal-600 text-white text-center">
                <div className="card-body">
                  <h3 className="fw-bold">1200+</h3>
                  <p className="mb-0">Total Citations</p>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Section */}
          <div className="row mb-4">
            <div className="col-md-3">
              <select
                className="form-select"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="">All Years</option>
                {archiveData.map(yearData => (
                  <option key={yearData.year} value={yearData.year}>
                    {yearData.year}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <select
                className="form-select"
                value={selectedSchool}
                onChange={(e) => setSelectedSchool(e.target.value)}
              >
                <option value="">All Schools</option>
                {schools.map((school) => (
                  <option key={school} value={school}>
                    {school}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <select
                className="form-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="Energy">Energy</option>
                <option value="Technology">Technology</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Law">Law</option>
                <option value="Philosophy">Philosophy</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Physics">Physics</option>
                <option value="Business Ethics">Business Ethics</option>
                <option value="Social Sciences">Social Sciences</option>
              </select>
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search archives..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Results Count */}
          <div className="row mb-3">
            <div className="col-12">
              <p className="text-muted">
                Showing {totalPublications} publications from {filteredData.length} years
              </p>
            </div>
          </div>

          {/* Archives by Year */}
          <div className="row">
            <div className="col-12">
              {filteredData.map((yearData) => (
                <div key={yearData.year} className="card mb-4 border-0 shadow">
                  <div className="card-header bg-gradient-to-r  from-blue-600   to-blue-400 text-white">
                    <div className="d-flex justify-content-between align-items-center">
                      <h4 className="mb-0 text-white">
                        <i className="fas fa-calendar-alt me-2"></i>
                        {yearData.year}
                      </h4>
                      <div className="d-flex align-items-center gap-3">
                        <span className="badge bg-white text-dark">
                          {yearData.publications.length} Publications
                        </span>
                        <button
                          className="btn btn-sm btn-outline-light"
                          onClick={() => toggleYear(yearData.year)}
                        >
                          {activeYear === yearData.year ? (
                            <i className="fas fa-chevron-up"></i>
                          ) : (
                            <i className="fas fa-chevron-down"></i>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {(activeYear === yearData.year || activeYear === null) && (
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead className="table-light">
                            <tr>
                              <th>Title & Authors</th>
                              <th>School</th>
                              <th>Journal/Venue</th>
                              <th>Impact Factor</th>
                              <th>Citations</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {yearData.publications.map((pub) => (
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
                                  <span className="badge bg-primary">{pub.school}</span>
                                </td>
                                <td>
                                  <strong>{pub.journal}</strong>
                                </td>
                                <td>
                                  <span className="badge bg-success">{pub.impactFactor}</span>
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
                </div>
              ))}

              {filteredData.length === 0 && (
                <div className="text-center py-5">
                  <Archive className="w-16 h-16 text-muted mx-auto mb-3" />
                  <p className="text-muted">No archived publications found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>

          {/* Call to Action */}
          <div className="row mt-5 pt-5 border-top">
            <div className="col-12">
              <div className="bg-light rounded p-5 text-center">
                <h3 className="text-primary mb-3">Explore More Research</h3>
                <p className="text-muted mb-4">
                  Looking for recent publications? Check out our latest research output.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Link to="/research/publications" className="btn btn-primary">
                    Current Publications
                  </Link>
                  <button className="btn btn-outline-primary">Research Guidelines</button>
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

export default Archives;
