import React from 'react';
import { TimeWidget, NameWidget, SearchBar, Links } from '../../components';

const LandingPage = () => {
  return (
    <div className="h-full relative">
      <Links />
      <section className="absolute left-0 bottom-0 flex items-center gap-x-3.5">
        <span className="material-icons-outlined opacity-80 cursor-pointer">
          settings
        </span>
        <div className="cursor-pointer">
          <p className="text-sm">Moab, UT, United States</p>
          <small className="text-xs">Andrey Grinkevich / Unsplace</small>
        </div>
      </section>
      <section className="absolute right-0 bottom-0">
        <section className="relative">
          <p className="font-semibold text-lg cursor-pointer">Todo</p>
        </section>
      </section>
      <section className="absolute right-0 top-0 cursor-pointer flex gap-x-7">
        <div className="flex items-center flex-col justify-between">
          <div className="flex items-center flex-1">
            <span className="material-icons-outlined">add_circle_outline</span>
          </div>
          <p>Add</p>
        </div>
        <section className="relative">
          <div>
            <div className="flex gap-2.5 items-center ml-auto w-max">
              <span className="material-icons-outlined">thunderstorm</span>
              <h1 className="text-2xl font-bold">
                34<sup className="text-sm">o</sup>
              </h1>
            </div>
            <p className="text-right">Delhi, India</p>
          </div>
        </section>
      </section>
      <section className="absolute right-2/4 bottom-0 translate-x-2/4">
        <p className="text-xl">
          “Passion is energy. Feel the power that comes from focusing what
          excites you.”
        </p>
      </section>
      <section className="absolute left-1/2	top-2/4 -translate-x-2/4 -translate-y-1/3 text-center">
        <TimeWidget />
        <NameWidget />
        <SearchBar />
      </section>
    </div>
  );
};

export { LandingPage };
