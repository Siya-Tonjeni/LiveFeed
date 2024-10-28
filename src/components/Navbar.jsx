import React, { useState, useEffect } from 'react';
import { CiCalendar } from 'react-icons/ci';

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl">LiveFeed</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 rounded bg-gray-700 text-white mr-4"
          />
          <div className="p-2">
            <CiCalendar/>
          </div>
          
          <div className="text-right">
            <div>{formatDate(currentTime)}</div>
            {/* <div>{formatTime(currentTime)}</div> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
