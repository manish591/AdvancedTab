import React, { useEffect, useState } from 'react';
import { LandingPage, Onboarding } from './pages';

const App = () => {
  const [isUserLogedIn, setIsUserLogedIn] = useState(false);

  useEffect(() => {
    const userLoginStatus = JSON.parse(localStorage.getItem('login'));
    setIsUserLogedIn(userLoginStatus);
  }, [isUserLogedIn]);

  return (
    <div className="px-5 py-4 h-screen select-none text-white	bg-cover bg-no-repeat bg-[url('https://res.cloudinary.com/dcugqfvvg/image/upload/v1651212468/16783837234_8ecdae4f2f_k_ubmcov.jpg')]">
      {isUserLogedIn ? (
        <LandingPage />
      ) : (
        <Onboarding setIsUserLogedIn={setIsUserLogedIn} />
      )}
    </div>
  );
};

export default App;
