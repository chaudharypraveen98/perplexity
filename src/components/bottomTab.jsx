import classNames from "classnames";
import { Link } from "react-router-dom";

export default function BottomTab({ bottomItems, activeMenu, setActiveMenu }) {
  return (
    <div className="md:hidden bottom-0 fixed left-0 right-0 z-20 border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-offset dark:bg-offsetDark">
      <div className="px-sm  h-[64px] relative shadow-md border-t border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent">
        <div className="items-center relative  gap-x-xs flex h-full w-fit w-full">
          {bottomItems?.map((item, index) => (
            <div
              className={classNames({
                "relative  gap-x-sm  h-full flex items-center w-full px-two  justify-center": true, //colors
                "text-textMain": item.label === activeMenu,
                "text-extradark-gray": item.label !== activeMenu,
              })}
              key={`${item?.label}-${index}`}
              onClick={() => setActiveMenu(item?.label)}
            >
              <Link to={item.href}>
                {item?.active && (
                  <div
                    className="pointer-events-none z-10 h-4 rounded px-1 pb-1 bg-red text-white text-[11px] font-medium tracking-wide uppercase absolute"
                    style={{ top: 10, right: 0 }}
                  >
                    New
                  </div>
                )}
                <div className="flex items-center leading-none justify-start gap-xs">
                  {item.icon}
                  <div className="text-align-center relative">
                    {item?.label}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
