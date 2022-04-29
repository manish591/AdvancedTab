import React from 'react';

const Todo = () => {
  return (
    <section className="absolute right-0 bottom-0">
      <section className="relative">
        <p className="font-semibold text-lg cursor-pointer">Todo</p>
        <div className="absolute bg-white py-4 px-4 text-black w-80 rounded-md bottom-full right-0">
          <div className="grid gap-3">
            <section className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <h1 className="text-2xl leading-tight">Today</h1>
                <span class="material-icons-round mt-1 opacity-60">
                  keyboard_arrow_down
                </span>
              </div>
              <div>
                <span class="material-icons-outlined hover:bg-gray-200 p-1 rounded-full cursor-pointer">
                  more_horiz
                </span>
              </div>
            </section>
            <form className="grid gap-1">
              <div className="flex items-center">
                <section className="flex items-baseline gap-2 flex-1">
                  <input type="checkbox" name="todos" id="todo1" />
                  <label htmlFor="todo1" className="max-w-[75%]">
                    This is my first todo dedicated to myself. I'll complete
                    neog.
                  </label>
                </section>
                <section className="flex items-center ml-auto">
                  <span class="material-icons-outlined text-lg cursor-pointer">
                    more_horiz
                  </span>
                </section>
              </div>
            </form>
            <form>
              <section className="flex items-center gap-2">
                <label htmlFor="new-todo" className="sr-only">
                  Add New Todo
                </label>
                <input
                  type="text"
                  className="w-full py-2 text-base outline-0"
                  placeholder="Add New Todo"
                />
              </section>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export { Todo };
