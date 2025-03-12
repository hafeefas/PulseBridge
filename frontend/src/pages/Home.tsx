function Home() {
  return (
    <>
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to PulseBridge</h1>
          <p className="hero-subtitle">Your all-in-one community management platform</p>
          <div className="stats">
            <div className="stat-item">
              <h2>150+</h2>
              <p>Members</p>
            </div>
            <div className="stat-item">
              <h2>5000+</h2>
              <p>Events</p>
            </div>
            <div className="stat-item">
              <h2>200M+</h2>
              <p>XAF</p>
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="features-section">
          <div className="section-container">
            <div className="section-header">
              <h2>Features</h2>
              <p>Everything you need to manage your community effectively</p>
            </div>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon blue">💬</div>
                <h3>Communication</h3>
                <p>Stay connected with your community members</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon purple">📝</div>
                <h3>Reports</h3>
                <p>Generate detailed insights and analytics</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon orange">📊</div>
                <h3>Statistics</h3>
                <p>Track your community's growth and engagement</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon green">👥</div>
                <h3>Members</h3>
                <p>Manage your community members efficiently</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon yellow">💰</div>
                <h3>Payments</h3>
                <p>Handle transactions and contributions</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon teal">🌐</div>
                <h3>Global</h3>
                <p>Connect with communities worldwide</p>
              </div>
            </div>
          </div>
        </section>

        <section className="plans-section">
          <div className="section-container">
            <div className="section-header">
              <h2>Our Plans</h2>
              <p>Choose the perfect plan for your community</p>
            </div>
            <div className="plans-grid">
              <div className="plan-card">
                <div className="plan-header">
                  <h3>Free</h3>
                  <div className="plan-price">0 GNF</div>
                  <p>For small groups</p>
                </div>
                <div className="plan-features">
                  <ul>
                    <li>Basic community features</li>
                    <li>Up to 50 members</li>
                    <li>Basic analytics</li>
                  </ul>
                </div>
                <button className="plan-button">Get Started</button>
              </div>
              
              <div className="plan-card featured">
                <div className="plan-header">
                  <h3>Basic</h3>
                  <div className="plan-price">50,000 GNF</div>
                  <p>Core standards</p>
                </div>
                <div className="plan-features">
                  <ul>
                    <li>All Free features</li>
                    <li>Up to 200 members</li>
                    <li>Advanced analytics</li>
                    <li>Priority support</li>
                  </ul>
                </div>
                <button className="plan-button">Upgrade Now</button>
              </div>
              
              <div className="plan-card">
                <div className="plan-header">
                  <h3>Premium</h3>
                  <div className="plan-price">85,000 GNF</div>
                  <p>Advanced features</p>
                </div>
                <div className="plan-features">
                  <ul>
                    <li>All Basic features</li>
                    <li>Unlimited members</li>
                    <li>Custom analytics</li>
                    <li>24/7 Priority support</li>
                    <li>Custom integrations</li>
                  </ul>
                </div>
                <button className="plan-button">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home; 