
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

      <div className="org-container">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgChart; 