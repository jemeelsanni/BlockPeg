import MenuIcon from "@mui/icons-material/Menu";
import React from "react";


export const menuItems = [
  {
    title: 'Products',
    url: '/',
    className:'hide-on-mobile',
    submenu: [
      {
        title: 'Virtual Equity',
        url: '',
      },
      {
        title: 'Early-Stage Token',
        url: '',
      },
      {
        title: 'Liquid Token',
        url: '',
      },
    ],
  },
  {
    title: 'Insights',
    url: '/',
    className:'hide-on-mobile',
    submenu: [
      {
        title: 'Strategic Insights',
        url: '/strategicinsight',
      },
      {
        title: 'Building Blocks',
        url: '/buildingblocks',
      },
      {
        title: 'Financial Adviser',
        url: '/financialadviser',
      },
    ],
  },
  {
    title: 'About Us',
    url: '/about',
    className:'hide-on-mobile',
  },
  {
    title: '',
    
    logo: <MenuIcon />,
    className:'hide-on-laptop',
    submenu: [
      {
        title: 'Home',
        url: '/home',
      },
      {
        title: 'Products',
        submenu: [
          {
            title: 'Virtual Equity',
            url: '',
          },
          {
            title: 'Early-Stage Token',
            url: '',
          },
          {
            title: 'Liquid Token',
            url: '',
          },
        ],
      },
      {
        title: 'Insights',
        submenu: [
          {
            title: 'Strategic Insights',
            url: '/strategicinsight',
          },
          {
            title: 'Building Blocks',
            url: '/buildingblocks',
          },
          {
            title: 'Financial Adviser',
            url: '/financialadviser',
          },
        ],
      },
      {
        title: 'About Us',
        url: '/about',
      },
    ]
    
  },
];