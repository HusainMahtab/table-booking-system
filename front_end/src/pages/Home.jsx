import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">Welcome to Our Restaurant</h1>
      <Link to="/booking-form">
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mt-4 rounded">
          Book a Table
        </button>
      </Link>
    </div>
  );
};

export default Home;
