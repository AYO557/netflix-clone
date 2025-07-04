import Netflix from "../../../components/ui/netflix";
import useUser from "../../../hooks/useUser";

export default function HomePage() {
  const { getUser } = useUser();
  const { name } = getUser();

  return (
    <main className="h-screen bg-black text-2xl text-white justify-center items-center flex">
      <div className="flex flex-col gap-5">
        <Netflix />

        <h1 className="text-9xl font-bold text-center">Welcome back {name}</h1>
      </div>
    </main>
  );
}
