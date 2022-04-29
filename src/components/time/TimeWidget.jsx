import React, { useState, useEffect } from 'react';

const TimeWidget = () => {
  const [hours, setHours] = useState(2);
  const [minutes, setMinutes] = useState(9);

  useEffect(() => {
    let timerId = setInterval(() => {
      const newDate = new Date();
      setMinutes(newDate.getMinutes());
      setHours(newDate.getHours());
    }, 1000);

    return () => clearInterval(timerId);
  }, [hours, minutes]);

  return (
    <div>
      <h1 className="text-[10rem] leading-none font-bold">
        {hours < 10 ? `0${hours}` : hours}:
        {minutes < 10 ? `0${minutes}` : minutes}
      </h1>
    </div>
  );
};

export { TimeWidget };
