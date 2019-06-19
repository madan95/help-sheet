import * as React from "react";
import * as ReactDOM from "react-dom";

import TableRowCol from "./layout/table-row-col";
import HoverSliderButton from "./button/hover-slider";
import BootstrapLikeGrid from "./layout/bootstrap-like-grid";
import GridWithGutter from "./layout/grid-with-gutter";
import Toggle from "./button/toggle";
import RadioStyled from "./button/radio-styled";
import TransitionSlideDown from "../component/transition-slide-down";
import ElementViewPort from "../component/element-viewport";

import "../style.scss";
import Random from "../utils/random";

const pages = {
  tableRowCol: {
    name: "Table Row Col",
    render: () => <TableRowCol />
  },
  hoverButtonSlider: {
    name: "Sliding button",
    render: () => <HoverSliderButton />
  },
  gridBootstraplike: {
    name: "Bootstrap like grid",
    render: () => <BootstrapLikeGrid />
  },
  gridWithGutter: {
    name: "Grid with gutter",
    render: () => (
      <Random>
        {getRandomColor => <GridWithGutter getRandomColor={getRandomColor} />}
      </Random>
    )
  },
  Toggle: {
    name: "Toggle",
    render: () => <Toggle />
  },
  radioStyled: {
    name: "Radio Styled",
    render: () => <RadioStyled />
  },
  TransitionSlideDown: {
    name: "Transition Slide down",
    render: () => <TransitionSlideDown />
  },
  ElementViewPort: {
    name: "Element (BOX-2) visible only when BOX-1 is outside Viewport ",
    render: () => <ElementViewPort />
  }
};

class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: undefined
    };
  }

  changePage(e, pageType) {
    e.preventDefault();
    this.setState({ currentPage: pageType });
  }

  render() {
    const wrapped =
      this.state.currentPage !== undefined
        ? pages[this.state.currentPage].render()
        : undefined;

    return (
      <>
        <h1>Demo</h1>
        <ul>
          {Object.entries(pages).map(([type, page]) => (
            <li key={type}>
              <a href={`#${type}`} onClick={e => this.changePage(e, type)}>
                {page.name}
              </a>
            </li>
          ))}
        </ul>

        <div>{wrapped}</div>
      </>
    );
  }
}

function init() {
  ReactDOM.render(<Demo />, document.querySelector("#root"));
}

window.addEventListener("DOMContentLoaded", init);
