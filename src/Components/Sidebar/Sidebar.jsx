import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as faIcons from 'react-icons/fa'; 
import * as bsIcons from 'react-icons/bs';
import * as riIcons from 'react-icons/ri';
import * as aiIcons from 'react-icons/ai';
import { 
  Sidebar, 
  Menu, 
  MenuItem, 
} from 'react-pro-sidebar';

import './Sidebar.css';

const LeftSidebar = () => {
  const [ collapsed, setCollapsed ] = useState(false); 
  const [ toggled, setToggled ] = useState(false);
  const [ menuActive, setMenuActive ] = useState('Dashboard')

  const handleCollapsed = () => { 
    setCollapsed(!collapsed);
  }

  const handleToggled = () => { 
    setToggled(!toggled);
  }

  return (
    <Sidebar 
      className='sidebar'
      collapsed={collapsed}
      toggled={toggled}
      onToggle={handleToggled}
      onChange={handleCollapsed}
      breakPoint="md" 
      backgroundColor='#2B3035'
      >    
      <Menu
        className='sidebar-menu'>
        {/* ProSidebar Header */}
        <div 
          className='sidebar-header'
          >{menuActive}
        </div>
        <MenuItem className='sidebar-menuitem'
          icon={<aiIcons.AiFillDashboard size={"20px"}/>}
          component={<Link to="/"  />}
          onClick={() => setMenuActive('Home')}
          >Home</MenuItem>
        <MenuItem className='sidebar-menuitem'
          icon={<bsIcons.BsBuildingFill size={"20px"}/>}
          component={<Link to="itemDetails"  />}
          onClick={() => setMenuActive('ItemDetail')}
          >Inventory</MenuItem>
        <MenuItem className='sidebar-menuitem'
          icon={<faIcons.FaRegIdBadge size={"20px"}/>}
          component={<Link to="support" />} 
          >Support</MenuItem>
      </Menu>
    </Sidebar>
  )
}

export default LeftSidebar;
