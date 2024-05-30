import React, { useEffect, useState } from 'react';
import { auth } from "../../firebass";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = () => {
      if (auth.currentUser) {
        setUser({
          displayName: auth.currentUser.displayName,
          email: auth.currentUser.email,
          photoURL: auth.currentUser.photoURL
        });
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const logout = () => {
    auth.signOut();
    localStorage.clear();
    window.location.href = '/';
  };

  if (loading) {
    return <p>Loading...</p>; // Display a loading message or spinner
  }

  if (!user) {
    return null;
  }

  return (
    
    <div className="profile-container">
      <div className="profile-info">
        <div className="profile-image-container">
          <img className="profile-image" src={user.photoURL} alt="User" />
        </div>
        <p style={{ color: "white" }}>Name: {user.displayName}</p>
        <p style={{ color: "white" }}>Email: {user.email}</p>
      <button className="logout-button" onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Profile;
