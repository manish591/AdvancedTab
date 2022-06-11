import React, { useState } from 'react';

const TodoCheckbox = ({
  id,
  todoValue,
  myTodos,
  setMyTodos,
  setIsEditTodo,
  setEditedItemID,
  setCurrentTodo,
  currentList,
}) => {
  const [showTodoActions, setShowTodoActions] = useState(false);

  const isInDatabase = (id, arr) => {
    return arr.some((item) => item.id === id);
  };

  const handleUpdateTodoDoneStatus = () => {
    if (isInDatabase(id, myTodos.done)) {
      const newTodoArr = myTodos.done.filter((item) => item.id !== id);
      setMyTodos({ ...myTodos, done: newTodoArr });
    } else {
      setMyTodos({ ...myTodos, done: [...myTodos.done, { todoValue, id }] });
    }
  };

  const handleDeleteTodo = (id) => {
    const newTodayArr = myTodos.today.filter((item) => item.id !== id);
    const newDoneArr = myTodos.done.filter((item) => item.id !== id);
    setMyTodos({
      ...myTodos,
      today: isInDatabase(id, myTodos.today) ? newTodayArr : myTodos.today,
      done: isInDatabase(id, myTodos.done) ? newDoneArr : myTodos.done,
    });
  };

  return (
    <div className="flex items-center">
      <section className="flex items-baseline gap-2 flex-1">
        <input
          type="checkbox"
          name="todos"
          className="self-center"
          id={id}
          checked={isInDatabase(id, myTodos.done)}
          onChange={handleUpdateTodoDoneStatus}
        />
        <label
          htmlFor={id}
          className={`max-w-[75%] inline-block mb-0.5 ${
            isInDatabase(id, myTodos.done) ? 'line-through opacity-60' : ''
          }`}
        >
          {todoValue}
        </label>
      </section>
      <section className="flex items-center ml-auto relative">
        <span
          className="material-icons-outlined text-lg cursor-pointer"
          onClick={() => {
            setShowTodoActions((sta) => !sta);
          }}
        >
          more_horiz
        </span>
        {showTodoActions && (
          <div className="absolute top-1/4 right-full bg-gray-200 py-1">
            <ul>
              <li
                className="px-2 pr-10 py-1"
                onClick={() => {
                  const itemToEdit = myTodos[currentList].find(
                    (item) => item.id === id,
                  );
                  setCurrentTodo(itemToEdit.todoValue);
                  setIsEditTodo(true);
                  setShowTodoActions(false);
                  setEditedItemID(id);
                }}
              >
                Edit
              </li>
              <li
                className="px-2 pr-10 py-1"
                onClick={() => handleDeleteTodo(id)}
              >
                Delete
              </li>
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export { TodoCheckbox };
