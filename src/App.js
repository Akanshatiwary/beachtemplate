import React, { Component } from 'react';
import Cardcontainer from './component/Cardcontainer';
import './Appstyle.css';
import Header from './component/header/Header';
import Footer from './component/Footer';

class App extends Component {
  render(){ 
    return(
      <div className="App">
        <Header/>
        <Cardcontainer/>
        <Footer/>      
       </div>   
    )           
  }
}

export default App;