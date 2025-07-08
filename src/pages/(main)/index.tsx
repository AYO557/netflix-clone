import { Outlet } from "react-router";
import Aside from "../../components/composites/aside";
import NavMenu from "../../components/composites/nav-menu";
import useUser from "../../hooks/useUser";

export default function MainLayout() {
  const { getUser } = useUser();
  const user = getUser();

  const name = user?.name;

  return (
    <div className="h-screen bg-black text-white  grid grid-cols-11">
      <nav className="col-span-2 h-full border border-grey">
        <NavMenu />
      </nav>

      <main className="col-span-6 h-full border border-gray-600 flex flex-col gap-5 p-10  overflow-y-auto">
        <Outlet />
      </main>

      <Aside name={name} />
    </div>
  );
}
