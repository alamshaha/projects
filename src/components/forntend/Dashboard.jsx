import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage when the component mounts
    const savedUser = localStorage.getItem("userInfo");
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser); // Parse and set the user data
      } catch (error) {
        console.error("Error parsing user data from localStorage", error);
      }
    } else {
      // Redirect if no user is found in localStorage
      navigate('/');
    }
  }, [navigate]);

  // If user is loaded, and user.id is not present, redirect
  useEffect(() => {
    if (user && !user.id) {
      navigate('/');
    }
  }, [user, navigate]);

  
  
    const handleLogout = () => {
      // Remove user data from localStorage
      localStorage.removeItem("userInfo");
      
      // Optionally, clear any other related data or session state here
      
      // Redirect to the login or home page
      navigate('/login'); // You can change this to any route you want (e.g., '/')
    };
  

  return (
    <div>
      {user ? (
        <div>
          <h1>User Profile</h1>
          <p>ID: {user.id || "Name not available"}</p>
          <p>Name: {user.name || "Name not available"}</p>
          <p>Token: {user.token || "Token not available"}</p>
          <button onClick={handleLogout}>Logout</button>
          {/* Add other user information here */}
        </div>
      ) : (
        <p>No user data found</p>
      )}
    </div>
  );
};

export default Dashboard;
