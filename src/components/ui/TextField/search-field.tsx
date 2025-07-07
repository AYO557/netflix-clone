import { Search } from "lucide-react";

function SearchField() {
  return (
    <div className="p-3 bg-grey w-full flex rounded-xl">
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-transparent outline-none"
      />
      <Search />
    </div>
  );
}

export default SearchField;
