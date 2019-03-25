import React from 'react';
import './Login.css';

class Login extends React.Component{
  constructor(){
    super();
    this.state={
      username:"",
      password:"",
      error:'',
    }
  }

  handleChange = (e) =>{
    const { state } = this;
    const { name, value } = e.target; 
    state[name] = value
    this.setState({
      ...state,
    })
  }

  validateChange = () => {
    let { 
      username,
      password,
      error,
    } = this.state;
    error= ""
    if (username === ""){
      error = "Username is Empty";
    }
    else if (password === "" ){
      error = "Password is Empty";
    }
    return error; 
  }

  saveChange = () => {
    const error = this.validateChange();
    if (error){
      this.setState({
        error: error
      })
    }
    else{
      this.setState({
        error: ""
      })
     console.log("saved")
    }
  }

  render(){
    const { username,password,error } = this.state;
    return(
        <div className="login_form">
          <input type="text" placeholder="UserName" name="username" value={username} onChange={this.handleChange} />
          <input type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
          <input type="button" onClick={this.saveChange} value="Submit"/>
          {error ? <div className="error">{error}</div> : ""}
          <div className="redirect">Dont have an account?</div>
          <div className="signup" onClick={this.props.activateTab.bind(this,2)}>Signup</div>
        </div>
    )
  }
}

export default Login;