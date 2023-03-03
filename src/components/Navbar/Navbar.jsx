import React, { useState } from 'react'
import { Link, } from 'react-router-dom'
const Navbar = (props) => {
 const [value, setValue] = useState("")

 const handleSubmit =(event) =>{
    event.preventDefault();
    props.setSearch(value)
 }
 const handleChange = (event) => {
    setValue(event.target.value)
 }
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>Hell Awaits</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link-active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='category/:id'>Categoria-A</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link-active" to="/category/:categoryId">"ItemCategory"</Link>
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link-active" to='/item/:id'>"ItemDetail"</Link>
                            </li>
                            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
                        </ul>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <input type="text" onChange={handleChange}/>
                                <button type='submit'>Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar