import { useState } from "react";

export default function TaskForm({ onSubmit }) {
  const [inputText, setInputText] = useState("");
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    onSubmit(inputText);
    setInputText("");
  };

  return (
    <>
      <form>
        <div className="d-flex flex-row w-25 m-3">
          <input
            className="form-control mx-1"
            type="text"
            placeholder="add task..."
            name="taskinput"
            id="taskinput"
            value={inputText}
            onInput={handleInputChange}
          />
          <button
            onClick={handleButtonClick}
            className="btn btn-primary"
            type="button">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

