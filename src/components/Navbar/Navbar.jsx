import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
const Navbar = (props) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setSearch(value);
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Hell Awaits
        </Link>
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
              <a className="nav-link-active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="category/:id">
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link-active" to="/category/woman">
                Women's clothing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link-active" to="/category/men">
                Men's clothing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link-active" to="/category/jewerly">
                Jewerly
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link-active" to="/cart">
                Carrito
              </Link>
            </li>
            <li>
              <CartWidget />
            </li>
          </ul>
          <div>
            <form onSubmit={handleSubmit}>
              <input type="text" onChange={handleChange} />
              <button type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
