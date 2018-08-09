import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    return (
      <div class="contact-list">
        {this.props.children}
      </div>
    );
  }
}

export default ContactList;
