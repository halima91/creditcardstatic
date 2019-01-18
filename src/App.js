import React, { Component } from "react";
import puce from "./puce.jpg";
import mastercard from "./mastercard.jpg";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";

library.add(faIgloo);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="first-part">
          <h1 className="title">Credit Card</h1>
          <img
            className="image-puce"
            src={puce}
            alt="puce-img"
            height="20%"
            width="30%"
          />
          <p className="number">7253 3256 7895 1245</p>
          <span className="small-number">5422</span>
          <p className="cardholder">cardholder</p>
        </div>

        <div className="second-part">
          <h6>
            VALID THRU
            <FontAwesomeIcon icon="igloo" />
          </h6>
          <p className="valid">
            MONTH/YEAR
            <br />
            11/50
          </p>

          <img
            className="mastercard"
            src={mastercard}
            alt="master-card"
            height="0%"
            width="30%"
          />
        </div>
      </div>
    );
  }
}

export default App;
