import React from "react";
import "./index.scss";

export default class ElementViewPort extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Component did mount.");
    const el = document.querySelector(".floating__box");
    this.checkEl(el);
    window.addEventListener("resize", () => this.checkEl(el), false);
    window.addEventListener("scroll", () => this.checkEl(el), false);
  }

  checkEl = el => {
    const float = document.querySelector(".floating__float");
    console.log(this.isElementInViewport(el));
    if (!this.isElementInViewport(el)) {
      float.classList.remove("hidden");
    } else {
      float.classList.add("hidden");
    }
  };

  isElementInViewport = el => {
    let rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  render() {
    return (
      <>
        <div className="floating__box">
          (BOX-1) Scroll or resize till this box partially is hidden.
        </div>
        <div className="floating__float">
          <div>
            Hello, this is floating element (BOX-2). Only visible when box
            (BOX-1) is outside the viewport.
          </div>
        </div>
      </>
    );
  }
}
