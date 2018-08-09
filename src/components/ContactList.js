import React, { Component } from 'react';

import '../style/ContactList.css';

class ContactList extends Component {
  render() {
    return (
      <div className="contact-list">
        {this.props.children}
      </div>
    );
  }
}

export default ContactList;
