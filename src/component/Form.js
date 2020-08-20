import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import "./Formstyle.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
      country: "",
      phone: ""
    }
    this.sendEmail = this.sendEmail.bind(this);
    this.Inputhandler = this.Inputhandler.bind(this)
  }
  Inputhandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('gmail', 'my_template', e.target, 'user_746hXOpVDvk3zy239Magj')
      .then(function (response) {
        alert('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });
    this.setState({
      name: "",
      mobile: "",
      email: "",
      country: "",
      phone: ""
    })
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
       </div>
    )
  };
}
export default Form;