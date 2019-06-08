import React, { Component } from "react";
import "./index.scss";

export default class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let block = document.querySelector(".grid-with-gutter");
    let divs = block.querySelectorAll("div");
    divs.forEach((div) => ( div.style.backgroundColor = this.props.getRandomColor() ));
    console.log(divs);
  }

  render() {
    //const { getRandomColor } = this.props
    return (
      <div className="grid-with-gutter">
      <div className="container">
        <div className="container__row">
          <div className="container__col container__col-sm-12 container__col-md-4">
            <div className="container__stuff">
              Row 1 and col 1
            </div>
          </div>
          <div className="container__col container__col-sm-12 container__col-md-4">
            <div className="container__stuff">
              Row 1 and col 2
            </div>
          </div>
          <div className="container__col container__col-sm-12 container__col-md-4 ">
            <div className="container__stuff">
              Row 1 and col 3
            </div>
          </div>
        </div>
        <div className="container__row">
          <div className="container__col container__offset container__col-sm-12 container__col-md-4">
            <div className="container__stuff">
              --- Offset Example Row 2 and col 1
            </div>
          </div>
          <div className="container__col container__col-sm-12 container__col-md-4">
            <div className="container__stuff">
              Row 2 and col 2
            </div>
          </div>
          <div className="container__col container__col-sm-12 container__col-md-4 ">
            <div className="container__stuff">
              Row 2 and col 3
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
