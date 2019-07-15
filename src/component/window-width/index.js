import React, {Component, Fragment, useState} from "react";
import "./index.scss";

export const MAX_WIDTH = 1440;
export class WindowWidthWrapper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0
    }
  }

  componentDidMount() {
    this.setState(
      {width: window.innerWidth},
      () => window.addEventListener("resize",
        ({target}) => this.setState({width: target.innerWidth}))
      );
  }

  render() {
    return this.props.render(this.state.width);
  }

}

export function LessThanWidth(props) {
  console.log(props);
  return (
    <div className="less-than">Width less than 1440px and current width : ${props.width}</div>
  )
}

export function MoreThanWidth(props) {
  console.log(props);
  return (
    <div className="more-than">Width more than 1440px and current width: ${props.width}</div>
  )
}

export class WidthWindowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  render() {
    return (
      <Fragment>
        <div type="button"
             onClick={() => {
               this.setState((prevState, props) => {
                 return {showModal: !prevState.showModal};
               });
             }}>
          Toggle Modal/Element
        </div>
        <WindowWidthWrapper
          render={(width) =>
            (width > MAX_WIDTH ?
              <MoreThanWidth showModal={this.state.showModal} width={width}/> :
              <LessThanWidth showModal={this.state.showModal} width={width}/>)
          }
        />
      </Fragment>
    )
  }
}
