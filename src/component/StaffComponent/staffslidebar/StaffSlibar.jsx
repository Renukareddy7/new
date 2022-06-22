

import React, { useState } from "react";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";


import { FaList } from "react-icons/fa";
import {  FiLogOut } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiMenu } from "react-icons/bi";
import {FcMenu,FcSalesPerformance
} from "react-icons/fc"
import {AiOutlineStock} from "react-icons/ai"



import "react-pro-sidebar/dist/css/styles.css";
import "./staffslibar.css";


const StaffSlibar = () => {
  
    
    const [menuCollapse, setMenuCollapse] = useState(false)

   
  const menuIconClick = () => {
 
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          
            <div className="closemenu" onClick={menuIconClick}>
              
              {menuCollapse ? (
                <BiMenu/>
              ) : (
                <FcMenu/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<FaList />}>
                Order
              </MenuItem>
              <MenuItem icon={<FcSalesPerformance />}>Sales</MenuItem>
              <MenuItem icon={<AiOutlineStock />}>Stocks</MenuItem>
              <MenuItem icon={<RiPencilLine />}>Supplier</MenuItem>
              
            </Menu>
          </SidebarContent>
          <SidebarFooter className="footer">
            <Menu iconShape="square" >
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default StaffSlibar;