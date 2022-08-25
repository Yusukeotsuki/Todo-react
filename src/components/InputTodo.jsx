import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input placeholder="write todo" value={todoText} onChange={onChange} />
      <button onClick={onClick}>add</button>
    </div>
  );
};
