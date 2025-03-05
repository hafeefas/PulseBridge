import '../App.css';

function PaymentsSection() {
  return (
    <section className="payments-section">
      <div className="payments-container" >
        <header className="payments-header" >
          <div >
            <h1> <strong>Payments</strong></h1>
            <p>Manage your transactions</p>
          </div>
        </header>

        <div className="finance-stats-container">
          <div className="finance-stats">
            <div className="stat-card">
              <h3>15.5M</h3>
              <p>TOTAL GNF</p>
            </div>
            <div className="stat-card">
              <h3>156</h3>
              <p>TRANSACTIONS</p>
            </div>
            <div className="stat-card">
              <h3>99%</h3>
              <p>SUCCESS RATE</p>
            </div>
          </div>
        </div>

        <section className="payment-methods">
          <h2>Payment Methods</h2>
          <div className="payment-methods-list">
            <article className="payment-method-card">
              <div className="payment-method-icon orange">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div className="payment-method-info">
                <div>
                  <h3>Orange Money</h3>
                  <p>Instant mobile payment</p>
                </div>
                <div className="payment-method-fee">
                  <span>Fee</span>
                  <strong>1.5%</strong>
                </div>
              </div>
            </article>

            <article className="payment-method-card">
              <div className="payment-method-icon blue">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M7 15h0M2 9h20" />
                </svg>
              </div>
              <div className="payment-method-info">
                <div>
                  <h3>YMO</h3>
                  <p>Yéli Money</p>
                </div>
                <div className="payment-method-fee">
                  <span>Fee</span>
                  <strong>1%</strong>
                </div>
              </div>
            </article>

            <article className="payment-method-card">
              <div className="payment-method-icon green">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
              </div>
              <div className="payment-method-info">
                <div>
                  <h3>RIA</h3>
                  <p>International transfer</p>
                </div>
                <div className="payment-method-fee">
                  <span>Fee</span>
                  <strong>2%</strong>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="recent-transactions">
          <header className="section-header">
            <h2>Recent Transactions</h2>
            <button className="text-button">View all</button>
          </header>

          <div className="transactions-list">
            <article className="transaction-card">
              <div className="transaction-icon orange">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div className="transaction-info">
                <div className="transaction-details">
                  <h3>Orange Money</h3>
                  <p className="transaction-id">#OM15489</p>
                  <time>Today, 10:30</time>
                </div>
                <div className="transaction-amount">
                  <p className="amount">350,000 GNF</p>
                  <span className="status success">Confirmed</span>
                </div>
              </div>
            </article>

            <article className="transaction-card">
              <div className="transaction-icon blue">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M7 15h0M2 9h20" />
                </svg>
              </div>
              <div className="transaction-info">
                <div className="transaction-details">
                  <h3>YMO</h3>
                  <p className="transaction-id">#YM78952</p>
                  <time>Yesterday, 15:45</time>
                </div>
                <div className="transaction-amount">
                  <p className="amount">500,000 GNF</p>
                  <span className="status success">Confirmed</span>
                </div>
              </div>
            </article>

            <article className="transaction-card">
              <div className="transaction-icon green">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
              </div>
              <div className="transaction-info">
                <div className="transaction-details">
                  <h3>RIA</h3>
                  <p className="transaction-id">#RIA4521</p>
                  <time>March 02</time>
                </div>
                <div className="transaction-amount">
                  <p className="amount">1,200,000 GNF</p>
                  <span className="status pending">Pending</span>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}

function Finance() {
  return (
    <div className="page-container">
      <main className="main-content">
        <PaymentsSection />
      </main>
    </div>
  );
}

export default Finance; 