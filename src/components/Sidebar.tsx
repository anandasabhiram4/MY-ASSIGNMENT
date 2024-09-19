import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-1/4 bg-gray-100 p-4">
      <h3 className="font-bold text-xl">Course Content</h3>
      <ul>
        <li className="mt-2">
          <button 
            className="font-medium text-left w-full flex justify-between items-center" 
            onClick={toggleDropdown}
          >
            Introduction
            <span>{isOpen ? '−' : '+'}</span>
          </button>
          {isOpen && (
            <ul className="ml-4 mt-2 text-gray-600">
              <li className="mt-1">Basic Of Blender 3D</li>
              <li className="mt-1">Mesh Modelling</li>
              <li className="mt-1">Most Common Modifications</li>
              <li className="mt-1">Orthographic References</li>
              <li className="mt-1">Sculpting</li>
            </ul>
          )}
        </li>
        <li className="mt-2">
          <span className="font-medium">Downloading Blender 3D</span>
        </li>
        <li className="mt-2">
          <span className="font-medium">Settings & Preferences</span>
        </li>
        <li className="mt-2">
          <span className="font-medium">Blender Interface</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

