import React from "react";
import Home from "./pages/Home";
import Frisor from "./pages/Frisor";
import Bookings from "./pages/Bookings";
import Navbar from "./pages/Navbar";
import ProductItem from "./ProductItem"

import {BrowserRouter , Route} from "react-router-dom"

const Nav =()=>{
    
    return (
        <nav>
            
             <BrowserRouter>
              <div>
                  <Navbar/>
                 <Route path="/" exact component={Home}/>
                 <Route path="/frisor" exact component={Frisor}/>
                 <Route path="/bookings" exact component={Bookings}/>
                 
                 </div>
              </BrowserRouter>
        </nav>
    )
}

export default Nav;