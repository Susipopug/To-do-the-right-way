import "./TaskInput.css";

export const TaskInput = ({ onChange, onAdd, value }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onAdd();
    }
  };
  return (
    <div className="container">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="task-input"
        type="text"
        placeholder="Add a task"
      />
      <button onClick={() => onAdd()} className="task-input__button">
        Add
      </button>
    </div>
  );
};
