import { NavLink } from "react-router";
import Netflix from "../../ui/netflix";
import { BellPlus, Film, House, List, Monitor } from "lucide-react";

//  bg-[rgba(236,147,147,0.2)] text-red-500 border-l-4 border-red-400
function NavMenu() {
  return (
    <div className="h-full flex flex-col py-5 gap-20">
      <div role="logo" className="h-[90px] w-[230px] mx-auto">
        <Netflix />
      </div>

      <div className="flex flex-col gap-10">
        <menu className="flex flex-col gap-2">
          <li className="flex justify-center text-sm">
            <div className="flex items-center gap-4 min-w-[50%]">MENU</div>
          </li>
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              return `font-bold w-full py-3 flex items-center gap-2 justify-center cursor-pointer hover:bg-[rgba(236,147,147,0.2)] ${
                isActive
                  ? "bg-[rgba(236,147,147,0.2)] text-red-500 border-l-4 border-red-400"
                  : "text-white"
              }`;
            }}
          >
            <div className="flex items-center gap-4 min-w-[50%]">
              <House />
              <span>HOME</span>
            </div>
          </NavLink>
          <NavLink
            to={"/tv-shows"}
            className={({ isActive }) => {
              return `font-bold w-full py-3 flex items-center gap-2 justify-center cursor-pointer hover:bg-[rgba(236,147,147,0.2)] ${
                isActive
                  ? "bg-[rgba(236,147,147,0.2)] text-red-500 border-l-4 border-red-400"
                  : "text-white"
              }`;
            }}
          >
            <div className="flex items-center gap-4 min-w-[50%]">
              <Monitor />
              <span>TV SHOWS</span>
            </div>
          </NavLink>
          <NavLink
            to={"/movies"}
            className={({ isActive }) => {
              return `font-bold w-full py-3 flex items-center gap-2 justify-center cursor-pointer hover:bg-[rgba(236,147,147,0.2)] ${
                isActive
                  ? "bg-[rgba(236,147,147,0.2)] text-red-500 border-l-4 border-red-400"
                  : "text-white"
              }`;
            }}
          >
            <div className="flex items-center gap-4 min-w-[50%]">
              <Film />
              <span>MOVIES</span>
            </div>
          </NavLink>
          <NavLink
            to={"/new-and-popular"}
            className={({ isActive }) => {
              return `font-bold w-full py-3 flex items-center gap-2 justify-center cursor-pointer hover:bg-[rgba(236,147,147,0.2)] ${
                isActive
                  ? "bg-[rgba(236,147,147,0.2)] text-red-500 border-l-4 border-red-400"
                  : "text-white"
              }`;
            }}
          >
            <div className="flex items-center gap-4 min-w-[50%]">
              <BellPlus />
              <span>NEW & POPULAR</span>
            </div>
          </NavLink>
          <NavLink
            to={"/my-list"}
            className={({ isActive }) => {
              return `font-bold w-full py-3 flex items-center gap-2 justify-center cursor-pointer hover:bg-[rgba(236,147,147,0.2)] ${
                isActive
                  ? "bg-[rgba(236,147,147,0.2)] text-red-500 border-l-4 border-red-400"
                  : "text-white"
              }`;
            }}
          >
            <div className="flex items-center gap-4 min-w-[50%]">
              <List />
              <span>MY LIST</span>
            </div>
          </NavLink>
        </menu>

        <div className="flex flex-col gap-2">
          <li className="flex justify-center text-sm">
            <div className="flex items-center gap-4 min-w-[50%]">OTHERS</div>
          </li>
          <NavLink
            to={"/playlist"}
            className={({ isActive }) => {
              return `font-bold w-full py-3 flex items-center gap-2 justify-center cursor-pointer hover:bg-[rgba(236,147,147,0.2)] ${
                isActive
                  ? "bg-[rgba(236,147,147,0.2)] text-red-500 border-l-4 border-red-400"
                  : "text-white"
              }`;
            }}
          >
            <div className="flex items-center gap-4 min-w-[50%]">
              <List />
              <span>PLAYLIST</span>
            </div>
          </NavLink>
          <NavLink
            to={"/live"}
            className={({ isActive }) => {
              return `font-bold w-full py-3 flex items-center gap-2 justify-center cursor-pointer hover:bg-[rgba(236,147,147,0.2)] ${
                isActive
                  ? "bg-[rgba(236,147,147,0.2)] text-red-500 border-l-4 border-red-400"
                  : "text-white"
              }`;
            }}
          >
            <div className="flex items-center gap-4 min-w-[50%]">
              <Monitor />
              <span>LIVE</span>
            </div>
          </NavLink>
          <NavLink
            to={"/bookmarks"}
            className={({ isActive }) => {
              return `font-bold w-full py-3 flex items-center gap-2 justify-center cursor-pointer hover:bg-[rgba(236,147,147,0.2)] ${
                isActive
                  ? "bg-[rgba(236,147,147,0.2)] text-red-500 border-l-4 border-red-400"
                  : "text-white"
              }`;
            }}
          >
            <div className="flex items-center gap-4 min-w-[50%]">
              <BellPlus />
              <span>BOOKMARKS</span>
            </div>
          </NavLink>
          <NavLink
            to={"/settings"}
            className={({ isActive }) => {
              return `font-bold w-full py-3 flex items-center gap-2 justify-center cursor-pointer hover:bg-[rgba(236,147,147,0.2)] ${
                isActive
                  ? "bg-[rgba(236,147,147,0.2)] text-red-500 border-l-4 border-red-400"
                  : "text-white"
              }`;
            }}
          >
            <div className="flex items-center gap-4 min-w-[50%]">
              <List />
              <span>SETTINGS</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
