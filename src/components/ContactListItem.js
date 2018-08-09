import React, { Component } from 'react';

class ContactListItem extends Component {
  render() {
    return (
      <div class="contact-list-item">
        <a class="contact-list-item-link" href={this.props.href} target="_blank">
          {this.props.children}
        </a>
      </div>
    );
  }
}

export default ContactListItem;
