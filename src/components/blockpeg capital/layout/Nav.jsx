import React from "react";
import { menuItems } from "./MenuItems";
import MenuItems from "./MenuuItems";

const Nav = () => {
  return (  
    <nav>
      <ul className='text-[#FFFFFF] flex laptop:gap-20 gap:4 inter text-lg font-normal items-center cursor-pointer'>
        {menuItems.map((menu, index) => (
          <MenuItems items={menu} key={index} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
