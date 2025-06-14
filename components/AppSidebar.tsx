"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "./ui/sidebar";
import { FaHouseChimney } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { MdPersonAddAlt1 } from "react-icons/md";
import { FaLaptopMedical } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { ImLab } from "react-icons/im";
import { FaCircleRadiation } from "react-icons/fa6";
import { RiFirstAidKitFill } from "react-icons/ri";
import { FaChartBar } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { NavItem } from "./nav-item";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: FaHouseChimney,
  },
  {
    title: "Patient",
    url: "patient",
    icon: MdPersonAddAlt1,
  },
  {
    title: "Admission",
    url: "admission",
    icon: FaBed,
  },
  {
    title: "Appointments",
    url: "appointments",
    icon: FaLaptopMedical,
  },
  {
    title: "Billing",
    url: "billing",
    icon: FaCreditCard,
  },
  {
    title: "Lab Orders",
    url: "lab-orders",
    icon: ImLab,
  },
  {
    title: "Radiology Orders",
    url: "radiology-orders",
    icon: FaCircleRadiation,
  },
  {
    title: "Pharmacy",
    url: "pharmacy",
    icon: RiFirstAidKitFill,
  },
  {
    title: "Statistics",
    url: "statistics",
    icon: FaChartBar,
  },
  {
    title: "Root",
    url: "root",
    icon: FaBrain,
  },
];

const AppSidebar = () => {
  const { open, isMobile } = useSidebar();
  return (
    <div className="">
      <div className="h-fit w-fit">
        <Sidebar collapsible="icon" variant="floating" className="bg-bg-blue">
          <SidebarHeader>
            <div className="flex items-center gap-2">
              {open && (
                <p className="text-lg ml-3 mt-3 font-semibold text-center">
                  EMC clinic
                </p>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu className={`mt-7 space-y-4 p-0`}>
                  {items.map((item) => (
                    <SidebarMenuItem
                      key={item.title}
                      className={`w-full py-3 rounded-lg hover:bg-white hover:text-primary cursor-pointer`}
                    >
                      <NavItem
                        icon={item.icon}
                        label={item.title}
                        url={item.url}
                      />
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          {isMobile || (
            <SidebarTrigger
              className={`absolute  ${
                open ? "right-4 top-7" : "top-5 right-[33.5%] "
              } z-50 bg-sidebar-accent text-primary border rounded-lg p-2 hover:opacity-90 cursor-pointer`}
            />
          )}
        </Sidebar>
      </div>
      {isMobile && (
        <SidebarTrigger
          className={`absolute top-6.5 left-2 z-50 bg-primary text-sidebar-accent border rounded-lg p-2 hover:opacity-90 cursor-pointer`}
        />
      )}
    </div>
  );
};

export default AppSidebar;
