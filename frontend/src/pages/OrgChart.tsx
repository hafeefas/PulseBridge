const OrgChart = () => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  const renderPersonCard = (
    name: string,
    role: string,
    division?: string
  ) => {
    const initials = getInitials(name);
    return (
      <div className="org-card">
        <div className="org-avatar">
          {initials}
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

      <div className="org-container">
        <div className="org-tree">
          {/* President Level */}
          <div className="org-level president-level">
            {renderPersonCard("Mamadou Diallo", "President", "Executive Office")}
          </div>

          {/* Direct Reports Level 1 */}
          <div className="org-level executives-level">
            <div className="org-branch">
              {renderPersonCard("Fatoumata Camara", "Vice President", "Operations")}
            </div>
            <div className="org-branch">
              {renderPersonCard("Ibrahima Touré", "Secretary", "Administration")}
            </div>
            <div className="org-branch">
              {renderPersonCard("Aissatou Baldé", "Treasurer", "Finance")}
            </div>
          </div>

          {/* Direct Reports Level 2 */}
          <div className="org-level directors-level">
            <div className="org-branch">
              {renderPersonCard("Lamine Condé", "Events Director")}
            </div>
            <div className="org-branch">
              {renderPersonCard("Mariam Sylla", "Finance Committee Head")}
            </div>
            <div className="org-branch">
              {renderPersonCard("Ousmane Barry", "Membership Director")}
            </div>
            <div className="org-branch">
              {renderPersonCard("Kadiatou Cissé", "Communications Director")}
            </div>
          </div>

          {/* Direct Reports Level 3 */}
          <div className="org-level managers-level">
            <div className="org-branch">
              {renderPersonCard("Sékou Kouyaté", "Community Coordinator")}
            </div>
            <div className="org-branch">
              {renderPersonCard("Djenebou Diarra", "Member Services Manager")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgChart; 