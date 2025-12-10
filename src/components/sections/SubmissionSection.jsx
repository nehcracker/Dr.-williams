import React, { useState, useEffect, useRef } from 'react';
import './Submission.scss';

const SubmissionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const sectionRef = useRef(null);
  
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    name: '',
    email: '',
    phone: '',
    company: '',
    
    // Step 2: Project Details
    projectTitle: '',
    projectType: '',
    projectDescription: '',
    
    // Step 3: Financials
    budget: '',
    timeline: '',
    fundingStage: '',
    
    // Step 4: Documents
    documents: null
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 10 * 1024 * 1024) { // 10MB limit
      setFormData(prevData => ({
        ...prevData,
        documents: file
      }));
    } else {
      alert('File size must be less than 10MB');
    }
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success handling
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      setCurrentStep(1);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectTitle: '',
        projectType: '',
        projectDescription: '',
        budget: '',
        timeline: '',
        fundingStage: '',
        documents: null
      });
    } catch (error) {
      setFormStatus({ 
        isSubmitting: false, 
        isSubmitted: false, 
        error: 'There was an error submitting your project. Please try again.'
      });
    }
  };

  const projectTypes = [
    'Infrastructure Development',
    'Real Estate',
    'Technology & Innovation',
    'Energy & Renewables',
    'Healthcare',
    'Manufacturing',
    'Agriculture',
    'Other'
  ];

  const fundingStages = [
    'Seed Stage',
    'Early Stage',
    'Growth Stage',
    'Expansion',
    'Acquisition'
  ];

  return (
    <section className="submission-section" id="submit-project" ref={sectionRef}>
      <div className="submission-background">
        <div className="bg-pattern"></div>
        <div className="bg-gradient-1"></div>
        <div className="bg-gradient-2"></div>
      </div>

      <div className="submission-container">
        {/* Header */}
        <div className={`submission-header ${isVisible ? 'visible' : ''}`}>
          <span className="submission-badge">Start Your Journey</span>
          <h2 className="submission-title">
            Submit Your <span className="gradient-text">Project Brief</span>
          </h2>
          <p className="submission-subtitle">
            Take the first step towards securing funding for your transformative project. 
            Our streamlined process ensures your proposal receives thorough evaluation.
          </p>
        </div>

        {formStatus.isSubmitted ? (
          // Success State
          <div className={`submission-success ${isVisible ? 'visible' : ''}`}>
            <div className="success-animation">
              <div className="success-circle">
                <div className="success-icon">✓</div>
              </div>
              <div className="success-ripple"></div>
            </div>
            
            <h3 className="success-title">Submission Received!</h3>
            <p className="success-message">
              Thank you for trusting us with your project. Our investment team will conduct 
              a comprehensive review and reach out within 3-5 business days.
            </p>
            
            <div className="success-next-steps">
              <h4>What Happens Next?</h4>
              <div className="steps-grid">
                <div className="step-item">
                  <div className="step-icon">📋</div>
                  <div className="step-text">Initial Review (1-2 days)</div>
                </div>
                <div className="step-item">
                  <div className="step-icon">🤝</div>
                  <div className="step-text">Preliminary Discussion</div>
                </div>
                <div className="step-item">
                  <div className="step-icon">🔍</div>
                  <div className="step-text">Due Diligence Process</div>
                </div>
                <div className="step-item">
                  <div className="step-icon">✅</div>
                  <div className="step-text">Funding Decision</div>
                </div>
              </div>
            </div>

            <button 
              className="success-button"
              onClick={() => setFormStatus(prev => ({ ...prev, isSubmitted: false }))}
            >
              Submit Another Project
            </button>
          </div>
        ) : (
          // Form State
          <div className={`submission-form-wrapper ${isVisible ? 'visible' : ''}`}>
            {/* Progress Indicator */}
            <div className="progress-container">
              <div className="progress-steps">
                {[1, 2, 3, 4].map((step) => (
                  <div 
                    key={step}
                    className={`progress-step ${currentStep >= step ? 'active' : ''} ${currentStep > step ? 'completed' : ''}`}
                  >
                    <div className="step-circle">
                      {currentStep > step ? '✓' : step}
                    </div>
                    <div className="step-label">
                      {step === 1 && 'Personal Info'}
                      {step === 2 && 'Project Details'}
                      {step === 3 && 'Financials'}
                      {step === 4 && 'Documents'}
                    </div>
                  </div>
                ))}
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${(currentStep - 1) * 33.33}%` }}
                ></div>
              </div>
            </div>

            <form className="submission-form" onSubmit={handleSubmit}>
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="form-step">
                  <div className="step-header">
                    <h3>Personal Information</h3>
                    <p>Let's start with your contact details</p>
                  </div>
                  
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="name">
                        Full Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">
                        Email Address <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">
                        Phone Number <span className="required">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="company">Company/Organization</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <div className="form-step">
                  <div className="step-header">
                    <h3>Project Details</h3>
                    <p>Tell us about your project</p>
                  </div>
                  
                  <div className="form-grid">
                    <div className="form-group full-width">
                      <label htmlFor="projectTitle">
                        Project Title <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="projectTitle"
                        name="projectTitle"
                        value={formData.projectTitle}
                        onChange={handleChange}
                        required
                        placeholder="Give your project a compelling title"
                      />
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="projectType">
                        Project Type <span className="required">*</span>
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="projectDescription">
                        Project Description <span className="required">*</span>
                      </label>
                      <textarea
                        id="projectDescription"
                        name="projectDescription"
                        value={formData.projectDescription}
                        onChange={handleChange}
                        required
                        rows="6"
                        placeholder="Provide a comprehensive overview of your project including objectives, market opportunity, competitive advantages, and expected outcomes..."
                      ></textarea>
                      <div className="char-count">
                        {formData.projectDescription.length} / 2000 characters
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Financial Information */}
              {currentStep === 3 && (
                <div className="form-step">
                  <div className="step-header">
                    <h3>Financial Information</h3>
                    <p>Share your funding requirements</p>
                  </div>
                  
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="budget">
                        Funding Required <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        required
                        placeholder="e.g., $500,000 - $2,000,000"
                      />
                      <div className="input-hint">
                        Minimum investment: $100,000
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="timeline">
                        Project Timeline <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        required
                        placeholder="e.g., 12-18 months"
                      />
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="fundingStage">
                        Funding Stage <span className="required">*</span>
                      </label>
                      <select
                        id="fundingStage"
                        name="fundingStage"
                        value={formData.fundingStage}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select funding stage</option>
                        {fundingStages.map((stage) => (
                          <option key={stage} value={stage}>{stage}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Documents */}
              {currentStep === 4 && (
                <div className="form-step">
                  <div className="step-header">
                    <h3>Supporting Documents</h3>
                    <p>Upload relevant documents (optional but recommended)</p>
                  </div>
                  
                  <div className="form-grid">
                    <div className="form-group full-width">
                      <label htmlFor="documents">Upload Documents</label>
                      <div className="file-upload-area">
                        <input
                          type="file"
                          id="documents"
                          name="documents"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                        />
                        <div className="file-upload-content">
                          <div className="upload-icon">📄</div>
                          <div className="upload-text">
                            <strong>Click to upload</strong> or drag and drop
                          </div>
                          <div className="upload-hint">
                            PDF, DOC, XLS, PPT (Max 10MB)
                          </div>
                          {formData.documents && (
                            <div className="file-name">
                              Selected: {formData.documents.name}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="form-group full-width">
                      <div className="document-checklist">
                        <h4>Recommended Documents:</h4>
                        <ul>
                          <li>Business Plan or Executive Summary</li>
                          <li>Financial Projections (3-5 years)</li>
                          <li>Market Analysis Report</li>
                          <li>Team Bios and Credentials</li>
                          <li>Legal Documentation (if applicable)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {formStatus.error && (
                <div className="error-message">
                  <span className="error-icon">⚠️</span>
                  {formStatus.error}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="form-navigation">
                {currentStep > 1 && (
                  <button 
                    type="button" 
                    className="btn-prev"
                    onClick={prevStep}
                  >
                    ← Previous
                  </button>
                )}
                
                {currentStep < 4 ? (
                  <button 
                    type="button" 
                    className="btn-next"
                    onClick={nextStep}
                  >
                    Next →
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    className="btn-submit"
                    disabled={formStatus.isSubmitting}
                  >
                    {formStatus.isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Submitting...
                      </>
                    ) : (
                      <>Submit Project</>
                    )}
                  </button>
                )}
              </div>
            </form>

            {/* Trust Indicators */}
            <div className="trust-indicators">
              <div className="trust-item">
                <span className="trust-icon">🔒</span>
                <span className="trust-text">Secure & Confidential</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">⚡</span>
                <span className="trust-text">3-5 Day Response</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span className="trust-text">No Obligation</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SubmissionSection;