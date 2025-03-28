const OrgChart = () => {
  const getAvatarUrl = (id: number) => {
    // Using DiceBear API with personas style for professional-looking avatars
    return `https://api.dicebear.com/7.x/personas/svg?seed=${id}&backgroundColor=b6e3f4,c0aede,d1d4f9&backgroundType=gradientLinear&size=96`;
  };

  const renderPersonCard = (
    name: string,
    role: string,
    id: number,
    division?: string
  ) => {
    return (
      <div className="org-card">
        <div className="org-avatar">
          <img src={getAvatarUrl(id)} alt={name} />
        </div>
        <div className="org-info">
          <h3>{name}</h3>
          <p>{role}</p>
          {division && <p className="division">{division}</p>}
        </div>
      </div>
    );
  };

  return (
    <div className="org-chart-page">
      <div className="org-header">
        <h1>Org Chart</h1>
        <button className="find-people-btn">
          <span className="search-icon">🔍</span>
          Find People
        </button>
      </div>

      <div className="org-content">
        <div className="org-tree">
          {/* President Level */}
          <div className="org-level president-level">
            {renderPersonCard("Mamadou Diallo", "President", 1, "Executive Office")}
          </div>

          {/* Direct Reports Level 1 */}
          <div className="org-level executives-level">
            <div className="org-branch">
              {renderPersonCard("Fatoumata Camara", "Vice President", 2, "Operations")}
            </div>
            <div className="org-branch">
              {renderPersonCard("Ibrahima Touré", "Secretary", 3, "Administration")}
            </div>
            <div className="org-branch">
              {renderPersonCard("Aissatou Baldé", "Treasurer", 4, "Finance")}
            </div>
          </div>

          {/* Direct Reports Level 2 */}
          <div className="org-level directors-level">
            <div className="org-branch">
              {renderPersonCard("Lamine Condé", "Events Director", 5)}
            </div>
            <div className="org-branch">
              {renderPersonCard("Mariam Sylla", "Finance Committee Head", 6)}
            </div>
            <div className="org-branch">
              {renderPersonCard("Ousmane Barry", "Membership Director", 7)}
            </div>
            <div className="org-branch">
              {renderPersonCard("Kadiatou Cissé", "Communications Director", 8)}
            </div>
          </div>

          {/* Direct Reports Level 3 */}
          <div className="org-level managers-level">
            <div className="org-branch">
              {renderPersonCard("Sékou Kouyaté", "Community Coordinator", 9)}
            </div>
            <div className="org-branch">
              {renderPersonCard("Djenebou Diarra", "Member Services Manager", 10)}
            </div>
            <div className="org-branch">
              {renderPersonCard("Aminata Bah", "Events Coordinator", 11)}
            </div>
            <div className="org-branch">
              {renderPersonCard("Moussa Camara", "Community Liaison", 12)}
            </div>
          </div>
        </div>

        {/* General Members Section */}
        <div className="general-members-section">
          <h2>General Members</h2>
          <div className="members-grid">
            <div className="member-card">
              {renderPersonCard("Mariama Sow", "Member", 13)}
            </div>
            <div className="member-card">
              {renderPersonCard("Alpha Barry", "Member", 14)}
            </div>
            <div className="member-card">
              {renderPersonCard("Hawa Diallo", "Member", 15)}
            </div>
            <div className="member-card">
              {renderPersonCard("Boubacar Sylla", "Member", 16)}
            </div>
            <div className="member-card">
              {renderPersonCard("Fatoumata Bah", "Member", 17)}
            </div>
            <div className="member-card">
              {renderPersonCard("Mamadou Sow", "Member", 18)}
            </div>
            <div className="member-card">
              {renderPersonCard("Aissatou Diallo", "Member", 19)}
            </div>
            <div className="member-card">
              {renderPersonCard("Ibrahim Bah", "Member", 20)}
            </div>
            <div className="member-card">
              {renderPersonCard("Aminata Keita", "Member", 21)}
            </div>
            <div className="member-card">
              {renderPersonCard("Ousmane Diallo", "Member", 22)}
            </div>
            <div className="member-card">
              {renderPersonCard("Kadiatou Barry", "Member", 23)}
            </div>
            <div className="member-card">
              {renderPersonCard("Souleymane Camara", "Member", 24)}
            </div>
            <div className="member-card">
              {renderPersonCard("Fanta Touré", "Member", 25)}
            </div>
            <div className="member-card">
              {renderPersonCard("Moussa Baldé", "Member", 26)}
            </div>
            <div className="member-card">
              {renderPersonCard("Mariam Diallo", "Member", 27)}
            </div>
            <div className="member-card">
              {renderPersonCard("Ibrahima Sow", "Member", 28)}
            </div>
            <div className="member-card">
              {renderPersonCard("Aissata Bah", "Member", 29)}
            </div>
            <div className="member-card">
              {renderPersonCard("Thierno Barry", "Member", 30)}
            </div>
            <div className="member-card">
              {renderPersonCard("Fatou Sylla", "Member", 31)}
            </div>
            <div className="member-card">
              {renderPersonCard("Mamadou Baldé", "Member", 32)}
            </div>
            <div className="more-members">
              <p>and <strong>hundreds</strong> more!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgChart; 