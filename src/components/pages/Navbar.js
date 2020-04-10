import React from "react";

import {Link} from  "react-router-dom";


const Navbar =()=>{
    return (
    <ul class="nav nav-tabs bg-light">
  <li class="nav-item">
    <Link class="nav-link active" to="/">Home </Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/frisor">Frisör </Link>
  </li>
  <li class="nav-item">
   <Link class="nav-link" to="/bookings">Bookings </Link>
  </li>

</ul>
    )
}

export default Navbar;