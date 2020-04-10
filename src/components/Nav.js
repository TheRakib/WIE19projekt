import React from "react";
import Home from "./pages/Home";
import Frisor from "./pages/Frisor";
import Bookings from "./pages/Bookings";
import Navbar from "./pages/Navbar";

import {BrowserRouter , Route} from "react-router-dom"

const Nav =()=>{
    
    return (
        <nav>
            
             <BrowserRouter>
              <div>
                  <Navbar/>
                 <Route path="/" exact component={Home}/>
                 <Route path="/frisor" component={Frisor}/>
                 <Route path="/bookings" component={Bookings}/>
                 </div>
              </BrowserRouter>
        </nav>
    )
}

export default Nav;