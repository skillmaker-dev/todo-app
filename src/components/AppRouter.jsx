import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar.component";
import TasksListPage from "../pages/TasksListPage";
import TaskFormPage from "../pages/TaskFormPage";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<TasksListPage />} />
        <Route path="/form" element={<TaskFormPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
