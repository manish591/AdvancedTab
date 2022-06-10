import React from 'react';

const Links = () => {
  return (
    <div className="absolute bg-white py-4 px-3 text-black w-60 rounded-md top-full left-0">
      <ul className="grid gap-1">
        <li>
          <section className="flex items-center gap-2">
            <span class="material-icons-outlined text-xl">tab</span>
            <a
              href="chrome-search://local-ntp/local-ntp.html"
              className="text-sm"
            >
              Chrome Tab
            </a>
          </section>
        </li>
        <li>
          <section className="flex items-center gap-2">
            <span class="material-icons-outlined text-xl">apps</span>
            <a
              href="chrome-search://local-ntp/local-ntp.html"
              className="text-sm"
            >
              Apps
            </a>
          </section>
        </li>
        <li>
          <section className="flex items-center gap-2">
            <span class="material-icons-round text-xl -rotate-90">
              expand_circle_down
            </span>
            <button className="text-sm">Novee Website</button>
          </section>
        </li>
        <li className="opacity-60">
          <section className="flex items-center gap-2">
            <span class="material-icons-outlined text-xl">add</span>
            <button className="text-sm">New Link</button>
          </section>
        </li>
      </ul>
    </div>
  );
};

export { Links };
