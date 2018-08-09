import React, { Component } from 'react';

class BulletedListItem extends Component {
  render() {
    return (
      <li class="bulleted-list-item">
        {this.props.children}
      </li>
    );
  }
}

export default BulletedListItem;
