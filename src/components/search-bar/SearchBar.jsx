import React from 'react';

const SearchBar = () => {
  return (
    <section className="relative mt-8 w-[40rem] rounded-full">
      <div className="absolute inset-0 bg-neutral-50 z-[-1] rounded-full opacity-60"></div>
      <div className="absolute top-1/2 -left-16 -translate-y-2/4">
        <span className="material-icons-outlined hover:backdrop-blur-3xl p-2 rounded-full cursor-pointer">
          autorenew
        </span>
      </div>
      <form
        action="https://www.google.com/search"
        method="get"
        name="searchform"
      >
        <label htmlFor="search" className="sr-only">
          Search Web
        </label>
        <section className="flex items-center py-3 px-3 rounded-full backdrop-blur-[400px]">
          <span className="material-icons-outlined text-3xl">search</span>
          <input
            autoComplete="off"
            type="text"
            id="search"
            name="q"
            className="outline-none px-3 py-2 w-full bg-transparent placeholder:text-black"
            placeholder="Search Here..."
          />
        </section>
      </form>
    </section>
  );
};

export { SearchBar };
