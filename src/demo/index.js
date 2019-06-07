import * as React from "react";
import * as ReactDOM from "react-dom";

import TableRowCol from "./layout/table-row-col";
import HoverSliderButton from "./button/hover-slider";
import BootstrapLikeGrid from "./layout/bootstrap-like-grid";
import "../style.scss";

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
