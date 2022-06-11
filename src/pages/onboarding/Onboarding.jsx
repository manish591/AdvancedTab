import React, { useState } from 'react';

const Onboarding = ({ setIsUserLogedIn }) => {
  const [userName, setUserName] = useState('');

  const handleUserLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('login', true);
    localStorage.setItem('name', userName);
    setIsUserLogedIn(true);
  };

  return (
    <div className="h-full relative">
      <section className="absolute left-2/4 top-0 bg-white p-3 rounded-full w-20 h-20 -translate-x-2/4 text-black flex items-center justify-center">
        <h1 className="text-4xl mix-blend-multiply">at</h1>
      </section>
      <section className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-max">
        <h1 className="text-6xl">Hello, What Is Your Name?</h1>
        <form onSubmit={handleUserLogin}>
          <section>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              className="w-full mt-6 bg-transparent outline-none border-b-2 text-6xl text-center font-bold"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </section>
          <section className="mx-auto text-center mt-10">
            <button className="py-3 px-8 rounded-full border">Continue</button>
          </section>
        </form>
      </section>
    </div>
  );
};

export { Onboarding };
