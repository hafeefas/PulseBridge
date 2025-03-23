import React from 'react';
import './Benefits.css';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Increases access to funding for nonprofits',
      description: 'Streamline your access to funding opportunities and financial resources.',
      icon: '💰'
    },
    {
      title: 'Makes it easier for companies and public offices to meet their legal obligations',
      description: 'Simplify compliance and regulatory requirements with our comprehensive tools.',
      icon: '📋'
    },
    {
      title: 'Enhances the efficiency and impact of social initiatives in Guinea',
      description: 'Maximize the effectiveness of your social programs and community impact.',
      icon: '🌍'
    },
    {
      title: 'Builds trust and confidence in financial management',
      description: 'Establish credibility with transparent and reliable financial practices.',
      icon: '🤝'
    },
    {
      title: 'Simplifies fundraising and donor relations',
      description: 'Strengthen donor relationships and streamline fundraising processes.',
      icon: '🎯'
    },
    {
      title: 'Helps associations plan and sustain long-term initiatives',
      description: 'Develop and maintain sustainable programs for lasting impact.',
      icon: '📈'
    }
  ];

  const additionalBenefits = [
    {
      title: 'Leadership Development',
      description: 'Enhance your leadership skills through specialized training and mentorship programs.',
      icon: '👥'
    },
    {
      title: 'Exclusive Events',
      description: 'Access to member-only events, workshops, and networking opportunities.',
      icon: '🎉'
    },
    {
      title: 'Skill-Building',
      description: 'Continuous learning opportunities to develop professional and personal skills.',
      icon: '🎯'
    }
  ];

  return (
    <div className="benefits-container">
      <div className="benefits-header">
        <h1>Benefits of PulseBridge</h1>
        <p className="subtitle">Empowering organizations to create lasting social impact</p>
      </div>

      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="benefit-icon">{benefit.icon}</div>
            <div className="benefit-content">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="additional-benefits-section">
        <h2>Additional Member Benefits</h2>
        <div className="additional-benefits">
          {additionalBenefits.map((benefit, index) => (
            <div key={index} className="additional-benefit-item">
              <div className="additional-benefit-icon">{benefit.icon}</div>
              <div className="additional-benefit-content">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="cta-section">
        <h2>Ready to Start Your Journey?</h2>
        <p>Use PulseBridge today for better community management</p>
        <div className="cta-buttons">
          <Link to="/login" className="cta-button primary">Get Started</Link>
          <Link to="/community" className="cta-button secondary">Learn More</Link>
        </div>
      </div> */}
    </div>
  );
};

export default Benefits;
