import React, { Component } from 'react';

import '../style/ContactListItem.css';

class ContactListItem extends Component {
  render() {
    return (
      <div className="contact-list-item">
        <a className="contact-list-item-link" href={this.props.href} target="_blank">
          {this.props.children}
        </a>
      </div>
    );
  }
}

export default ContactListItem;
