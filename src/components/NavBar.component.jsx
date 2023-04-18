import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary mb-5"
      style={{ backgroundColor: "#e3f2fd" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Tasks Manager
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to={"/"}>
              List
            </Link>
            <Link className="nav-link" to={"/form"}>
              Add
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
