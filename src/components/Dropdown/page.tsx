"use client";
import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <span onClick={toggleDropdown}>Services</span>
      <div className={`absolute ${isOpen ? '' : 'hidden'} text-sm`}>
        <p>Services1</p>
        <p>Services2</p>
        <p>Services3</p>
        <p>Services4</p>
      </div>
    </div>
  );
};

export default Dropdown;
