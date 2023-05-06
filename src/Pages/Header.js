import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Components/Home';
import About from '../Components/About';
import Tours from '../Components/Tours';
import Packages from '../Components/Category';
import Category from '../Components/Category';


function Header() {
  return (
    <>
  <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#"><img  src='https://gotravel.qodeinteractive.com/wp-content/uploads/2016/04/logo.png'></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About/">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Tours/">Tours</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Destination</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Hotels</a>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Packages
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Category/business/">Sikkim</Link></li>
            <li><Link className="dropdown-item" to="/Category/entertainment/">Pokhara </Link></li>
            <li><Link className="dropdown-item" to="/Category/ general/">Kathmandu </Link></li>
            <li><Link className="dropdown-item" to="/Category/health/"> Dolpa  </Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Confirmation</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact Us</a>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>


<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About/" element={<About />} />
        
        <Route path="/Tours/" element={<Tours />} />
        
        <Route path="/Category/:id" element={<Category />} />

       
      </Routes>

    </>
  )
}

export default Header