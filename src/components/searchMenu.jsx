import { createSearchParams, useNavigate } from "react-router-dom";

export const SearchMenu = ({
  searchValue = "",
  fromMenu = false,
  closePop,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="absolute m-[1px] bottom-0 flex justify-between px-[6px] bg-background focus:bg-background dark:bg-offsetDark dark:focus:bg-offsetDark rounded-b-md "
      style={{ width: "calc(100% - 2px)" }}
    >
      <div className="absolute flex items-center bg-background dark:bg-offsetDark rounded-t-lg bottom-0 pb-xs mb-xs left-[6px] left-sm">
        <div className="">
          <div>
            <button
              type="button"
              className="md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8"
            >
              <div
                className="flex items-center leading-none justify-center gap-xs"
                style={{ minWidth: "auto" }}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fasr"
                  data-icon="magnifying-glass"
                  className="svg-inline--fa fa-magnifying-glass fa-fw fa-1x h-[1em]"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1l124 124 17 17L478.1 512l-17-17-124-124z"
                  ></path>
                </svg>
                <div className="text-align-center relative truncate">Focus</div>
              </div>
            </button>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="md:hover:bg-offsetPlus text-textOff dark:text-textOffDark md:hover:text-textMain dark:md:hover:bg-offsetPlusDark  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8"
          >
            <div className="pointer-events-none absolute z-30  opacity-0 shadow-sm transition-all delay-200 duration-200 group-hover:translate-y-0 group-hover:translate-x-0  group-hover:opacity-100 bottom-[120%] translate-y-1">
              <div className="py-xs px-sm rounded flex items-center gap-x-sm border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offsetPlusDark">
                <div className="default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain">
                  <span className="text-textMainDark">
                    Upload a text or PDF file (4 max, 25MB each). 3 uploads
                    remaining today.
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center leading-none justify-center gap-xs">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fasr"
                data-icon="circle-plus"
                className="svg-inline--fa fa-circle-plus fa-fw fa-1x "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 368h48V344 280h64 24V232H344 280V168 144H232v24 64H168 144v48h24 64v64 24z"
                ></path>
              </svg>
              <div className="text-align-center relative">File</div>
            </div>
          </button>
          <input
            type="file"
            accept="text/*,application/pdf,.pdf,.txt,.py,.ipynb,.js,.jsx,.html,.css,.java,.cs,.php,.c,.cpp,.cxx,.h,.hpp,.rs,.R,.Rmd,.swift,.go,.rb,.kt,.kts,.ts,.tsx,.m,.scala,.rs,.dart,.lua,.pl,.pm,.t,.sh,.bash,.zsh,.csv,.log,.ini,.config,.json,.yaml,.yml,.toml,.lua,.sql,.bat,.md,.coffee,.tex,.latex"
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div className="absolute flex items-center gap-sm bg-background dark:bg-offsetDark rounded-full right-sm bottom-0 pb-xs mb-xs">
        <button
          type="button"
          className="   text-textOff dark:text-textOffDark md:hover:text-textMain  dark:md:hover:text-textMainDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8"
        >
          <div className="pointer-events-none absolute z-30  opacity-0 shadow-sm transition-all delay-200 duration-200 group-hover:translate-y-0 group-hover:translate-x-0  group-hover:opacity-100 bottom-[120%] translate-y-1">
            <div className="py-xs px-sm rounded flex items-center gap-x-sm border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offsetPlusDark">
              <div className="border border-borderMain/40 rounded py-two px-xs default text-[11px] font-bold tracking-wide font-mono leading-none uppercase text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain">
                <span className="text-textMainDark">Ctrl + .</span>
              </div>
              <div className="default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain">
                <span className="text-textMainDark">
                  1 left. Reloads every 4 hours.
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center leading-none justify-center gap-xs">
            <div>
              <div className="rounded-full  p-three border  transition duration-300 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent">
                <div className="relative w-8 transition duration-200 ease-in-out">
                  <div className="rounded-full h-4 w-4 transition-all duration-300 ease-in-out shadow-sm md:group-hover:scale-90 ml-0 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offsetPlus dark:bg-offsetPlusDark"></div>
                </div>
              </div>
            </div>
            <div className="text-align-center relative">Copilot</div>
          </div>
        </button>
        <button
          type="button"
          className={`${
            searchValue
              ? "bg-primary text-white"
              : "bg-offsetPlus text-textMain"
          } dark:bg-offsetPlusDark  dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8`}
          onClick={() => {
            const existingArray =
              JSON.parse(localStorage.getItem("history")) || [];

            // Update the array as needed
            const updatedArray = [...existingArray, searchValue]; // For example, adding a new item

            // Store the updated array back in local storage
            localStorage.setItem("history", JSON.stringify(updatedArray));
            if (fromMenu) {
              closePop();
            }
            navigate({
              pathname: "search",
              search: createSearchParams({
                query: searchValue,
              }).toString(),
            });
          }}
        >
          <div className="flex items-center leading-none justify-center gap-xs">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fasr"
              data-icon="arrow-right"
              className="svg-inline--fa fa-arrow-right fa-fw fa-1x h-[1em]"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};
