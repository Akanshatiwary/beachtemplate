import React, { Component } from 'react';
import Cardcontainer from './component/Cardcontainer';
import './Appstyle.css';
// import Carditem from './component/Carditem';
import Footer from './component/Footer';

class App extends Component {
  render(){ 
    return(
      <div className="App">
        <h1>
          <img src="https://via.placeholder.com/96x48" alt="logo"/>
        </h1>
        <Cardcontainer/>
        {/* <Carditem/> */}

        <Footer/>      
       </div>   

    )    
       
  }
}

export default App;