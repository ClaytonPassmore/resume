import React, { Component } from 'react';
import Divider from './Divider';
import Experience from './Experience';

class Section extends Component {
  render() {
    return (
      <div class="section">
        <Divider/>
        <h2 class="section-title">{this.props.title}</h2>
        {this.render_items()}
      </div>
    );
  }

  render_items() {
    let items = [];

    for (var i in this.props.items) {
      items.push(
        <Experience
          name={this.props.items[i].name}
          title={this.props.items[i].title}
          location={this.props.items[i].location}
          duration={this.props.items[i].duration}
          summary={this.props.items[i].summary}
          points={this.props.items[i].points}/>
      )
    }

    return items;
  }
}

export default Section;
