import React from 'react';

const Settings = () => {
  return (
    <section className="absolute left-0 bottom-0 flex items-center gap-x-3.5">
      <span className="material-icons-outlined opacity-80 cursor-pointer">
        settings
      </span>
      <div className="cursor-pointer">
        <p className="text-sm">Moab, UT, United States</p>
        <small className="text-xs">Andrey Grinkevich / Unsplace</small>
      </div>
    </section>
  );
};

export { Settings };
