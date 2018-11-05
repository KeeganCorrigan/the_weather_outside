import React, { Component } from 'react';
import Image from 'material-ui-image'

class Gif extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Image
        src={this.props.imageUrl}
        />
      </div>
    );
  }
}

export default Gif;
