import React, { Component } from "react";
import Cardlist from './Cardlist';
import './CardContainerstyle.css';

class Card extends Component {
  
  render() {
    return (
      <div className="Card">
        <div className="children">
        <Cardlist/>
        <Cardlist/>
        <Cardlist/>
        </div> 
        <div className="children">
        <Cardlist/>
        <Cardlist/>
        <Cardlist/>
        </div>
      </div>
    )

  }
}
export default Card;
