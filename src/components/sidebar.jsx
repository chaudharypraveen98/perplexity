import { useEffect, useState } from "react";
import classNames from "classnames";

import {
  ArrowTopRightOnSquareIcon,
  ArrowUpRightIcon,
  DevicePhoneMobileIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { defaultNavItems } from "./sideItems";
import { ArrowLeftLine, Discord, MainLogoWithText, Twitter } from "./svg";
import { useUser } from "../context/UserContext";
import { LoginPop } from "./pop";
import { Link } from "react-router-dom";

const Sidebar = ({
  collapsed,
  navItems = defaultNavItems,
  shown,
  setCollapsed,
  activeMenu,
  setActiveMenu,
  showSearchPopOverlay,
}) => {
  const { user } = useUser();
  const [showLoginPop, setShowLoginPop] = useState(false);

  return (
    <>
      {showLoginPop && <LoginPop closePop={() => setShowLoginPop(false)} />}
      <div
        className={classNames({
          "bg-offset text-zinc-50 fixed md:static md:translate-x-0 z-20": true,
          "transition-all duration-300 ease-in-out hidden md:flex": true,
          "w-[220px]": !collapsed,
          "w-16": collapsed,
          "-translate-x-full": !shown,
        })}
      >
        <div
          className={classNames({
            "flex flex-col justify-between h-screen sticky inset-0 w-full": true,
          })}
        >
          {/* logo and collapse button */}
          <div
            className={classNames({
              "pt-4 pl-4 pr-2 flex items-center transition-none": true,
              "justify-between": !collapsed,
              "justify-center": collapsed,
            })}
          >
            {!collapsed && (
              <div className="h-auto group w-28 md:w-36 hover:text-primary">
                <MainLogoWithText />
              </div>
            )}

            <button
              className={`grid place-content-center hover:bg-offsetPlus w-8 h-8 rounded-full opacity-100 hover:fill-textMain text-extradark-gray ${
                !user && "hidden"
              }`}
              onClick={() => setCollapsed(!collapsed)}
            >
              <ArrowLeftLine />
            </button>
          </div>
          <div className="my-md pt-two">
            <div>
              <div className="mx-md">
                <div
                  className="bg-background rounded-full pl-4 pr-2 py-2 flex flex-none justify-between items-center cursor-pointer hover:border-primary border-2 hover:!ring-super transition duration-300 select-none border-offsetPlus"
                  onClick={() => showSearchPopOverlay()}
                >
                  <div className="text-clip overflow-hidden line-clamp-1 font-sans text-sm font-medium text-extradark-gray">
                    New Thread
                  </div>
                  <div className="flex items-center text-extradark-gray">
                    <div className="font-sans text-bold rounded min-w-5 h-5 px-1 flex items-center px-xs justify-center border border-offsetPlus ring-borderMain bg-transparent">
                      Ctrl
                    </div>
                    <div className="font-sans text-xs rounded w-5 h-5 flex ml-0.5 items-center justify-center border border-offsetPlus ring-borderMain bg-transparent">
                      I
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="flex-grow">
            <ul
              className={classNames({
                "my-2 flex flex-col gap-2 items-stretch": true,
              })}
            >
              {navItems?.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={classNames({
                      "hover:bg-offsetPlus flex font-medium justify-between": true, //colors
                      "transition-colors duration-300": true, //animation
                      "rounded-md p-2 mx-3 gap-4 ": !collapsed,
                      "rounded-full p-2 mx-3 w-10 h-10": collapsed,
                      "text-textMain": item.label === activeMenu,
                      "text-extradark-gray": item.label !== activeMenu,
                    })}
                    onClick={() => {
                      if (item.label === "Login") {
                        setShowLoginPop(true);
                      } else {
                        setActiveMenu(item.label);
                      }
                    }}
                  >
                    <Link to={item.href}>
                      <a className="flex gap-2">
                        {item.icon} <span>{!collapsed && item.label}</span>
                      </a>
                    </Link>
                    {item?.active && !collapsed && (
                      <div className="pointer-events-none relative z-10 h-4 rounded px-1 pb-1 bg-red text-white text-[11px] font-medium tracking-wide uppercase">
                        New
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            {!user && (
              <div className="mx-3 mt-4 hidden md:block">
                <button
                  type="button"
                  className="bg-primary text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out  select-none  relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-1 font-medium h-10"
                  onClick={() => setShowLoginPop(true)}
                >
                  <div className="flex items-center leading-none justify-center gap-xs">
                    <div className="text-align-center relative">Sign Up</div>
                  </div>
                </button>
              </div>
            )}
          </nav>

          <div
            className={classNames({
              "grid place-content-stretch p-4 ": true,
            })}
          >
            <div className="block left ">
              <div className="text-textMain">Try Pro</div>
              <p className="text-extradark-gray text-sm">
                Upgrade to Claude-2 or GPT-4, boost your Copilot uses, and
                upload more files.
              </p>
              <button
                type="button"
                className="mt-1 mb-2 bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMain  md:hover:text-textOff md:dark:hover:text-textMain font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out select-none items-center relative group  justify-center text-center  rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8"
              >
                <div className="flex items-center leading-none justify-center gap-xs">
                  <ArrowUpRightIcon className="w-4 h-4" />
                  <div className="text-align-center relative">Learn More</div>
                </div>
              </button>
            </div>
            {user && (
              <div className="flex gap-2 items-center h-11  my-2 overflow-hidden">
                <img
                  src={user?.picture}
                  height={36}
                  width={36}
                  alt="profile image"
                  className="rounded-full"
                />
                {!collapsed && (
                  <a href="/" className="text-textMain font-medium text-sm">
                    {user?.username}
                  </a>
                )}
              </div>
            )}
            <div className="flex flex-row items-center border-t-2 border-offsetPlus pt-2 mt-2">
              <div className="flex flex-row items-center text-extradark-gray font-medium text-sm">
                <DevicePhoneMobileIcon className="w-4 h-4 mr-1" />
                Download
              </div>
              <Twitter className="w-4 h-4 mx-3 text-extradark-gray" />
              <Discord className="w-4 h-4 mx-3 text-extradark-gray" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
