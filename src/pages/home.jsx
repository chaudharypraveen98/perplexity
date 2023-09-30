import { useState } from "react";
import { SearchMenu } from "../components/searchMenu";
import { ArrowRightArc } from "../components/svg";

export default function Home() {
  const [searchVal, setSearchVal] = useState("");
  return (
    <div className="homepage w-full h-full mx-auto  max-w-screen-md md:px-lg px-md">
      <div className="font-serif font-medium text-[2.25rem] text-textMain mb-lg pb-xs">
        Where knowledge begins
      </div>
      <div className="relative w-full ">
        <div className="outline-none focus:outline-none focus:ring-borderMain font-sans flex items-center dark:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark dark:border-borderMainDark dark:focus:ring-borderMainDark selection:bg-superDuper selection:text-textMain duration-200 transition-all bg-background border text-textMain border-borderMain focus:ring-1 placeholder-textOff shadow-sm rounded-t-md rounded-b-md text-base pb-xl p-md">
          <textarea
            placeholder="Ask anything..."
            className="outline-none focus:outline-none w-full font-sans duration-200 transition-all caret-superDuper  resize-none overflow-auto max-h-[50vh] selection:bg-superDuper selection:text-textMain bg-background focus:bg-background text-textMain  border-borderMain focus:ring-borderMain place-holder-textOff  rounded-t-md rounded-b-md  text-base"
            autoComplete="off"
            // style={{ height: 113 }}
            spellCheck="false"
            onChange={(e) => setSearchVal(e.target.value)}
          ></textarea>
        </div>
        <SearchMenu searchValue={searchVal} />
      </div>

      <div>
        <span className="try-asking-container">
          <ArrowRightArc />
          Try asking
        </span>
        <div className="search-topics">
          <span>history of Argentina</span>
          <span>unique colorado flowers</span>
          <span>checkout time w hotel cdmx</span>
          <span>how to center a div</span>
          <span>brown dog name ideas</span>
          <span>healthy restaurants in sf</span>
          <span>d/dx x^2 y^4, d/dy x^2 y^4</span>
        </div>
      </div>
    </div>
  );
}
