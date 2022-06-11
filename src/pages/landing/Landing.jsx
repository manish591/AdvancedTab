import React from 'react';
import { Links, Todo, Settings, Weather, Quote, Main } from '../../components';

const LandingPage = () => {
  return (
    <div className="h-full relative">
      <Links />
      <Settings />
      <Todo />
      <Weather />
      <Quote />
      <Main />
    </div>
  );
};

export { LandingPage };
