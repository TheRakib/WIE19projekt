import React from "react";
import ProductItem from "../ProductItem"
import BuyButton from "../BuyButton"
import Faker from "faker";
const Frisor =()=>{
    return(
        <div>
            <div style={{display:"flex"}}>
          <ProductItem  pics={Faker.image.imageUrl()}>
                <BuyButton price={"2000 sek"}/>
            </ProductItem>
          <ProductItem price="2000 sek"  pics={Faker.image.imageUrl()}>
                    <BuyButton price={"1500 sek"}/>
              </ProductItem>
          </div>
        </div>
    )
}

export default Frisor;