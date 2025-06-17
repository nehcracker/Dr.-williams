// src/components/sections/SubmissionSection.jsx

import React, { useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/Input';
import './Submission.scss';

const SubmissionSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectTitle: '',
    projectDescription: '',
    budget: '',
    timeline: '',
    documents: null
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prevData => ({
      ...prevData,
      documents: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success handling
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectTitle: '',
        projectDescription: '',
        budget: '',
        timeline: '',
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

  return (
    <section className="submission-section">
      <div className="submission-container">
        <div className="submission-header">
          <h2>Submit Your Project</h2>
          <p>Share your project details with us for funding consideration</p>
        </div>

        {formStatus.isSubmitted ? (
          <div className="submission-success">
            <div className="success-icon">✓</div>
            <h3>Project Submitted Successfully!</h3>
            <p>Thank you for your submission. Our team will review your project and contact you within 2 business days.</p>
            <Button 
              type="button" 
              onClick={() => setFormStatus(prev => ({ ...prev, isSubmitted: false }))}
            >
              Submit Another Project
            </Button>
          </div>
        ) : (
          <form className="submission-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="projectTitle">Project Title *</label>
                <Input
                  type="text"
                  id="projectTitle"
                  name="projectTitle"
                  value={formData.projectTitle}
                  onChange={handleChange}
                  required
                  placeholder="Enter a title for your project"
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="projectDescription">Project Description *</label>
                <textarea
                  id="projectDescription"
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Describe your project in detail including objectives and potential returns"
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="budget">Estimated Budget *</label>
                <Input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  placeholder="e.g. $100,000 - $500,000"
                />
              </div>

              <div className="form-group">
                <label htmlFor="timeline">Project Timeline</label>
                <Input
                  type="text"
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="e.g. 6 months, 1 year"
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="documents">Supporting Documents</label>
                <div className="file-upload">
                  <Input
                    type="file"
                    id="documents"
                    name="documents"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.xls,.xlsx"
                  />
                  <p className="file-hint">Upload business plan, financial projections, or other relevant documents (PDF, DOC, XLS)</p>
                </div>
              </div>
            </div>

            {formStatus.error && (
              <div className="error-message">{formStatus.error}</div>
            )}

            <div className="form-actions">
              <Button 
                type="submit" 
                disabled={formStatus.isSubmitting}
              >
                {formStatus.isSubmitting ? 'Submitting...' : 'Submit Project'}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default SubmissionSection;
