import React from 'react';

const Dropdown = ({ submenus, isOpen }) => {
  return (
    <ul className={`dropdown ${isOpen ? 'visible' : 'hidden'}`}>
      {submenus.map((submenu, index) => (
        <li key={index} className="menu-item">
          <a href={submenu.url}>{submenu.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
