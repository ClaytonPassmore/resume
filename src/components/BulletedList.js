import React, { Component } from 'react';

class BulletedList extends Component {
  render() {
    return (
      <ul class="bulleted-list">
        {this.props.children}
      </ul>
    );
  }
}

export default BulletedList;
