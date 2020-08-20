import React, { Component } from 'react';
import sea from '../images/sea.jpg';
// import beaches from '../images/beaches.jpg';
import Modal from 'react-bootstrap/Modal';
import './Modalstyle.css';
import './Carditemstyle.css';
class Carditem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

  }
  handleShow() {
    this.setState({
      show: true
    })
  }
  handleClose() {
    this.setState({
      show: false
    })
  }
  render() {
    return (
      <div className="card_outer">
        {/* <div className="card_inner" > */}
          <div className="list cardinner" >
            <img src={sea} onClick={this.handleShow} alt="placeholder" className="image" />
            <div className="overlay">
              <div className="hide">
                <h5>Total Body Rebalancing!</h5>
                <button className="hoverbtn" onClick={this.handleShow}>click here</button>
              </div>
            {/* </div> */}
          </div>
        </div>
        {/* <div className="cardchild" > */}
          <div className="list cardinner" >
            <img src={sea} onClick={this.handleShow} alt="placeholder" className="image" />
            <div className="overlay">
              <div className="hide">
                <h5>Total Body Rebalancing!</h5>
                <button className="hoverbtn" onClick={this.handleShow}>click here</button>
              </div>
            </div>
          </div>
        {/* </div> */}
       {/* <div className="cardchild" > */}
       <div className="list cardinner" >
         <img src={sea} onClick={this.handleShow} alt="placeholder" className="image" />
         <div className="overlay">
           <div className="hide">
             <h5>Total Body Rebalancing!</h5>
             <button className="hoverbtn" onClick={this.handleShow}>click here</button>
           </div>
         </div>
       {/* </div> */}
     </div>
        {/* <div className="cardchild ignore" > */}
        <div className="list cardinner" >
          <img src={sea} onClick={this.handleShow} alt="placeholder" className="image" />
          <div className="overlay">
            <div className="hide">
              <h5>Total Body Rebalancing!</h5>
              <button className="hoverbtn" onClick={this.handleShow}>click here</button>
            </div>
          </div>
        </div>
      {/* </div> */}
        <Modal className="modal" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <div className="modal_container">
              <div className="modal_item">
                <img src="https://via.placeholder.com/189x127" alt="omage" />
              </div>
              <div className="modal_item">
                <h4>Total Body Rebalancing!</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur.
                  </p>
              </div>
            </div>
          </Modal.Body>

        </Modal>
      </div>
    )
  }
}
export default Carditem;
