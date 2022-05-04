import React, { useState } from 'react';
import { TimeWidget } from '../time/TimeWidget';
import { NameWidget } from '../name/NameWidget';
import { SearchBar } from '../search-bar/SearchBar';
import { MyFocus } from '../my-focus/MyFocus';

const Main = () => {
  const [showMyFocus, setShowMyFocus] = useState(true);
  return (
    <section className="absolute left-1/2	top-2/4 -translate-x-2/4 -translate-y-1/3 text-center">
      <TimeWidget />
      <NameWidget />
      {showMyFocus ? <MyFocus /> : <SearchBar />}
    </section>
  );
};

export { Main };
