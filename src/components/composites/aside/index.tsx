import { Bell, ChevronDown, MapPin } from "lucide-react";
import SearchField from "../../ui/TextField/search-field";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useUser from "../../../hooks/useUser";

function Aside({ name }: { name: string }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // html event function

  useEffect(() => {
    document.body.addEventListener("click", () => {
      setIsDropdownOpen(false);
    });
  }, []);

  return (
    <aside className="col-span-3 h-full border border-grey  py-5 px-10 flex flex-col gap-20 overflow-y-scroll">
      <header className="flex justify-between items-center">
        <div className="h-full flex flex-col gap-20">
          <div
            className="relative flex gap-4 items-center hover:text-red-500 cursor-pointer"
            onClick={(e) => {
              setIsDropdownOpen(!isDropdownOpen);
              e.stopPropagation();
            }}
          >
            <div className="w-10 h-10 rounded-full bg-gray-600"></div>
            <h3 className="font-bold">{name || "No Username"}</h3>
            <ChevronDown />

            {isDropdownOpen && <ProfileDropDown />}
          </div>
        </div>

        <div className="flex items-center gap-5">
          <MapPin />
          <Bell />
        </div>
      </header>

      <div className="flex flex-col gap-5">
        <SearchField />

        <div className="flex flex-wrap items-center gap-2">
          <div className="bg-grey py-2 px-4 rounded-2xl">Hollywood</div>
          <div className="bg-grey py-2 px-4 rounded-2xl">Disney</div>
          <div className="bg-grey py-2 px-4 rounded-2xl">Anime</div>
          <div className="bg-grey py-2 px-4 rounded-2xl">Bollywood</div>
          <div className="bg-grey py-2 px-4 rounded-2xl">Drama</div>
          <div className="bg-grey py-2 px-4 rounded-2xl">Action</div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="font-bold">Popular Movies</h3>

        <div className="flex flex-col gap-3">
          <div className="bg-grey h-28 w-full rounded-2xl"></div>
          <div className="bg-grey h-28 w-full rounded-2xl"></div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="font-bold">Popular Actors</h3>

        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <div className="h-full flex flex-col gap-20">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-gray-600"></div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold">{name}</h3>
                  <p className="text-sm">Hollywood</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-gray-400 font-bold">#2,000.00</h3>
              <p className="text-sm">blabla</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="h-full flex flex-col gap-20">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-gray-600"></div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold">{name}</h3>
                  <p className="text-sm">Hollywood</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-gray-400 font-bold">#2,000.00</h3>
              <p className="text-sm">blabla</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="h-full flex flex-col gap-20">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-gray-600"></div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold">{name}</h3>
                  <p className="text-sm">Hollywood</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-gray-400 font-bold">#2,000.00</h3>
              <p className="text-sm">blabla</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="h-full flex flex-col gap-20">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-gray-600"></div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold">{name}</h3>
                  <p className="text-sm">Hollywood</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-gray-400 font-bold">#2,000.00</h3>
              <p className="text-sm">blabla</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function ProfileDropDown() {
  const navigate = useNavigate();
  const { removeUser } = useUser();

  const logOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    removeUser();
    navigate("/auth/login");
  };
  return (
    <menu className="absolute w-full bg-grey top-full mt-2 rounded-lg border border-black">
      <li className="p-2 font-medium border-b border-black cursor-pointer text-white hover:text-red-500 transition-all duration-200">
        View Profile
      </li>
      <li
        className="p-2 font-medium cursor-pointer text-white hover:text-red-500 transition-all duration-200"
        onClick={logOut}
      >
        Logout
      </li>
    </menu>
  );
}

export default Aside;
