import React, {Component} from 'react'

class Random extends Component {
  constructor(props) {
    super(props)
  }

  getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  render() {
    return (
      <div>
        {this.props.children(this.getRandomColor)}
      </div>
    )
  }
}
export default Random;
