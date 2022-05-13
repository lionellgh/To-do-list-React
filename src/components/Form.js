import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div className="form-todo">
      <form>
        <input
          value={inputText}
          onChange={inputTextHandler}
          id="enter-todo"
          type="text"
        />
        <button onClick={submitTodoHandler} id="send" type="submit">
          Send
        </button>

        <div className="select">
          <select onChange={statusHandler} name="todos" id="select-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
