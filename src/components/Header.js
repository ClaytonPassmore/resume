import React, { Component } from 'react';
import ContactList from './ContactList';
import ContactListItem from './ContactListItem';

import '../style/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a className="header-link" href={this.props.title_href}>
          <h1>{this.props.title_text}</h1>
        </a>

        <ContactList>
          <ContactListItem href={"mailto:" + this.props.email}>
            {this.props.email}
          </ContactListItem>
          <ContactListItem href={"phone:" + this.props.phone}>
            {this.props.phone}
          </ContactListItem>
          <ContactListItem href={"https://" + this.props.website}>
            {this.props.website}
          </ContactListItem>
        </ContactList>
      </div>
    );
  }
}

export default Header;
