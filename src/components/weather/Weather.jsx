import React from 'react';

const Weather = () => {
  return (
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
              <span class="material-icons-outlined text-base">wb_sunny</span>
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
  );
};

export { Weather };
