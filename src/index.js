import React from 'react';
import ReactDOM from "react-dom";
import Faker from "faker";
import ProductItem from "./components/ProductItem";
import BuyButton from "./components/BuyButton";
import Nav from "./components/Nav"

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>{
  return (
    <div className="App">
        <Nav/>

         <div style={{display:"flex"}}>
          <ProductItem  pics={Faker.image.imageUrl()}>
                <BuyButton price={"2000 sek"}/>
            </ProductItem>
          <ProductItem price="2000 sek"  pics={Faker.image.imageUrl()}>
                    <BuyButton price={"1500 sek"}/>
              </ProductItem>
          </div>
    </div>
  );
}

ReactDOM.render(
  
    <App />,
  
  document.getElementById('root')
);


