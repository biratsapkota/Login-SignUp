import React, { Component } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      active_tab_id: 1,
    }
  }

  activateTab = (id) =>{
    this.setState({
      active_tab_id: id,
    })
  }
  render() {
    let { active_tab_id } = this.state;
    let display = "";
    if (active_tab_id === 1) {
      display = (<Login activateTab = {this.activateTab}/>)
    } else if (active_tab_id === 2) {
      display = (<Signup />)
    }

    return (
      <div className="App">
        <Header />
        <div className="hero-part">
          <div className="hero-title">Welcome to our app</div>
          <div className="login_signup">
            {display}
          </div>          
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
