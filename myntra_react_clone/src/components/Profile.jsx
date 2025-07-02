import React from 'react';
import '../styles/Profile.css';

const Profile = () => {
  const user = {
    name: "Vipin Kumar",
    email: "vipinatraura@gmail.com",
    phone: "+91 8423553599",
    address: "Panchkula Sector 20 Haryana, India",
    avatar: "./images/vipin.jpg"
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={user.avatar} alt="Profile" className="profile-avatar" />
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-email">{user.email}</p>
        <div className="profile-details">
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
