import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p> {this.props.latitude} </p>
        <p> {this.props.longitude} </p>
      </div>
    );
  }
}

export default Gif;
