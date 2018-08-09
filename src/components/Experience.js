import React, { Component } from 'react';

import '../style/Experience.css';

class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <div className="experience-header">
          <h3 className="experience-header-title">{this.props.title} at {this.props.name}</h3>
          <div className="experience-header-location">{this.props.location}</div>
        </div>

        <p className="experience-duration">{this.props.duration}</p>
        <p className="experience-summary">{this.props.summary}</p>

        {this.render_points()}
      </div>
    );
  }

  render_points() {
    let points = [];

    for (var i in this.props.points) {
      points.push(
        <li className="experience-list-item" key={i}>
          {this.props.points[i]}
        </li>
      );
    }

    return (
      <ul className="experience-list">
        {points}
      </ul>
    );
  }
}

export default Experience;
