export default function TeamMember({ avatar, role, name }) {
  return (
    <div className="team-member">
      <div className="member-avatar-container">
        <img src={avatar} alt={name} className="member-avatar" />
      </div>
      <div className="member-info">
        <div className="member-role">{role}</div>
        <div className="member-name">{name}</div>
      </div>
      <style>{`
        .team-member {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: #FFFFFF;
          width: 354px;
          margin-bottom: 16px;
        }
        .member-avatar-container {
          width: 56px;
          height: 56px;
          flex-shrink: 0;
        }
        .member-avatar {
          width: 100%;
          height: 100%;
          border-radius: 28px;
          object-fit: cover;
        }
        .member-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .member-role {
          color: #121417;
          font: 500 16px "Public Sans", sans-serif;
        }
        .member-name {
          color: #61788A;
          font: 400 14px "Public Sans", sans-serif;
        }
      `}</style>
    </div>
  );
}
