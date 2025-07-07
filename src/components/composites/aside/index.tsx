import { Bell, ChevronDown, MapPin } from "lucide-react";
import SearchField from "../../ui/TextField/search-field";

function Aside({ name }: { name: string }) {
  return (
    <aside className="col-span-3 h-full border border-grey  py-5 px-10 flex flex-col gap-20 overflow-y-scroll">
      <header className="flex justify-between items-center">
        <div className="h-full flex flex-col gap-20">
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full bg-gray-600"></div>
            <h3 className="font-bold">{name} Doe</h3>
            <ChevronDown />
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
                  <h3 className="font-bold">{name} Doe</h3>
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
                  <h3 className="font-bold">{name} Doe</h3>
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
                  <h3 className="font-bold">{name} Doe</h3>
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
                  <h3 className="font-bold">{name} Doe</h3>
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

export default Aside;
