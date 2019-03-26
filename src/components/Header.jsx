import React from 'react';
import './Header.css';

class Header extends React.Component{
  constructor(){
    super()
    this.state ={
      showDrawer: 'none',
    }
  }

  showDrawer = () =>{
    this.setState({
      showDrawer:'block',
    })
  }

  hideDrawer = () => {
    this.setState({
      showDrawer:'none',
    })
  }

  render(){
    return (
      <div className = "header_wrapper">
          <img src="https://res.cloudinary.com/dpy0mkwsp/image/upload/v1547354763/CHMimage/saas.svg" alt="web logo" height="100px" width="100px"/>
          <div className="title">Login-SignUp Validation</div>
          <div className="drawer_bar" onClick={this.showDrawer}>
            <i class="fas fa-bars"></i>
          </div>
          <div className="drawer" style={{display: this.state.showDrawer }}>
            <div className="drawer_item">My Account</div>
            <div className="drawer_item">Order My Dish</div>
            <div className="drawer_item">Book My Table</div>
            <div className="drawer_close" onClick={this.hideDrawer}>
              <i className="fas fa-long-arrow-alt-left"></i>
            </div>
          </div>
      </div>
    )
  }
   
}

export default Header;