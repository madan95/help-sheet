import React from "react";
import "./index.scss";

export default class EqualHeightBox extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const container = document.querySelector('.equal-height-container');
    const elements = container.querySelectorAll('.equal-height');
    let highestHeight = 0;

    for (let item of elements) {
      let clientHeight = item.clientHeight;
      console.log('Client Height: ' + clientHeight);
      highestHeight = (clientHeight > highestHeight) ? clientHeight : highestHeight;
    }
    console.log('Highest Height: ' + highestHeight);

    setTimeout(() => {
      this.setSameHeightForElements(elements, highestHeight);
    }, 5000);

    window.addEventListener('resize', () => {
      console.log('window resized');
      this.setSameHeightForElements(elements, highestHeight);
    })
  }

  setSameHeightForElements = (elements, highestHeight) => {
    for (let item of elements) {
      item.style.height = `${highestHeight}px`;
    }
  }

    render() {
    return (
      <div className="equal-height-container">
        <div className="equal-height left">
          <p>Something</p>
          <p>ok</p>
          <p>long day</p>
          <p>another one</p>
        </div>
        <div className="equal-height right">
          <p>equalising</p>
        </div>
      </div>
    );
  }
};
