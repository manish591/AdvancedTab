import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { TodoCheckbox } from './sub-comp/Checkbox';

const Todo = () => {
  const [isTodoBoxOpen, setIsTodoBoxOpen] = useState(false);
  const [myTodos, setMyTodos] = useState({
    today: [],
    done: [],
  });
  const [currentTodo, setCurrentTodo] = useState('');
  const [currentList, setCurrentList] = useState('today');
  const [showDropdown, setShowDropdown] = useState(false);
  const [isEditTodo, setIsEditTodo] = useState(false);
  const [editedItemID, setEditedItemID] = useState('');

  const handleAddNewTodo = () => {
    const newTodo = { todoValue: currentTodo, id: uuid() };
    if (currentList === 'today') {
      setMyTodos({ ...myTodos, today: [...myTodos.today, newTodo] });
    } else {
      setMyTodos({ ...myTodos, done: [...myTodos.done, newTodo] });
    }
    setCurrentTodo('');
  };

  const handleEditNote = () => {
    const editedArr = myTodos[currentList].map((item) =>
      item.id === editedItemID ? { ...item, todoValue: currentTodo } : item,
    );
    setMyTodos({ ...myTodos, [currentList]: editedArr });
    setCurrentTodo('');
    setIsEditTodo(false);
  };

  const handleUpdateTodoValue = (e) => {
    e.preventDefault();
    if (isEditTodo) {
      handleEditNote();
    } else {
      handleAddNewTodo();
    }
  };

  return (
    <section className="absolute right-0 bottom-0">
      <section className="relative">
        <p
          className="font-semibold text-lg cursor-pointer"
          onClick={() => {
            setIsTodoBoxOpen((tbo) => !tbo);
          }}
        >
          Todo
        </p>
        {isTodoBoxOpen && (
          <div className="absolute bg-white py-4 px-4 text-black w-80 rounded-md bottom-full right-0">
            <div className="grid gap-3">
              <section className="flex items-center justify-between relative">
                <div
                  className="flex items-center gap-1"
                  onClick={() => {
                    setShowDropdown((sd) => !sd);
                  }}
                >
                  <h1 className="text-2xl leading-tight capitalize">
                    {currentList}
                  </h1>
                  <span className="material-icons-round mt-1 opacity-60">
                    keyboard_arrow_down
                  </span>
                </div>
                <div>
                  <span className="material-icons-outlined hover:bg-gray-200 p-1 rounded-full cursor-pointer">
                    more_horiz
                  </span>
                </div>
                {showDropdown && (
                  <div className="absolute top-full left-0 bg-gray-200 py-2 w-max z-[10]">
                    <ul>
                      <li
                        className="px-4 pr-20 py-1"
                        onClick={() => {
                          setCurrentList('today');
                          setShowDropdown(false);
                        }}
                      >
                        Today
                      </li>
                      <li
                        className="px-4 pr-20 py-1"
                        onClick={() => {
                          setCurrentList('done');
                          setShowDropdown(false);
                        }}
                      >
                        Done
                      </li>
                    </ul>
                  </div>
                )}
              </section>
              {myTodos[currentList].length > 0 ? (
                <>
                  <form className="grid gap-1">
                    {myTodos[currentList] &&
                      myTodos[currentList].map((item) => {
                        return (
                          <TodoCheckbox
                            key={item.id}
                            {...item}
                            myTodos={myTodos}
                            setMyTodos={setMyTodos}
                            setIsEditTodo={setIsEditTodo}
                            setEditedItemID={setEditedItemID}
                            setCurrentTodo={setCurrentTodo}
                            currentList={currentList}
                          />
                        );
                      })}
                  </form>
                </>
              ) : (
                <div className="py-14 flex justify-center align-center">
                  <h1 className="text-base opacity-80">No Todos Yet</h1>
                </div>
              )}
              <form onSubmit={handleUpdateTodoValue}>
                <section className="flex items-center gap-2">
                  <label htmlFor="new-todo" className="sr-only">
                    Add New Todo
                  </label>
                  <input
                    type="text"
                    className="w-full py-2 text-base outline-0"
                    placeholder="Add New Todo"
                    value={currentTodo}
                    onChange={(e) => {
                      setCurrentTodo(e.target.value);
                    }}
                    required
                  />
                </section>
              </form>
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export { Todo };
