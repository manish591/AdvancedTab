import React from 'react';

const Weather = () => {
  return (
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
        <div className="absolute bg-white py-4 px-5 text-black w-[28rem] rounded-md top-full right-0">
          <div className="grid gap-4">
            <section className="flex items-center justify-between">
              <div>
                <div className="flex items-baseline gap-2">
                  <h1 className="text-xl">Delhi, India</h1>
                  <span className="material-icons-outlined text-sm opacity-60">
                    edit
                  </span>
                </div>
                <p className="text-base opacity-60">Clear</p>
              </div>
              <div>
                <span class="material-icons-outlined hover:bg-gray-200 p-1 rounded-full cursor-pointer">
                  more_horiz
                </span>
              </div>
            </section>
            <section className="flex items-center gap-5">
              <span class="material-icons-outlined text-4xl">thunderstorm</span>
              <h1 className="text-7xl">
                29<sup>o</sup>
              </h1>
            </section>
            <section className="border-b border-t border-gray-200 py-2 px-2 text-xs leading-none">
              <div className="flex items-center gap-8">
                <article className="flex flex-col gap-px items-center">
                  <p>THU</p>
                  <span class="material-icons-outlined text-base">
                    wb_sunny
                  </span>
                  <div>
                    <span>
                      43<sup>o</sup>
                    </span>
                    <span>
                      26<sup>o</sup>
                    </span>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </div>
      </section>
    </section>
  );
};

export { Weather };
