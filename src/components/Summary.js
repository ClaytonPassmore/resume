import React, { Component } from 'react';

class Summary extends Component {
  render() {
    return (
      <div class="summary">
        <h2 class="section-title">{this.props.title}</h2>
        {this.render_points(this.props.points)}
      </div>
    );
  }

  render_points(points) {
    let rendered_points = [];

    for (var i in points) {
      if (typeof points[i] === "string") {
        rendered_points.push(<li>{points[i]}</li>);
        continue;
      }

      // Recursively render sublists.
      rendered_points.push(
        <li class="summary-list-item">
          {points[i].title}
          {this.render_points(points[i].points)}
        </li>
      );
    }

    return (
      <ul class="summary-list">
        {rendered_points}
      </ul>
    );
  }
}

export default Summary;
