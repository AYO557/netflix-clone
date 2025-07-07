import Netflix from "../../ui/netflix";
import { BellPlus, Film, House, List, Monitor } from "lucide-react";

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
          <li className="font-bold w-full bg-[rgba(236,147,147,0.2)] text-red-500 py-3 border-l-4 border-red-400 flex items-center gap-2 justify-center cursor-pointer hover:bg-[rgba(236,147,147,0.2)]">
            <div className="flex items-center gap-4 min-w-[50%]">
              <House />
              <span>HOME</span>
            </div>
          </li>
          <li className="font-bold w-full text-white py-3 flex items-center gap-2 justify-center hover:bg-[rgba(236,147,147,0.2)] cursor-pointer">
            <div className="flex items-center gap-4 min-w-[50%]">
              <Monitor />
              <span>TV SHOWS</span>
            </div>
          </li>
          <li className="font-bold w-full text-white py-3 flex items-center gap-2 justify-center cursor-pointer hover:bg-[rgba(236,147,147,0.2)]">
            <div className="flex items-center gap-4 min-w-[50%]">
              <Film />
              <span>MOVIES</span>
            </div>
          </li>
          <li className="font-bold w-full text-white py-3 flex items-center gap-2 justify-center cursor-pointer hover:bg-[rgba(236,147,147,0.2)]">
            <div className="flex items-center gap-4 min-w-[50%]">
              <BellPlus />
              <span>NEW & POPULAR</span>
            </div>
          </li>
          <li className="font-bold w-full text-white py-3 flex items-center gap-2 justify-center cursor-pointer hover:bg-[rgba(236,147,147,0.2)]">
            <div className="flex items-center gap-4 min-w-[50%]">
              <List />
              <span>MY LIST</span>
            </div>
          </li>
        </menu>

        <div className="flex flex-col gap-2">
          <li className="flex justify-center text-sm">
            <div className="flex items-center gap-4 min-w-[50%]">OTHERS</div>
          </li>
          <li className="font-bold w-full text-white py-3 flex items-center gap-2 justify-center cursor-pointer hover:bg-[rgba(236,147,147,0.2)]">
            <div className="flex items-center gap-4 min-w-[50%]">
              <List />
              <span>PLAYLIST</span>
            </div>
          </li>
          <li className="font-bold w-full text-white py-3 flex items-center gap-2 justify-center cursor-pointer hover:bg-[rgba(236,147,147,0.2)]">
            <div className="flex items-center gap-4 min-w-[50%]">
              <Monitor />
              <span>LIVE</span>
            </div>
          </li>
          <li className="font-bold w-full text-white py-3 flex items-center gap-2 justify-center cursor-pointer hover:bg-[rgba(236,147,147,0.2)]">
            <div className="flex items-center gap-4 min-w-[50%]">
              <BellPlus />
              <span>BOOKMARKS</span>
            </div>
          </li>
          <li className="font-bold w-full text-white py-3 flex items-center gap-2 justify-center cursor-pointer hover:bg-[rgba(236,147,147,0.2)]">
            <div className="flex items-center gap-4 min-w-[50%]">
              <List />
              <span>SETTINGS</span>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
