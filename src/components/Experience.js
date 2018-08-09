import React, { Component } from 'react';

class Experience extends Component {
  render() {
    return (
      <div class="experience">
        <div class="experience-header">
          <div class="experience-header-title">{this.props.title} at {this.props.name}</div>
          <div class="experience-header-location">{this.props.location}</div>
        </div>

        <p class="experience-duration">{this.props.duration}</p>
        <p class="experience-summary">{this.props.summary}</p>

        {this.render_points()}
      </div>
    );
  }

  render_points() {
    let points = [];

    for (var i in this.props.points) {
      points.push(
        <li class="experience-list-item">
          {this.props.points[i]}
        </li>
      );
    }

    return (
      <ul class="experience-list">
        {points}
      </ul>
    );
  }
}

export default Experience;
