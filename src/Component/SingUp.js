import React, { Component } from 'react';
import  "./SingUp.css"


class SingUp extends Component {


    render() {
        return (
            <>
            <div className="container">
            <div className="formAA">
             <form action="">
        <div className="form-group">
          <label htmlFor="fullname" style={{color:"black"}}>Full Name</label>
          <input type="text" className="form-control"
            id="fullname"
            placeholder="Enter Your Full Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" style={{color:"black"}}>E-mail Address</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter Your E-mail Address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" style={{color:"black"}}>Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone"  
            placeholder="Enter Your Phone Number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" style={{color:"black"}}>Password</label>  
          <input
            type="text"
            className="form-control"
            id="password"
            placeholder="Enter Your Password"
          />
        </div>
        <div className="form-group">
          <br />
        </div>
        <button className="btn btn-primary">Create New Account</button>
      </form>
      </div>
      </div>
            </>
        );
    }
}

export default SingUp;