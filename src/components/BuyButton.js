import React, {Component} from "react";
import BookingForm from "./BookingForm"

class BuyButton extends Component{

constructor(props){
    super(props)

    this.state = {
        openModal:false, 
        price: props.price
    }
}
openModalEvent(){
    this.setState( {openModal:!this.state.openModal})
}
closeModalEvent=()=> this.setState( {openModal:false});

    render(){
 return (
        <div>
            <BookingForm openModal={this.state.openModal} closeModal={this.closeModalEvent}/>
              <button  className="btn btn-primary" onClick={this.openModalEvent.bind(this)}>Boka</button>
              <span style={{marginLeft:"20px"}}> {this.state.price} </span>
        </div> 
        )
    }
   
         
   
}

export default BuyButton;


