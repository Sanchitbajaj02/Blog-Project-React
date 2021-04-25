import React from "react";
// import { Link } from "react-router-dom";
import NavbarComponent from "./NavbarComponent";

const HeaderComponent = () => {
  return (
    <React.Fragment>
      {/* <nav className="navbar navbar-expand navbar-dark bg-color-black">
        <div className="container-fluid mx-4">
          <div className="row w-100">
            <div className="col-12 col-sm-6 temp-2">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active px-1">
                  <a className="nav-link" href="/#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="nav-item active px-1">
                  <a className="nav-link" href="/#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="nav-item active px-1">
                  <a className="nav-link" href="/#">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="nav-item active px-1">
                  <a className="nav-link" href="/#">
                    <i className="fas fa-phone-alt"></i>
                  </a>
                </li>
                <li className="nav-item active px-1">
                  <a className="nav-link" href="/#">
                    <i className="fas fa-map-marker-alt"></i>
                  </a>
                </li>
                <li className="nav-item active px-1">
                  <a className="nav-link" href="/#">
                    <i className="fab fa-youtube-square"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-sm-6">
              <ul className="navbar-nav top-right-btns">
                <li className="nav-item active px-1">
                  <a className="nav-link" href="/#">
                    <i className="fas fa-search"></i> Search
                  </a>
                </li>

                <li className="nav-item px-1">
                  <Link to="/signup" className="nav-link text-white">
                    Signup
                  </Link>
                </li>
                <li className="nav-item px-1">
                  <Link to="/login" className="nav-link text-white">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav> */}
      {/* FIXME: add a if else for switching from login or logout */}

      <div className="container text-center my-4">
        <p className="format-heading">
          Health <span className="red-col"> & </span> Fitness
        </p>
        <p className="small-heading">How To Live a Healthy and Fit Life?</p>
      </div>

      <NavbarComponent />
      <div className="container-fluid">
        <hr />
      </div>
    </React.Fragment>
  );
};

export default HeaderComponent;
