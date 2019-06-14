import React from "react";
import "./index.scss";

export default class Toggle extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
  }

  toggle = e => {
    e.preventDefault();
    this.setState(prevState => ({
      status: !prevState.status
    }));
  };

  render() {
    return (
      <div className="toggle">
        {" "}
        <TogleSwitch toggle={e => this.toggle(e)} status={this.state.status} />
      </div>
    );
  }
}

const TogleSwitch = props => (
  <div
    className="toggle__btn-container"
    onClick={e => {
      props.toggle(e);
    }}
  >
    <div className="toggle__toggle-container">
      Test
      <span className="toggle__toggle">
        <input type="checkbox" />
        <label className={props.status ? "checked" : "unchecked"} />
      </span>
    </div>
  </div>
);
