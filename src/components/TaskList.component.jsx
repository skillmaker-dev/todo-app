import React from "react";
export default class TaskList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {this.props.taskList.map((task, index) => (
          <div
            className="d-flex flex-row w-25 m-3 align-items-center justify-content-between"
            key={task + index}>
            <h4 className="my-0">{task}</h4>
            <button
              className="btn btn-danger"
              onClick={() => this.props.onDelete(index)}>
              X
            </button>
          </div>
        ))}
      </>
    );
  }
}
