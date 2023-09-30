import {
  Bars3CenterLeftIcon,
  ChatBubbleLeftEllipsisIcon,
  ClipboardIcon,
  CodeBracketSquareIcon,
  EllipsisHorizontalIcon,
  FlagIcon,
  PencilSquareIcon,
  PlusIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { useUser } from "../context/UserContext";
import { ArrowRotateRight } from "../components/svg";
import { useLocation } from "react-router-dom";

export default function Search() {
  const { user } = useUser();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Access a specific query parameter
  const searchParams = queryParams.get("query");

  return (
    <div className="h-full">
      <div className="md:rounded-t-xl sticky left-0 right-0 top-0 md:mb-0 z-20 border-b border-borderMain/60  divide-borderMain/60 ring-borderMain bg-background ">
        <div className="flex flex-row justify-between items-center min-h-[53px] font-medium text-sm px-md py-sm">
          <div className="flex gap-2 items-center my-2 overflow-hidden">
            <img
              src={user?.picture}
              alt="profile image"
              className="rounded-full w-5"
            />
            <a href="/" className="text-textMain">
              {user?.username}
            </a>
          </div>
          <div className="text-textOff h-8 inline-flex items-center">
            <div className="hover:opacity-70 inline-flex px-sm py-xs gap-x-xs">
              <PlusIcon className="cursor-pointer h-[1.2em] self-center stroke-2" />
              <div>Collection</div>
            </div>
            <div className="h-[1.2em] mt-[-5px]">/</div>
            <div className="hover:opacity-70 p-sm cursor-pointer">Untitled</div>
          </div>
          <div className="h-8 inline-flex items-center">
            <div className="flex items-center h-8 px-2">
              <EllipsisHorizontalIcon className="h-[1.2em]" />
            </div>
            <button
              type="button"
              className="bg-primary text-white h-8 inline-flex items-center px-sm rounded gap-xs"
            >
              <LockClosedIcon className="h-[1.2em]" />

              <div>Share</div>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-full mx-auto  max-w-screen-md md:px-lg  px-md">
        <div className="pt-lg md:pt-0 pb-[124px]">
          <div className="break-words [word-break:break-word] whitespace-pre-line  default font-display text-2xl md:text-3xl font-regular text-textMain  selection:bg-superDuper selection:text-textMain my-md md:my-lg">
            {searchParams
              ? searchParams
              : "how to improve your credit score fast"}
          </div>
          <div className="mb-lg">
            <div className="inline-flex items-center gap-x-sm">
              <QueueListIcon className="h-[1.2em] stroke-2" />
              <div className="font-medium text-lg">Sources</div>
            </div>
            <div className="grid grid-cols-2 gap-sm md:grid-cols-4 mt-md main-grid">
              <div
                className="min-h-[74px] border border-borderMain w-full rounded text-xs font-medium"
                onClick={() =>
                  window.open(
                    "https://www.nerdwallet.com/article/finance/raise-credit-score-fast",
                    "_blank"
                  )
                }
              >
                <div className="px-sm pt-sm pb-xs justify-between flex flex-col h-full">
                  <div className="line-clamp-2">
                    9 Ways to Build and Improve Your Credit Fast - NerdWallet
                  </div>
                  <div className="inline-flex text-textOff items-center gap-x-xs">
                    <img
                      className="rounded-full w-4 h-4"
                      src="https://www.google.com/s2/favicons?sz=128&amp;domain=nerdwallet.com"
                    />
                    <div className="text-textOff">nerdwallet</div>
                    <h2 className="text-lg mx-0.5 mt-[-5px] text-textOff">.</h2>
                    <div className="">1</div>
                  </div>
                </div>
              </div>
              <div
                className="min-h-[74px] border border-borderMain w-full rounded text-xs font-medium"
                onClick={() =>
                  window.open(
                    "https://www.nerdwallet.com/article/finance/raise-credit-score-fast",
                    "_blank"
                  )
                }
              >
                <div className="px-sm pt-sm pb-xs justify-between flex flex-col h-full">
                  <div className="line-clamp-2">
                    How to Improve Your Credit Score Fast - Experian
                  </div>
                  <div className="inline-flex text-textOff items-center gap-x-xs">
                    <img
                      className="rounded-full w-4 h-4"
                      src="https://www.google.com/s2/favicons?sz=128&amp;domain=experian.com"
                    />
                    <div className="text-textOff">experian</div>
                    <h2 className="text-lg mx-0.5 mt-[-5px] text-textOff">.</h2>
                    <div className="">2</div>
                  </div>
                </div>
              </div>
              <div
                className="min-h-[74px] border border-borderMain w-full rounded text-xs font-medium"
                onClick={() =>
                  window.open(
                    "https://www.nerdwallet.com/article/finance/raise-credit-score-fast",
                    "_blank"
                  )
                }
              >
                <div className="px-sm pt-sm pb-xs justify-between flex flex-col h-full">
                  <div className="line-clamp-2">
                    How to Improve Your Credit Score Fast - Investopedia
                  </div>
                  <div className="inline-flex text-textOff items-center gap-x-xs">
                    <img
                      className="rounded-full w-4 h-4"
                      src="https://www.google.com/s2/favicons?sz=128&amp;domain=investopedia.com"
                    />
                    <div className="text-textOff">investopedia</div>
                    <h2 className="text-lg mx-0.5 mt-[-5px] text-textOff">.</h2>
                    <div className="">3</div>
                  </div>
                </div>
              </div>
              <div
                className="min-h-[74px] border border-borderMain w-full rounded text-xs font-medium"
                onClick={() =>
                  window.open(
                    "https://www.nerdwallet.com/article/finance/raise-credit-score-fast",
                    "_blank"
                  )
                }
              >
                <div className="px-sm pt-sm pb-xs justify-between flex flex-col h-full">
                  <div className="line-clamp-2">
                    Can I Raise My Credit Score Fast? | Credit Karma
                  </div>
                  <div className="inline-flex text-textOff items-center gap-x-xs">
                    <img
                      className="rounded-full w-4 h-4"
                      src="https://www.google.com/s2/favicons?sz=128&amp;domain=creditkarma.com"
                    />
                    <div className="text-textOff">creditkarma</div>
                    <h2 className="text-lg mx-0.5 mt-[-5px] text-textOff">.</h2>
                    <div className="">4</div>
                  </div>
                </div>
              </div>
              <div
                className="min-h-[74px] border border-borderMain w-full rounded text-xs font-medium"
                onClick={() =>
                  window.open(
                    "https://www.nerdwallet.com/article/finance/raise-credit-score-fast",
                    "_blank"
                  )
                }
              >
                <div className="px-sm pt-sm pb-xs justify-between flex flex-col h-full">
                  <div className="line-clamp-2">
                    How to Raise Your Credit Scores Fast | Equifax
                  </div>
                  <div className="inline-flex text-textOff items-center gap-x-xs">
                    <img
                      className="rounded-full w-4 h-4"
                      src="https://www.google.com/s2/favicons?sz=128&domain=equifax.com"
                    />
                    <div className="text-textOff">equifax</div>
                    <h2 className="text-lg mx-0.5 mt-[-5px] text-textOff">.</h2>
                    <div className="">5</div>
                  </div>
                </div>
              </div>
              <div
                className="min-h-[74px] border border-borderMain w-full rounded text-xs font-medium"
                onClick={() =>
                  window.open(
                    "https://www.nerdwallet.com/article/finance/raise-credit-score-fast",
                    "_blank"
                  )
                }
              >
                <div className="px-sm pt-sm pb-xs justify-between flex flex-col h-full">
                  <div className="line-clamp-2">
                    4 tips to boost your credit score fast - CNBC
                  </div>
                  <div className="inline-flex text-textOff items-center gap-x-xs">
                    <img
                      className="rounded-full w-4 h-4"
                      src="https://www.google.com/s2/favicons?sz=128&domain=cnbc.com"
                    />
                    <div className="text-textOff">cnbc</div>
                    <h2 className="text-lg mx-0.5 mt-[-5px] text-textOff">.</h2>
                    <div className="">6</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-lg answer-container">
            <div className="inline-flex items-center gap-x-sm">
              <h2>
                <Bars3CenterLeftIcon className="h-[1.5em] stroke-2" />
              </h2>

              <h2 className="font-medium text-lg">Answer · GPT-4 </h2>
            </div>
            <div className="break-words min-w-0 [word-break:break-word]">
              <div dir="auto">
                <div className="prose dark:prose-invert inline leading-normal break-words min-w-0 [word-break:break-word]">
                  <span className="">
                    To improve your credit score fast, you can follow these
                    strategies:
                  </span>
                  <ol className="list-outside list-decimal marker:font-mono marker:text-sm pl-11 custom-order-list">
                    <li>
                      <span className=""></span>
                      <span className="">
                        <span className="">
                          <strong>
                            Pay credit card balances strategically
                          </strong>
                        </span>
                        <span className="">
                          : Aim to use less than 30% of your credit limit on any
                          card, as lower credit utilization is better for your
                          score. The highest scorers tend to have credit
                          utilization in the single digits
                        </span>
                        <span className="">
                          <span className="whitespace-nowrap">
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="citation ml-xs inline"
                              href="https://www.nerdwallet.com/article/finance/raise-credit-score-fast"
                            >
                              <div className="inline-flex relative -top-[0.3rem] light font-sans text-base text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain">
                                <span className="text-[0.60rem]">
                                  <div className="inline-flex h-[1rem] min-w-[1rem] px-[0.2em] rounded-full items-center justify-center text-center font-mono font-bold md:hover:text-white tabular-nums border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark transition duration-300 bg-offsetPlus dark:bg-offsetPlusDark md:hover:bg-super">
                                    1
                                  </div>
                                </span>
                              </div>
                            </a>
                            .
                          </span>
                        </span>
                        <span className=""></span>
                      </span>
                      <span className=""></span>
                    </li>
                    <li>
                      <span className=""></span>
                      <span className="">
                        <span className="">
                          <strong>Ask for higher credit limits</strong>
                        </span>
                        <span className="">
                          : Requesting a credit limit increase can help lower
                          your credit utilization ratio, which can positively
                          impact your credit score
                        </span>
                        <span className="">
                          <span className="whitespace-nowrap">
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="citation ml-xs inline"
                              href="https://www.nerdwallet.com/article/finance/raise-credit-score-fast"
                            >
                              <div className="inline-flex relative -top-[0.3rem] light font-sans text-base text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain">
                                <span className="text-[0.60rem]">
                                  <div className="inline-flex h-[1rem] min-w-[1rem] px-[0.2em] rounded-full items-center justify-center text-center font-mono font-bold md:hover:text-white tabular-nums border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark transition duration-300 bg-offsetPlus dark:bg-offsetPlusDark md:hover:bg-super">
                                    1
                                  </div>
                                </span>
                              </div>
                            </a>
                            .
                          </span>
                        </span>
                        <span className=""></span>
                      </span>
                      <span className=""></span>
                    </li>
                    <li>
                      <span className=""></span>
                      <span className="">
                        <span className="">
                          <strong>Become an authorized user</strong>
                        </span>
                        <span className="">
                          : Being added as an authorized user on someone else's
                          credit card account can help improve your credit
                          score, especially if the primary cardholder has a good
                          credit history
                        </span>
                        <span className="">
                          <span className="whitespace-nowrap">
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="citation ml-xs inline"
                              href="https://www.nerdwallet.com/article/finance/raise-credit-score-fast"
                            >
                              <div className="inline-flex relative -top-[0.3rem] light font-sans text-base text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain">
                                <span className="text-[0.60rem]">
                                  <div className="inline-flex h-[1rem] min-w-[1rem] px-[0.2em] rounded-full items-center justify-center text-center font-mono font-bold md:hover:text-white tabular-nums border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark transition duration-300 bg-offsetPlus dark:bg-offsetPlusDark md:hover:bg-super">
                                    1
                                  </div>
                                </span>
                              </div>
                            </a>
                            .
                          </span>
                        </span>
                        <span className=""></span>
                      </span>
                      <span className=""></span>
                    </li>
                    <li>
                      <span className=""></span>
                      <span className="">
                        <span className="">
                          <strong>Pay bills on time</strong>
                        </span>
                        <span className="">
                          : Consistently paying your bills on time is crucial
                          for maintaining and improving your credit score
                        </span>
                        <span className="">
                          <span className="whitespace-nowrap">
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="citation ml-xs inline"
                              href="https://www.nerdwallet.com/article/finance/raise-credit-score-fast"
                            >
                              <div className="inline-flex relative -top-[0.3rem] light font-sans text-base text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain">
                                <span className="text-[0.60rem]">
                                  <div className="inline-flex h-[1rem] min-w-[1rem] px-[0.2em] rounded-full items-center justify-center text-center font-mono font-bold md:hover:text-white tabular-nums border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark transition duration-300 bg-offsetPlus dark:bg-offsetPlusDark md:hover:bg-super">
                                    1
                                  </div>
                                </span>
                              </div>
                            </a>
                            .
                          </span>
                        </span>
                        <span className=""></span>
                      </span>
                      <span className=""></span>
                    </li>
                    <li>
                      <span className=""></span>
                      <span className="">
                        <span className="">
                          <strong>Dispute errors on your credit report</strong>
                        </span>
                        <span className="">
                          : Regularly review your credit reports and dispute any
                          errors you find, as incorrect information can
                          negatively affect your score
                        </span>
                        <span className="">
                          <span className="whitespace-nowrap">
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="citation ml-xs inline"
                              href="https://www.investopedia.com/how-to-improve-your-credit-score-4590097"
                            >
                              <div className="inline-flex relative -top-[0.3rem] light font-sans text-base text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain">
                                <span className="text-[0.60rem]">
                                  <div className="inline-flex h-[1rem] min-w-[1rem] px-[0.2em] rounded-full items-center justify-center text-center font-mono font-bold md:hover:text-white tabular-nums border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark transition duration-300 bg-offsetPlus dark:bg-offsetPlusDark md:hover:bg-super">
                                    3
                                  </div>
                                </span>
                              </div>
                            </a>
                            .
                          </span>
                        </span>
                        <span className=""></span>
                      </span>
                      <span className=""></span>
                    </li>
                    <li>
                      <span className=""></span>
                      <span className="">
                        <span className="">
                          <strong>Keep old credit accounts open</strong>
                        </span>
                        <span className="">
                          : Don't close old credit card accounts, as they
                          contribute to your credit history length, which is a
                          factor in your credit score
                        </span>
                        <span className="">
                          <span className="whitespace-nowrap">
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="citation ml-xs inline"
                              href="https://www.investopedia.com/how-to-improve-your-credit-score-4590097"
                            >
                              <div className="inline-flex relative -top-[0.3rem] light font-sans text-base text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain">
                                <span className="text-[0.60rem]">
                                  <div className="inline-flex h-[1rem] min-w-[1rem] px-[0.2em] rounded-full items-center justify-center text-center font-mono font-bold md:hover:text-white tabular-nums border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark transition duration-300 bg-offsetPlus dark:bg-offsetPlusDark md:hover:bg-super">
                                    3
                                  </div>
                                </span>
                              </div>
                            </a>
                            .
                          </span>
                        </span>
                        <span className=""></span>
                      </span>
                      <span className=""></span>
                    </li>
                    <li>
                      <span className=""></span>
                      <span className="">
                        <span className="">
                          <strong>Limit requests for new credit</strong>
                        </span>
                        <span className="">
                          : Too many hard inquiries in a short period can
                          negatively impact your credit score, so be cautious
                          about applying for new credit
                        </span>
                        <span className="">
                          <span className="whitespace-nowrap">
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="citation ml-xs inline"
                              href="https://www.equifax.com/personal/education/credit/score/raise-credit-scores-fast/"
                            >
                              <div className="inline-flex relative -top-[0.3rem] light font-sans text-base text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain">
                                <span className="text-[0.60rem]">
                                  <div className="inline-flex h-[1rem] min-w-[1rem] px-[0.2em] rounded-full items-center justify-center text-center font-mono font-bold md:hover:text-white tabular-nums border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark transition duration-300 bg-offsetPlus dark:bg-offsetPlusDark md:hover:bg-super">
                                    5
                                  </div>
                                </span>
                              </div>
                            </a>
                            .
                          </span>
                        </span>
                        <span className=""></span>
                      </span>
                      <span className=""></span>
                    </li>
                    <li>
                      <span className=""></span>
                      <span className="">
                        <span className="">
                          <strong>Pay down revolving account balances</strong>
                        </span>
                        <span className="">
                          : Reducing your debt can help improve your credit
                          utilization ratio and boost your credit score
                        </span>
                        <span className="">
                          <span className="whitespace-nowrap">
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="citation ml-xs inline"
                              href="https://www.cnbc.com/select/how-to-boost-your-credit-score-fast/"
                            >
                              <div className="inline-flex relative -top-[0.3rem] light font-sans text-base text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain">
                                <span className="text-[0.60rem]">
                                  <div className="inline-flex h-[1rem] min-w-[1rem] px-[0.2em] rounded-full items-center justify-center text-center font-mono font-bold md:hover:text-white tabular-nums border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark transition duration-300 bg-offsetPlus dark:bg-offsetPlusDark md:hover:bg-super">
                                    6
                                  </div>
                                </span>
                              </div>
                            </a>
                            .
                          </span>
                        </span>
                        <span className=""></span>
                      </span>
                      <span className=""></span>
                    </li>
                  </ol>
                  <span className="">
                    Remember that improving your credit score takes time and
                    consistent effort. While some of these strategies can have a
                    relatively quick impact, maintaining good financial habits
                    over a long period is essential for achieving and
                    maintaining a high credit score
                  </span>
                  <span className="">
                    <span className="whitespace-nowrap">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="citation ml-xs inline"
                        href="https://www.equifax.com/personal/education/credit/score/raise-credit-scores-fast/"
                      >
                        <div className="inline-flex relative -top-[0.3rem] light font-sans text-base text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain">
                          <span className="text-[0.60rem]">
                            <div className="inline-flex h-[1rem] min-w-[1rem] px-[0.2em] rounded-full items-center justify-center text-center font-mono font-bold md:hover:text-white tabular-nums border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark transition duration-300 bg-offsetPlus dark:bg-offsetPlusDark md:hover:bg-super">
                              5
                            </div>
                          </span>
                        </div>
                      </a>
                      .
                    </span>
                  </span>
                  <span className=""></span>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-xs mt-sm -ml-sm para-action-btn text-textOff ">
              <button
                type="button"
                className="bg-background inline-flex w-auto items-center gap-x-xs px-sm"
              >
                <ArrowRotateRight className="h-[1em]" />
                <div>Copilot</div>
              </button>
              <button type="button" className="btn-icon hover:text-error">
                <FlagIcon className="h-[1.2em]" />
              </button>
              <button type="button" className="btn-icon">
                <CodeBracketSquareIcon className="h-[1.2em]" />
              </button>
              <button type="button" className="btn-icon">
                <ClipboardIcon className="h-[1.2em]" />
              </button>
              <button type="button" className="btn-icon">
                <PencilSquareIcon className="h-[1.2em]" />
              </button>
            </div>
            <div className="pt-md">
              <div className="p-md rounded flex items-center justify-between gap-x-md border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offset dark:bg-offsetDark">
                <div className="flex items-center gap-x-md">
                  <div className="hidden md:block super font-sans text-base text-super dark:text-superDark selection:bg-superDuper selection:text-textMain">
                    <ChatBubbleLeftEllipsisIcon className="h-8 w-10" />
                  </div>
                  <div>
                    <div className="default font-sans text-base font-medium text-textMain dark:text-textMainDark selection:bg-superDuper selection:text-textMain">
                      Help us make Perplexity better
                    </div>
                    <div className="light font-sans text-sm text-textOff dark:text-textOffDark selection:bg-superDuper selection:text-textMain">
                      Take a quick survey and give us your feedback
                    </div>
                  </div>
                </div>
                <div>
                  <button className="" data-testid="tf-v1-popup">
                    <button
                      type="button"
                      className="text-super dark:text-superDark  md:hover:bg-offsetPlus dark:md:hover:bg-offsetPlusDark  md:hover:text-super md:dark:hover:text-superDark font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-in-out font-sans  select-none items-center relative group  justify-center text-center items-center rounded cursor-point active:scale-95 origin-center whitespace-nowrap inline-flex text-base px-md font-medium h-10"
                    >
                      <div className="flex items-center leading-none justify-center gap-xs">
                        <div className="text-align-center relative">Begin</div>
                      </div>
                    </button>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
