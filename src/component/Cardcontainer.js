import React, { Component } from 'react';
 import Card from './Card';
import Form from './Form';
import './CardContainerstyle.css';
 import Carditem from './Carditem';


class Cardcontainer extends Component {
  render() {
    return (
      <>
      <div className="Card_container">
        <Card/>
        <Form/>
        </div>
        <Carditem/>

      </>
    )
  }
}
export default Cardcontainer;