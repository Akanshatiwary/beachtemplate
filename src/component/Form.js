import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import "./Formstyle.css";
import firebaseConfigObject from '../firebase';
import Modal from 'react-bootstrap/Modal';
import './Modalstyle.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
      country: "",
      phone: "",
      open: false

    }
    this.sendEmail = this.sendEmail.bind(this);
    this.Inputhandler = this.Inputhandler.bind(this);
    this.handleClose = this.handleClose.bind(this)

  }
  handleClose() {
    this.setState({
      open: false
    })
  }
  validation() {
    let { name, mobile, phone, email, country } = this.state;
    if (mobile !== phone) {
      console.log(mobile, phone);
      return false;
    }
    if (isNaN(mobile) && isNaN(phone)) {
      return false;
    }
    if (name !== "" && phone !== "" && email !== "" && mobile !== "" && country !== "") {
      return true;
    }
    else {
      console.log(name, mobile, phone, email, country);
      return false;
    }
  }

  Inputhandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  sendEmail(e) {
    e.preventDefault();
    let isValidated = this.validation();
    console.log(isValidated);
    if (isValidated) {
      emailjs.sendForm('gmail', 'my_template', e.target, 'user_746hXOpVDvk3zy239Magj')
        .then((result) => {
          console.log("THANKYOU");
        }, (error) => {
          console.log(error.text);
        });
      firebaseConfigObject.database().ref('users/' + this.state.phone).set({
        name: this.state.name,
        mobile: this.state.mobile,
        email: this.state.email,
        country: this.state.country,
        phone: this.state.phone
      })
      this.setState({
        name: "",
        mobile: "",
        email: "",
        country: "",
        phone: "",
        open: true
      })
    }
    else {
      alert("error")
    }

  }

  render() {
    return (
      <div className="container">
        <form className="form_wrap" onSubmit={this.sendEmail}>
          <h1>Enquire Now</h1>
          <div className="input_field">
            <label>Name *</label>
            <input type="text"
              className="btn"
              name="name"
              value={this.state.name}
              onChange={this.Inputhandler} />
          </div>
          <div className="input_field">
            <label>Email *</label>
            <input type="email"
              className="btn"
              name="email"
              value={this.state.email}
              onChange={this.Inputhandler} />
          </div>
          <div className="input_field">
            <label>Mobile *</label>
            <input type="text"
              className="btn"
              name="mobile"
              value={this.state.mobile}
              onChange={this.Inputhandler} />
          </div>
          <div className="input_field">
            <label>Country *</label>
            <input type="text"
              className="btn"
              name="country"
              value={this.state.country}
              onChange={this.Inputhandler} />
          </div>
          <div className="input_field">
            <label className="validatebtn" >Validation of mobile number on the form *</label>
            <input type="text"
              className="btn"
              name="phone"
              value={this.state.phone}
              onChange={this.Inputhandler} />
          </div>
          <div className="input_field">
            <p>
              We'll get back to you  asap.<br></br>
              * Required  fields</p>
          </div>
          <div className="input_field">
            <input type="submit" value="Submit" className="submit_btn" />
          </div>
        </form>
        <Modal className="modal popup" show={this.state.open} onHide={this.handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <p>
              THANKYOU
            </p>
          </Modal.Body>
        </Modal>
      </div>
    )
  };
}
export default Form;