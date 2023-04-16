import React from "react";
import TaskList from "./components/TaskList.component";
import TaskForm from "./components/TaskForm.component";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["Task 1", "Task 2", "Task 3"],
    };
  }

  handleAddTask = (task) => {
    this.setState({
      tasks: [...this.state.tasks, task],
    });
  };

  handleDeleteTask = (index) => {
    this.setState({ tasks: this.state.tasks.filter((_, i) => i != index) });
  };

  render() {
    return (
      <>
        <TaskList
          onDelete={this.handleDeleteTask}
          taskList={this.state.tasks}
        />
        <TaskForm onSubmit={this.handleAddTask} />
      </>
    );
  }
}
