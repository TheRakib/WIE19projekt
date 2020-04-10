import React from "react";

const BuyButton =(props)=>{
    return (
        <div>
              <a href="#" className="btn btn-primary">Boka</a>
              <span style={{marginLeft:"20px"}}> {props.price} </span>
        </div>
         
    )
}

export default BuyButton;


