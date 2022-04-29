import React from 'react';
import { TimeWidget } from '../time/TimeWidget';
import { NameWidget } from '../name/NameWidget';
import { SearchBar } from '../search-bar/SearchBar';

const Main = () => {
  return (
    <section className="absolute left-1/2	top-2/4 -translate-x-2/4 -translate-y-1/3 text-center">
      <TimeWidget />
      <NameWidget />
      <SearchBar />
    </section>
  );
};

export { Main };
