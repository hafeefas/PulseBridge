import React from 'react';
import '../styles/policy.css';

const Policy: React.FC = () => {
  const formSections = [
    {
      title: 'Membership & Participation Forms',
      items: [
        {
          title: 'Membership Application',
          description: 'Standard form for new member registration and annual renewals',
          icon: '📝'
        },
        {
          title: 'Participation Agreement',
          description: 'Terms and conditions for platform participation',
          icon: '✍️'
        },
        {
          title: 'Code of Conduct',
          description: 'Guidelines for member behavior and responsibilities',
          icon: '📋'
        }
      ]
    },
    {
      title: 'Custom Forms for Associations',
      items: [
        {
          title: 'Financial Reporting Template',
          description: 'Customizable templates for financial documentation',
          icon: '💰'
        },
        {
          title: 'Project Proposal Forms',
          description: 'Structured templates for project submissions',
          icon: '📊'
        },
        {
          title: 'Impact Assessment Forms',
          description: 'Tools for measuring and reporting program outcomes',
          icon: '📈'
        }
      ]
    }
  ];

  return (
    <div className="policy-container">
      <div className="policy-header">
        <h1>Policy & Forms</h1>
        <p className="subtitle">Essential documents and templates for effective organization management</p>
      </div>

      {formSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="form-section">
          <h2>{section.title}</h2>
          <div className="forms-grid">
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="form-card">
                <div className="form-icon">{item.icon}</div>
                <div className="form-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button className="access-button">Access Form</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Policy;
