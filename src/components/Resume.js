import React, { Component } from 'react';
import Divider from './Divider';
import Header from './Header';
import Section from './Section';
import Summary from './Summary';
import bio from '../bio';

class Resume extends Component {
  render() {
    return (
      <div class="resume">
        <Header title_text={bio.name}
          title_href="/"
          email={bio.email}
          phone={bio.phone}
          website={bio.website}/>

        <Divider/>

        <Summary title={bio.summary.title} points={bio.summary.points}/>

        {this.render_sections()}
      </div>
    );
  }

  render_sections() {
    let sections = [];

    for (var i in bio.sections) {
      sections.push(
        <Section title={bio.sections[i].title}
          items={bio.sections[i].items}/>
      );
    }

    return sections;
  }
}

export default Resume;
