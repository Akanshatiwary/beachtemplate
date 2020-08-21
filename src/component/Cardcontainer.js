import React, { Component } from 'react';
 import Card from './Card';
import Form from './Form';
import './CardContainerstyle.css';
 import Carditem from './Carditem';



class Cardcontainer extends Component {

  render() {
    return (
      <main>
      <div className="wrapper">
        <div className="cards">
          <Card />
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
      <Carditem/>
    </main>
    )
  }
}
export default Cardcontainer;