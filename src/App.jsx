import './App.css';
import { Weather } from './components';

function App() {
  return (
    <div className="px-5 py-4 h-screen select-none text-white	bg-cover	bg-no-repeat bg-[url('https://res.cloudinary.com/dcugqfvvg/image/upload/v1651130888/andrey-grinkevich-rIDE73mqi2s-unsplash_itinrq.jpg')]">
      <div className="h-full relative">
        <section className="absolute left-0 top-0">
          <section className="relative">
            <p className="font-semibold text-lg cursor-pointer">Links</p>
          </section>
        </section>
        <section className="absolute left-0 bottom-0 flex items-center gap-x-3.5">
          <span className="material-icons-outlined opacity-80 cursor-pointer">
            settings
          </span>
          <div className="cursor-pointer">
            <p className="text-sm">Moab, UT, United States</p>
            <small className="text-xs">Andrey Grinkevich / Unsplace</small>
          </div>
        </section>
        <section className="absolute right-0 bottom-0">
          <section className="relative">
            <p className="font-semibold text-lg cursor-pointer">Todo</p>
          </section>
        </section>
        <section className="absolute right-0 top-0 cursor-pointer flex gap-x-7">
          <div className="flex items-center flex-col justify-between">
            <div className="flex items-center flex-1">
              <span class="material-icons-outlined">add_circle_outline</span>
            </div>
            <p>Add</p>
          </div>
          <section className="relative">
            <div>
              <div className="flex gap-2.5 items-center ml-auto w-max">
                <span class="material-icons-outlined">thunderstorm</span>
                <h1 className="text-2xl font-bold">
                  34<sup className="text-sm">o</sup>
                </h1>
              </div>
              <p className="text-right">Delhi, India</p>
            </div>
            <Weather />
          </section>
        </section>
        <section className="absolute right-2/4 bottom-0 translate-x-2/4">
          <p className="text-xl">
            “Passion is energy. Feel the power that comes from focusing what
            excites you.”
          </p>
        </section>
        <section className="absolute left-1/2	top-2/4 -translate-x-2/4 -translate-y-1/3 text-center">
          <h1 className="text-[10rem] leading-none font-bold">11:57</h1>
          <div className="flex items-baseline gap-x-7 justify-center">
            <h2 className="text-[3.3rem] font-semibold mt-4 tracking-tight">
              Good Evening, Manish
            </h2>
            <span class="material-icons-outlined hover:backdrop-blur-3xl p-1 rounded-full cursor-pointer">
              more_horiz
            </span>
          </div>
          <section className="relative mt-8 w-[40rem] rounded-full shadow-[0_0_6px_0_rgba(0,0,0,0.3)]">
            <div className="absolute inset-0 bg-white z-[-1] rounded-full"></div>
            <div className="absolute top-1/2 -left-16 -translate-y-2/4">
              <span class="material-icons-outlined hover:backdrop-blur-3xl p-2 rounded-full cursor-pointer">
                autorenew
              </span>
            </div>
            <label htmlFor="search" className="sr-only">
              Search Web
            </label>
            <section className="flex items-center py-3 px-3 rounded-full backdrop-blur-[300px]">
              <span className="material-icons-outlined text-3xl">search</span>
              <input
                type="text"
                id="search"
                className="outline-none px-3 py-2 w-full bg-transparent placeholder:text-black"
                placeholder="Search Here..."
              />
            </section>
          </section>
        </section>
      </div>
    </div>
  );
}

export default App;
