import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    const value = e.target.value;

    if (value === "1") navigate("/product-registration");
    else if (value === "2") navigate("/employee");
    else if (value === "3") navigate("/manufacturer-registration");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Myntra
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">
              Home
              </a> */}
              <span className="nav-link">
                <Link to="/">Home</Link>
              </span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                <Link to="/men">Men</Link>
              </span>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">
                Women
              </a> */}
              <span className="nav-link">
                <Link to="/women">Women</Link>
              </span>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">
                Kids
              </a> */}
              <span className="nav-link">
                <Link to="/kids">Kids</Link>
              </span>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">
                Beauty
              </a> */}
              <span className="nav-link">
                <Link to="/beauty">Beauty</Link>
              </span>
            </li>

            <select className="border-0" onChange={handleChange}>
              <option value="" disabled selected>
                Add
              </option>
              <option value="1">Product</option>
              <option value="2">Employee</option>
              <option value="3">Manufacturer</option>
            </select>
          </ul>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Wishlist
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Bag
                </a>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  <Link to="/user-sign-up">SignUp</Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  <Link to="/user-log-in">Log In</Link>
                </span>
              </li>
            </ul>
            {/* <i className="fa-light fa-user"></i>
            <span>Wishlist</span>
            <span>Bag</span> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
