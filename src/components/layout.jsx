import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import BottomTab from "./bottomTab";
import {
  ArrowTopRightOnSquareIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { defaultNavItems } from "./sideItems";
import { useUser } from "../context/UserContext";
import { ThreadPopUP } from "./threadPop";
import { useLocation } from "react-router-dom";

const Layout = (props) => {
  const [collapsed, setSidebarCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [sidebars, setSidebars] = useState(defaultNavItems);
  const [activeMenu, setActiveMenu] = useState("Home");
  const [searchPop, setSearchPop] = useState(false);
  const { user } = useUser();
  useEffect(() => {
    if (user) {
      setSidebars([
        ...defaultNavItems,
        {
          label: "AI Profile",
          href: "/profile",
          icon: <ShareIcon className="w-5 h-5" />,
          active: false,
        },
      ]);
    } else {
      setSidebars([
        ...defaultNavItems,
        {
          label: "Login",
          href: "/login",
          icon: <ArrowTopRightOnSquareIcon className="w-5 h-5" />,
          active: false,
        },
      ]);
    }
  }, [user]);
  const location = useLocation();
  const showNavbar = location?.pathname !== "/library";
  console.log("isLibraryPath", showNavbar);

  return (
    <>
      <div
        className={classNames({
          "grid bg-zinc-100 min-h-screen bg-offset": true,
          "grid-cols-sidebar": !collapsed,
          "grid-cols-sidebar-collapsed": collapsed,
          "transition-[grid-template-columns] duration-300 ease-in-out": true,
        })}
      >
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setSidebarCollapsed}
          shown={showSidebar}
          navItems={sidebars}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          showSearchPopOverlay={() => setSearchPop(true)}
        />
        <div className="lg:mr-sm lg:mb-sm lg:mt-sm bg-background w-screen md:w-full">
          {showNavbar && (
            <Navbar onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />
          )}
          {props.children}
          <BottomTab
            bottomItems={sidebars}
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
        </div>
      </div>
      {searchPop && <ThreadPopUP closePop={() => setSearchPop(false)} />}
    </>
  );
};

export default Layout;
