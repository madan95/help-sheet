import React, { Component } from "react";
import "./index.scss";

export default class index extends Component {
  render() {
    return (
      <div className="container">
        <div className="container__row">
          <div className="container__col-sm-12 container__col-md-4">
            <div className="container__stuff">
              col 1
            </div>
          </div>
          <div className="container__col-sm-12 container__col-md-4">
            <div className="container__stuff">
              col 2
            </div>
          </div>
          <div className="container__col-sm-12 container__col-md-4 ">
            <div className="container__stuff">
              col 3
            </div>
          </div>
        </div>
      </div>
    );
  }
}
