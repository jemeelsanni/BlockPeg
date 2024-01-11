import React, { useState } from "react";
import Dropdown from "./Dropdown";

const MenuItems = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <div className="menu-item">
      {items.submenu ? (
        <>
          <a href={items.url} className={`${items.className}`} >{items.title} {items.logo}</a>
          <Dropdown submenus={items.submenu} isOpen={isOpen} />
        </>
      ) : (
        <a href={items.url}  className={`${items.className}`}>{items.title} {items.logo}</a>
      ) }
    </div>
  );
};

export default MenuItems;
