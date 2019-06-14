import * as React from "react";
import "./index.scss";

export default class Toggle extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checked: !!(props.checked || props.defaultChecked),
      hasFocus: false
    };
  }

  joinClass = (inital = "", parms = {}) => {
    let newClasses = [];
    newClasses.push(inital);

    for (let key in parms) {
      console.log(parms[key]);
      if (parms[key]) {
        newClasses.push(key);
      }
    }

    return newClasses.join(" ");
  };

  handleClick = e => {
    e.preventDefault();
    this.setState(prevState => ({
      checked: !prevState.checked
    }));
  };

  render() {
    const classes = this.joinClass("react-toggle", {
      "react-toggle--checked": this.state.checked,
      "react-toggle--focus": this.state.hasFocus
    });

    return (
      <div
        className={classes}
        onClick={e => {
          this.handleClick(e);
        }}
      >
        {classes}
      </div>
    );
  }
}

Toggle.defaultChecked = true;
