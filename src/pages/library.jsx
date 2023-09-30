import {
  BuildingLibraryIcon,
  ClockIcon,
  EllipsisHorizontalIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  SparklesIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import { LibraryIcon } from "../components/svg";
import { useEffect, useState } from "react";

export default function Library() {
  const [activeTab, setActiveTab] = useState("null");
  const [threads, setThreads] = useState([]);
  useEffect(() => {
    const existingArray = JSON.parse(localStorage.getItem("history"));
    if (existingArray) {
      setThreads(existingArray);
    }
  }, []);

  return (
    <div className="flex h-full min-h-[100vh]">
      <div className="lg:pr-sm lg:pb-sm lg:pt-sm grow">
        <div className="lg:rounded-lg shadow-sm  h-full overflow-clip bg-clip-border border-borderMain/60 divide-borderMain/60  ring-borderMain bg-background ">
          <div className="sticky top-0 z-[15] border-borderMain/60  divide-borderMain/60  ring-borderMainbg-background">
            <div className="pt-md md:pt-lg   pb-md md:pb-lg  mx-auto max-w-screen-xl px-md md:px-xl  border-b border-borderMain/60 divide-borderMain/60  ring-borderMain  bg-transparent">
              <div className="hidden md:flex items-center justify-between gap-sm grow">
                <div className="flex items-center gap-x-sm ">
                  <h1 className="default font-display text-2xl md:text-3xl text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain">
                    <LibraryIcon className="h-8 w-8" />
                  </h1>
                  <h1 className="default font-display text-2xl md:text-3xl text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain">
                    Library
                  </h1>
                </div>
                <div className="max-w-md w-full">
                  <div>
                    <div className="rounded-full">
                      <div className="relative flex items-center">
                        <input
                          type="search"
                          placeholder="Search your threads"
                          className="w-full outline-none focus:outline-none focus:ring-borderMain font-sans flex items-center dark:bg-offsetDark dark:text-textMainDark dark:placeholder-textOffDark dark:border-borderMainDark dark:focus:ring-borderMainDark selection:bg-superDuper selection:text-textMain duration-200 transition-all bg-background border text-textMain border-borderMain focus:ring-1 placeholder-textOff rounded-t-[32px] rounded-b-[32px] py-sm text-sm px-md pl-[40px] pr-md"
                          autoComplete="off"
                          value=""
                        />
                        <div className="absolute flex items-center bg-background dark:bg-offsetDark rounded-t-lg left-md">
                          <div className="light font-sans text-base text-textOff  selection:bg-superDuper selection:text-textMain">
                            <MagnifyingGlassIcon className="w-5 h-5" />
                          </div>
                        </div>
                        <div className="absolute flex items-center gap-sm bg-background dark:bg-offsetDark rounded-full right-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-x-sm items-center">
                  <span className="h-full flex items-center">
                    <EllipsisHorizontalIcon className="h-[1.2em]" />
                  </span>
                  <span>
                    <button className="bg-super dark:bg-superDark dark:text-backgroundDark text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8">
                      <PlusIcon className="cursor-pointer h-[1.2em] self-center stroke-2" />{" "}
                      Create
                    </button>
                  </span>
                </div>
              </div>
              <div className="flex md:hidden">
                <div className="flex justify-between gap-sm w-full">
                  <div className="flex items-center gap-x-sm ">
                    <h1 className="default font-display text-2xl md:text-3xl text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain">
                      <LibraryIcon className="h-8 w-8" />
                    </h1>
                    <h1 className="default font-display text-2xl md:text-3xl text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain">
                      Library
                    </h1>
                  </div>
                  <div className="flex gap-x-sm">
                    <span className="h-full flex items-center">
                      <EllipsisHorizontalIcon className="h-[1.2em]" />
                    </span>
                    <span>
                      <button className="bg-super dark:bg-superDark dark:text-backgroundDark text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm px-sm font-medium h-8">
                        <PlusIcon className="cursor-pointer h-[1.2em] self-center stroke-2" />{" "}
                        Create
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-14 lg:hidden border-b border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-transparent">
              <div className=" items-center relative  gap-x-xs flex h-full w-fit justify-center w-full">
                <div
                  className="items-center relative  gap-x-xs flex h-full justify-center w-full"
                  onClick={() => setActiveTab("Threads")}
                >
                  <div className="relative  gap-x-sm  h-full flex items-center w-full px-two  justify-center">
                    <div className="justify-center">
                      <button
                        type="button"
                        className="md:hover:bg-offsetPlus text-textMain dark:text-textMainDark dark:md:hover:bg-offsetPlusDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10"
                      >
                        <div className="flex items-center leading-none justify-center gap-xs">
                          <Square3Stack3DIcon className="h-[1em]" />
                          <div className="text-align-center relative">
                            Threads
                          </div>
                        </div>
                      </button>
                      {activeTab === "Threads" && (
                        <div className="absolute z-30 bottom-0 left-0 right-0 h-1 rounded-t-sm bg-textMain dark:bg-textMainDark"></div>
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className="items-center relative  gap-x-xs flex h-full w-fit justify-center w-full"
                  onClick={() => setActiveTab("Collections")}
                >
                  <div className="relative  gap-x-sm  h-full flex items-center w-full px-two  justify-center">
                    <div className="justify-center">
                      <button
                        type="button"
                        className="md:hover:bg-offsetPlus text-textMain dark:text-textMainDark dark:md:hover:bg-offsetPlusDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-base px-md font-medium h-10"
                      >
                        <div className="flex items-center leading-none justify-center gap-xs">
                          <ListBulletIcon className="h-[1em]" />
                          <div className="text-align-center relative">
                            Collections
                          </div>
                        </div>
                      </button>
                      {activeTab === "Collections" && (
                        <div className="absolute z-30 bottom-0 left-0 right-0 h-1 rounded-t-sm bg-textMain dark:bg-textMainDark"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full mx-auto  max-w-screen-xl md:px-xl  px-md">
            <div className="lg:grid grid-cols-12 gap-xl ">
              <div className="col-span-8 lg:mt-lg">
                <div className="hidden lg:block">
                  <div className="border-b border-borderMain/60 divide-borderMain/60  ring-borderMain bg-background dark:bg-backgroundDark pb-sm">
                    <div className="hidden md:flex items-center justify-between gap-sm grow">
                      <div className="flex items-center gap-x-sm ">
                        <h2 className="default font-display text-lg font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain">
                          <ListBulletIcon className="h-[1em]" />
                        </h2>
                        <h2 className="default font-display text-lg font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain">
                          Threads
                        </h2>
                      </div>
                      <div className="flex flex-row gap-x-sm items-center h-8">
                        <button
                          type="button"
                          className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8"
                        >
                          <PlusIcon className="text-textMain cursor-pointer h-[1.2em] self-center stroke-2 w-8" />
                        </button>
                        <button
                          type="button"
                          className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8"
                        >
                          <EllipsisHorizontalIcon className="text-textMain bg-offsetPlus h-[1.2em]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divide-y border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-transparent">
                  {threads?.length ? (
                    threads?.map((thread, index) => (
                      <div
                        className="py-md  md:px-0 max-w-[100%] border-b border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-transparent"
                        key={`${thread}-${index}`}
                      >
                        <a
                          className="block group"
                          href="/search/e49aa869-9977-4d78-91ee-79fff7596949"
                        >
                          <div className="group flex justify-between gap-x-sm border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-transparent">
                            <div className="">
                              <div className="default font-sans text-base font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain">
                                <div className="md:group-hover:text-super md:dark:group-hover:text-superDark transition duration-300 line-clamp-1 break-all">
                                  {thread}
                                </div>
                              </div>
                              <div className="line-clamp-2 mt-two break-all light font-sans text-base text-textOff  selection:bg-superDuper selection:text-textMain">
                                I'm sorry, but you did not ask a question.
                                Please provide a question for me to answer.
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="flex justify-between items-center mt-xs">
                          <div className="flex flex-row gap-x-md items-center">
                            <div className="flex gap-x-xs items-center">
                              <div className="light font-sans text-xs font-medium text-textOff  selection:bg-superDuper selection:text-textMain">
                                <ClockIcon className="h-[1em]" />
                              </div>
                              <button
                                type="button"
                                className="text-textOff  cursor-default pl-0 pr-0 focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-xs font-medium px-sm h-6"
                              >
                                <div className="pointer-events-none absolute z-30  opacity-0 shadow-sm transition-all delay-200 duration-200 group-hover:translate-y-0 group-hover:translate-x-0  group-hover:opacity-100 left-[120%] translate-x-1">
                                  <div className="py-xs px-sm rounded flex items-center gap-x-sm border-borderMain/60  divide-borderMain/60  ring-borderMain  bg-offsetPlusDark">
                                    <div className="default font-sans text-xs font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain">
                                      <span className="text-textMainDark">
                                        24 September 2023 at 00:27 GMT+5:30
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center leading-none justify-center gap-xs">
                                  <div className="text-align-center relative">
                                    19h ago
                                  </div>
                                </div>
                              </button>
                            </div>
                            <div className="flex gap-x-xs items-center">
                              <div className="super font-sans text-xs font-medium text-super  selection:bg-superDuper selection:text-textMain">
                                <SparklesIcon className="h-[1em]" />
                              </div>
                              <div className="super font-sans text-xs font-medium text-super  selection:bg-superDuper selection:text-textMain">
                                Copilot
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-row gap-x-sm text-textOff h-8 items-center">
                            <PlusIcon className="cursor-pointer h-[1.2em] self-center stroke-2" />
                            <EllipsisHorizontalIcon className="h-[1.2em]" />
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="p-xl mt-md flex items-center justify-center rounded border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offset dark:bg-offsetDark">
                      <div className="light font-sans text-base text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain">
                        No threads yet
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-span-4 lg:mt-lg">
                <div className="hidden lg:block">
                  <div className="border-b border-borderMain/60 divide-borderMain/60  ring-borderMain bg-background dark:bg-backgroundDark pb-sm">
                    <div className="hidden md:flex items-center justify-between gap-sm grow">
                      <div className="flex items-center gap-x-sm ">
                        <h2 className="default font-display text-lg font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain">
                          <ListBulletIcon className="h-[1em]" />
                        </h2>
                        <h2 className="default font-display text-lg font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain">
                          Collections
                        </h2>
                      </div>
                      <button
                        type="button"
                        className="bg-offsetPlus dark:bg-offsetPlusDark text-textMain dark:text-textMainDark  md:hover:text-textOff md:dark:hover:text-textOffDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-sm aspect-square h-8"
                      >
                        <PlusIcon className="text-textMain cursor-pointer h-[1.2em] self-center stroke-2 w-8" />
                      </button>
                    </div>
                  </div>
                  <div className="space-y-sm my-md">
                    <div className="p-md rounded-md text-center border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offset dark:bg-offsetDark">
                      <div className="mb-sm light font-sans text-base text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain">
                        Organize your threads or collaborate with others
                      </div>
                      <button
                        type="button"
                        className="bg-super dark:bg-superDark dark:text-backgroundDark text-white hover:opacity-80 font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap flex w-full text-sm px-sm font-medium h-8"
                      >
                        <div className="flex items-center leading-none justify-center gap-xs">
                          <div className="text-align-center relative">
                            Get Started
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
