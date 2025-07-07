function Home({ name }: { name: string }) {
  return (
    <>
      <style>
        {`
          .hide-scrollbar {
            scrollbar-width: none; /* Firefox */
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Edge */
          }
        `}
      </style>

      <h1 className="text-3xl font-bold py-5">
        Welcome back <span className="text-red-500">{name}</span>
      </h1>

      <section className="flex flex-col gap-2 pb-2">
        <h2 className="text-2xl font-bold">New & Trending</h2>

        <div className="flex items-center overflow-x-auto gap-4 py-2 hide-scrollbar">
          <div className="w-[500px] h-[200px] bg-grey rounded-2xl shrink-0"></div>
          <div className="w-[500px] h-[200px] bg-grey rounded-2xl shrink-0"></div>
          <div className="w-[500px] h-[200px] bg-grey rounded-2xl shrink-0"></div>
        </div>
      </section>

      <section className="flex flex-col gap-2 pb-2">
        <h2 className="text-2xl font-bold">Continue Watching</h2>

        <div className="flex items-center overflow-x-auto gap-4 py-2 hide-scrollbar">
          <div className="w-[500px] h-[200px] bg-grey rounded-2xl shrink-0"></div>
          <div className="w-[500px] h-[200px] bg-grey rounded-2xl shrink-0"></div>
          <div className="w-[500px] h-[200px] bg-grey rounded-2xl shrink-0"></div>
        </div>
      </section>

      <section className="flex flex-col gap-2 pb-2">
        <h2 className="text-2xl font-bold">My List</h2>

        <div className="flex items-center overflow-x-auto gap-4 py-2 hide-scrollbar">
          <div className="w-[500px] h-[200px] bg-grey rounded-2xl shrink-0"></div>
          <div className="w-[500px] h-[200px] bg-grey rounded-2xl shrink-0"></div>
          <div className="w-[500px] h-[200px] bg-grey rounded-2xl shrink-0"></div>
        </div>
      </section>
    </>
  );
}

export default Home;
