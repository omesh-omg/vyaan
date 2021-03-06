import React, { Component } from "react";
import "./footer.css";
import logo from "./img/vyaanlogo.png";


class Footers extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
        <div className="row">
          <div className="col-4 navlinks" style = {{textAlign: "left"}}>
            <a href="./aboutus">About Us</a>
            <a href="./Products">Products</a>
          </div>
          <div className="col-4 logo2"> 
            <img src={logo} alt="logo2" />
          </div>
          <div className="col-4 address">
            <h5>Contact Us</h5>
            <p>I-04, Tides, IIT Roorkee, Haridwar (UK)</p>
            <i>+91-7995981488</i>
          </div>
        </div>
        <div className = "row copyrights">
          <div className ="col-10" style = {{textAlign: "left"}}>Copyrights 2020 Vyaan. All rights reserved.</div>
          <div className ="col-2"style = {{textAlign: "right"}}><a href ="/">Privacy policy</a></div>
        </div>
        </div>
        </React.Fragment>
    );
  }
}

export default Footers;
