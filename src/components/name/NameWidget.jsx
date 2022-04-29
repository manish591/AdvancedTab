import React, { useState } from 'react';

const NameWidget = () => {
  const [isEditingName, setIsEditingName] = useState(false);
  const [input, setInput] = useState(localStorage.getItem('name'));
  return (
    <div className="flex items-baseline gap-x-7 justify-center">
      <div className="flex items-baseline">
        <h2 className="text-[3.3rem] font-semibold mt-4 tracking-tight flex-1 whitespace-nowrap">
          Good Evening,
        </h2>
        <div>
          {isEditingName ? (
            <input
              type="text"
              className="outline-none bg-transparent text-[3.3rem] min-w-[1.5ch] max-w-[20rem] font-bold leading-tight px-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ width: `${input.length}ch` }}
              onKeyUp={(e) => {
                if (e.code === 'Enter') {
                  setIsEditingName(false);
                }
              }}
            />
          ) : (
            <span className="text-[3.3rem] font-bold">
              &nbsp;{input.slice(0, 7)}
            </span>
          )}
        </div>
      </div>
      <div className="relative">
        <span
          class="material-icons-outlined hover:backdrop-blur-3xl p-1 rounded-full cursor-pointer"
          onClick={() => {
            setIsEditingName((en) => !en);
          }}
        >
          more_horiz
        </span>
        {isEditingName && (
          <div className="absolute bg-white z-[10] text-black rounded-md">
            <section>
              <button className="px-3 py-2 whitespace-nowrap text-left w-full">
                Show Today's Mantra
              </button>
              <button className="px-3 py-2 whitespace-nowrap text-left w-full">
                Edit Name
              </button>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export { NameWidget };
