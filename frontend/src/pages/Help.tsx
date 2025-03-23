import React, { useState } from 'react';
import './Help.css';

const Help: React.FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I create a new organization profile?",
      answer: "To create a new organization profile, log in to your account, navigate to the Dashboard, and click on 'Create Organization'. Follow the step-by-step guide to input your organization's details and complete the setup process."
    },
    {
      question: "What forms do I need to submit for membership?",
      answer: "For membership, you'll need to submit the Membership Application form and the Participation Agreement. These can be found in the Forms & Policies section. Make sure to also review the Code of Conduct before submission."
    },
    {
      question: "How can I track my organization's financial reports?",
      answer: "Financial reports can be tracked through the Finance section of your dashboard. You can access templates, submit reports, and view historical data. Regular reporting helps maintain transparency and compliance."
    },
    {
      question: "What are the membership fees?",
      answer: "Membership fees vary based on your organization's size and type. Basic membership starts at 50,000 GNF per month. Visit our Benefits page for detailed pricing information and included features."
    }
  ];

  const supportChannels = [
    {
      title: "Email Support",
      description: "Send us a detailed message and we'll respond within 24 hours",
      icon: "📧",
      action: "support@pulsebridge.com"
    },
    {
      title: "Phone Support",
      description: "Available Monday to Friday, 9:00 AM - 5:00 PM GMT",
      icon: "📞",
      action: "+224 XX XXX XXX"
    },
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      icon: "💬",
      action: "Start Chat"
    },
    {
      title: "Help Center",
      description: "Browse our comprehensive documentation and guides",
      icon: "📚",
      action: "Browse Guides"
    }
  ];

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="main-content-wrapper">
      <div className="help-container">
        <div className="help-header">
          <h1>Help Center</h1>
          <p className="subtitle">Find answers and support for your PulseBridge experience</p>
        </div>

        <div className="help-section">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-card ${activeQuestion === index ? 'active' : ''}`}
                onClick={() => toggleQuestion(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <span className="faq-toggle">{activeQuestion === index ? '−' : '+'}</span>
                </div>
                <div className={`faq-answer ${activeQuestion === index ? 'show' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="help-section">
          <h2>Contact Support</h2>
          <div className="support-grid">
            {supportChannels.map((channel, index) => (
              <div key={index} className="support-card">
                <div className="support-icon">{channel.icon}</div>
                <div className="support-content">
                  <h3>{channel.title}</h3>
                  <p>{channel.description}</p>
                  <button className="support-button">
                    {channel.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help; 