import Netflix from "../../components/ui/netflix";
import netflix_bg from "../../assets/images/netflix_background.jpg";
import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <main
      style={{ backgroundImage: `url(${netflix_bg})` }}
      className={`text-white h-screen flex justify-center items-center bg-center bg-cover`}
    >
      <div className="w-[500px] bg-[rgba(42,40,40,0.9)] rounded-2xl p-4 pb-10 border-2 border-red-50">
        <div role="logo" className="h-[100px] w-[250px] mx-auto">
          <Netflix />
        </div>

        <Outlet />
      </div>
    </main>
  );
}

export default AuthLayout;
