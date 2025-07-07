import useUser from "../../../hooks/useUser";
import NavMenu from "../../../components/composites/nav-menu";
import Aside from "../../../components/composites/aside";
import Home from "./home";

export default function HomePage() {
  const { getUser } = useUser();
  const { name } = getUser();

  return (
    <div className="h-screen bg-black text-white  grid grid-cols-11">
      <nav className="col-span-2 h-full border border-grey">
        <NavMenu />
      </nav>

      <main className="col-span-6 h-full border border-gray-600 flex flex-col gap-5 p-10  overflow-y-auto">
        <Home name={name} />
      </main>

      <Aside name={name} />
    </div>
  );
}
