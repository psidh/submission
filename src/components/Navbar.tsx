'use client';
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="flex items-center justify-between bg-white p-4">
      <div></div>
      <div className="flex justify-between">
        <div>
          <p>
            <span className="text-lg font-semibold">Free Trial | </span> 2 days
            left
          </p>
          <p className="text-orange-400">Extend free trial</p>
        </div>
        <img src="/pfp.svg" alt="Profile picture" className="w-12 h-12 mx-5" />
        <div className="relative  cursor-pointer">
          <div onClick={toggleDropdown}>▼</div>
          {isDropdownOpen && (
            <div className="absolute top-full right-0 bg-white border border-gray-200 p-2 rounded shadow">
              <a href={'/profile'}>View Profile</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
