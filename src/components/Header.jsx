import React from 'react';
import './Header.css';

const Header = (props) =>{
    return (
        <div className = "header_wrapper">
            <img src="https://res.cloudinary.com/dpy0mkwsp/image/upload/v1547354763/CHMimage/saas.svg" height="100px" width="100px"/>
            <div className="title">Login-SignUp Validation</div>
        </div>
    )
}

export default Header;