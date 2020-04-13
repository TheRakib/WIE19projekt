import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Faker from "faker";
import ProductItem from "./components/ProductItem";
import BuyButton from "./components/BuyButton";
import Nav from "./components/Nav"

import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component{
    constructor(props){
        super(props)

        this.state={
            location: ""
        }
        //anropas varje gång skapas en kopia av klassen 
        //sätter default värde 
        //i react sammanhang den ärvar props från parent 
        window.navigator.geolocation.getCurrentPosition((pos)=>{
            this.setState({location:pos.coords.latitude})

        })
    }
    render() {
        return (
        <div>
         <Nav/>
      <div> User location:{this.state.location} </div>
      </div>
        ) 

    }
        
    
  
}

ReactDOM.render(
  
    <App />,
  
  document.getElementById('root')
);


