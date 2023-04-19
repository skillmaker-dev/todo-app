import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostNameAction } from "../redux/actions";

export default function NameForm() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const { namesList } = useSelector((state) => state);

  const handleButtonClick = () => {
    dispatch(PostNameAction(inputText));
    setInputText("");
  };

  return (
    <>
      <form>
        <div className="d-flex flex-row w-25 m-3">
          <input
            className="form-control mx-1"
            type="text"
            placeholder="add name..."
            name="taskinput"
            id="taskinput"
            value={inputText}
            onInput={handleInputChange}
          />
          <button
            onClick={handleButtonClick}
            className="btn btn-primary"
            type="button"
            disabled={namesList.loading}>
            Add
          </button>
        </div>
      </form>
    </>
  );
}
