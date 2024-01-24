// Dashboard.js
import React from 'react';
import Navbar from '../navbar/Navbar';
import Card from '../card/Card';

import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="card-container">
        <Card title="Card 1" content="Content for Card 1" />
        <Card title="Card 2" content="Content for Card 2" />
        <Card title="Card 3" content="Content for Card 1" />
        <Card title="Card 4" content="Content for Card 2" />
      </div>
    </div>
  );
};

export default Dashboard;

