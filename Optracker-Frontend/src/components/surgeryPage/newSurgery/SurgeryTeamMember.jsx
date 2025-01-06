import React from 'react';

export function TeamMember({ image, name, role }) {
  return (
    <div className="team-member">
      <div className="member-avatar">
        <img src={image} alt={`${name}'s avatar`} width="48" height="48" />
      </div>
      <div className="member-info">
        <div className="member-name">{name}</div>
        <div className="member-role">{role}</div>
      </div>
      <style jsx>{`
        .team-member {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px;
          background: white;
          border-radius: 8px;
          margin-bottom: 8px;
          border: 1px solid #f0f2f5;
        }
        .member-avatar {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          background: #f0f2f5;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .member-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .member-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .member-name {
          font-weight: 500;
          color: #121417;
          font-size: 16px;
        }
        .member-role {
          color: #61788a;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
}