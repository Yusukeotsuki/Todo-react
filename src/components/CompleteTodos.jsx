import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;

  return (
    <div className="complete-area">
      <p className="title">完了のtodo</p>
      <div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>back</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
