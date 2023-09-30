import { useState } from "react";
import { SearchMenu } from "./searchMenu";
import { XMarkIcon } from "@heroicons/react/24/outline";

export const ThreadPopUP = ({ closePop }) => {
  const [searchVal, setSearchVal] = useState("");
  return (
    <>
      <div className="bg-black/80 fixed top-0 left-0 bottom-0 right-0 z-20 transition-all duration-5000 items-center animate-in fade-in duration-300"></div>
      <div className="flex justify-center fixed top-0 left-0 bottom-0 right-0 z-20 items-center">
        <div className="animate-in fade-in zoom-in-95 duration-300 z-50">
          <div className="max-w-screen-md w-[90vw] p-md rounded-xl shadow-md relative border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offset dark:bg-offsetDark">
            <button
              type="button"
              className="bg-offsetPlus text-textMain md:hover:text-textOff focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none group  justify-center text-center items-center rounded-full cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8 fixed right-10 z-50 top-[50px]"
              onClick={() => closePop()}
            >
              <div className="flex items-center leading-none justify-center gap-xs">
                <XMarkIcon className="h-4 w-4 stroke-[2.5px]" />
              </div>
            </button>
            <div className="relative">
              <div className="row">
                <div className="rounded-md relative flex items-center">
                  <div className="w-full outline-none focus:outline-none focus:ring-borderMain font-sans flex items-center dark:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark dark:border-borderMainDark dark:focus:ring-borderMainDark selection:bg-superDuper selection:text-textMain duration-200 transition-all bg-background border text-textMain border-borderMain focus:ring-1 placeholder-textOff rounded-t-md rounded-b-md text-base p-md pb-xl">
                    <textarea
                      placeholder="Ask anything..."
                      className="overflow-auto max-h-[50vh] outline-none w-full flex items-center font-sans duration-200 transition-all caret-superDuper resize-none selection:bg-superDuper selection:text-textMain dark:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark bg-background text-textMain placeholder-textOff"
                      autoComplete="off"
                      spellCheck="false"
                      style={{ height: 48 }}
                      onChange={(e) => setSearchVal(e.target.value)}
                    ></textarea>
                  </div>
                  <SearchMenu
                    searchValue={searchVal}
                    fromMenu={true}
                    closePop={() => closePop()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
