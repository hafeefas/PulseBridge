function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Welcome to PulseBridge</h1>
        <p>Your all-in-one community management platform</p>
        <button className="start-free-btn">Start Free Trial</button>
      </section>

      <section className="stats-section">
        <div className="stat-container">
          <div className="stat-box">
            <h2>150+</h2>
            <p>Members</p>
          </div>
          <div className="stat-box">
            <h2>5000+</h2>
            <p>Events</p>
          </div>
          <div className="stat-box">
            <h2>200M+</h2>
            <p>XAF</p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Features</h2>
        <p>Everything you need to manage your community effectively</p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Communication</h3>
            <p>Stay connected with your community members</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Reports</h3>
            <p>Generate detailed insights and analytics</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Statistics</h3>
            <p>Track your community's growth and engagement</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Members</h3>
            <p>Manage your community members efficiently</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>Payments</h3>
            <p>Handle transactions and contributions</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3>Global</h3>
            <p>Connect with communities worldwide</p>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <h2>Our Plans</h2>
        <p>Choose the perfect plan for your community</p>
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Free</h3>
            <div className="price">0<span>GNF</span></div>
            <p>For small groups</p>
            <ul>
              <li>✓ Basic community features</li>
              <li>✓ Up to 50 members</li>
              <li>✓ Basic analytics</li>
            </ul>
            <button className="pricing-btn">Get Started</button>
          </div>
          <div className="pricing-card featured">
            <h3>Basic</h3>
            <div className="price">50,000<span>GNF</span></div>
            <p>Core standards</p>
            <ul>
              <li>✓ All Free features</li>
              <li>✓ Up to 200 members</li>
              <li>✓ Advanced analytics</li>
              <li>✓ Priority support</li>
            </ul>
            <button className="pricing-btn">Upgrade Now</button>
          </div>
          <div className="pricing-card">
            <h3>Premium</h3>
            <div className="price">85,000<span>GNF</span></div>
            <p>Advanced features</p>
            <ul>
              <li>✓ All Basic features</li>
              <li>✓ Unlimited members</li>
              <li>✓ Custom analytics</li>
              <li>✓ 24/7 Priority support</li>
              <li>✓ Custom integrations</li>
            </ul>
            <button className="pricing-btn">Contact Sales</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 