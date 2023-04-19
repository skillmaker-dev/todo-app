import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar.component";
import TasksListPage from "../pages/TasksListPage";
import TaskFormPage from "../pages/TaskFormPage";
import NamesListPage from "../pages/NamesListPage";
import NameFormPage from "../pages/NameFormPage";

const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<TasksListPage />} />
        <Route path="/form" element={<TaskFormPage />} />
        <Route path="/names" element={<NamesListPage />} />
        <Route path="/namesform" element={<NameFormPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
