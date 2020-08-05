import React, { Component } from 'react';

import '../style/ContactListItem.css';

class ContactListItem extends Component {
  render() {
    return (
      <div className="contact-list-item">
        {this.props.icon}
        <a
          className="contact-list-item-link"
          href={this.props.href}
          target="_blank"
          rel="noopener noreferrer">
          {this.props.children}
        </a>
      </div>
    );
  }
}

export default ContactListItem;
