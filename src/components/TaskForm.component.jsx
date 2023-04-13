import React from "react";
export default class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
    };
  }
  handleInputChange = (event) => {
    this.setState({ inputText: event.target.value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.props.onSubmit}>
          <div className="d-flex flex-row w-25 m-3">
            <input
              className="form-control mx-1"
              type="text"
              placeholder="add task..."
              name="taskinput"
              id="taskinput"
              value={this.state.inputText}
              onInput={this.handleInputChange}
            />
            <button className="btn btn-primary" type="submit">
              Add
            </button>
          </div>
        </form>
      </>
    );
  }
}
