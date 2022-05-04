import React, { useState } from 'react';

const MyFocus = () => {
  const [focusValue, setFocusValue] = useState('');

  const handleSetTodayFocus = (e) => {
    e.preventDefault();
    localStorage.setItem('focus', focusValue);
    setFocusValue('');
  };

  return (
    <section className="relative mt-4 w-max m-auto">
      <div className="absolute top-1/2 -left-16 -translate-y-2/4">
        <span className="material-icons-outlined hover:backdrop-blur-3xl p-2 rounded-full cursor-pointer">
          autorenew
        </span>
      </div>
      {localStorage.getItem('focus') ? (
        <section className="w-max">
          <h1 className="text-2xl font-bold">Today</h1>
          <div className="flex items-center justify-center gap-3">
            <p className="text-3xl font-bold">
              {localStorage.getItem('focus') || ''}
            </p>
            <span className="material-icons-outlined hover:backdrop-blur-3xl p-1 rounded-full cursor-pointer">
              more_horiz
            </span>
          </div>
        </section>
      ) : (
        <section className="w-max m-auto">
          <h1 className="text-3xl text-center font-bold">
            Hello, what is your main focus for today?
          </h1>
          <form className="w-full" onSubmit={handleSetTodayFocus}>
            <section>
              <input
                type="text"
                className="w-full mt-3 bg-transparent outline-none border-b-2 text-3xl text-center font-bold"
                value={focusValue}
                onChange={(e) => setFocusValue(e.target.value)}
                required
              />
            </section>
          </form>
        </section>
      )}
    </section>
  );
};

export { MyFocus };
