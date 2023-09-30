import classNames from "classnames";
import { MainLogoWithText } from "./svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      className={classNames({
        "fixed top-0 md:hidden bg-background text-zinc-500": true, // colors
        "flex items-center justify-between": true, // layout
        "w-screen sm:flex md:w-full z-10 px-4 shadow-sm h-[73px] top-0 ": true, //
        // "lg:hidden": true,
      })}
    >
      <div
        className={classNames({
          "flex items-center transition-none": true,
          "p-4 justify-between": true,
        })}
      >
        <div className="h-auto group w-28 md:w-36 hover:text-primary">
          <MainLogoWithText />
        </div>
      </div>
      <div className="flex items-center gap-x-sm">
        <a
          className="bg-super dark:bg-superDark dark:text-backgroundDark text-white hover:opacity-80 focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8 -webkit-tap-highlight-color:transparent"
          href="/download-mobile"
        >
          <div className="flex items-center leading-none justify-center gap-xs">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="android"
              className="svg-inline--fa fa-android fa-fw fa-1x "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M420.55,301.93a24,24,0,1,1,24-24,24,24,0,0,1-24,24m-265.1,0a24,24,0,1,1,24-24,24,24,0,0,1-24,24m273.7-144.48,47.94-83a10,10,0,1,0-17.27-10h0l-48.54,84.07a301.25,301.25,0,0,0-246.56,0L116.18,64.45a10,10,0,1,0-17.27,10h0l47.94,83C64.53,202.22,8.24,285.55,0,384H576c-8.24-98.45-64.54-181.78-146.85-226.55"
              />
            </svg>
            <div className="text-align-center relative">Get App</div>
          </div>
        </a>
        <Link to="/settings">
          <a>
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden flex items-center justify-center  w-8 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offsetPlus dark:bg-offsetPlusDark">
                <img
                  alt="User avatar"
                  className="w-full h-auto"
                  src="https://imagedelivery.net/MPdwyYSWT8IY7lxgN3x3Uw/7697bfb5-9e7f-430e-0ebc-8a504a9d7a00/thumbnail"
                />
              </div>
            </div>
          </a>
        </Link>
      </div>
      {/* <button className="md:hidden" onClick={props.onMenuButtonClick}>
        <Bars3Icon className="h-6 w-6" />
      </button> */}
    </nav>
  );
};

export default Navbar;
