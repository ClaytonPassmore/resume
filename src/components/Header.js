import React, { Component } from 'react';
import ContactList from './ContactList';
import ContactListItem from './ContactListItem';
import { Envelope, Telephone, CodeSlash } from 'react-bootstrap-icons';

import '../style/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <a className="header-link" href={this.props.title_href}>
          <h1 className="title">{this.props.title_text}</h1>
        </a>

        <ContactList>
          <ContactListItem href={"mailto:" + this.props.email} icon={<Envelope className="icon" size="1.1rem"/>}>
            {this.props.email}
          </ContactListItem>
          <ContactListItem href={"tel:" + this.props.phone} icon={<Telephone className="icon" size="1.1rem"/>}>
            {this.props.phone}
          </ContactListItem>
          <ContactListItem href={"https://" + this.props.github_url} icon={<CodeSlash className="icon" size="1.1rem"/>}>
            {this.props.github_url}
          </ContactListItem>
        </ContactList>
      </div>
    );
  }
}

export default Header;
