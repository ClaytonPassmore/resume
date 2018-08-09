import React, { Component } from 'react';

import '../style/Summary.css';

class Summary extends Component {
  render() {
    return (
      <div className="summary">
        <h2 className="section-title">{this.props.title}</h2>
        {this.render_points(this.props.points)}
      </div>
    );
  }

  render_points(points) {
    let rendered_points = [];

    for (var i in points) {
      if (typeof points[i] === "string") {
        rendered_points.push(
          <li className="summary-list-item" key={i}>
            {points[i]}
          </li>
        );
        continue;
      }

      // Recursively render sublists.
      rendered_points.push(
        <li className="summary-list-item" key={i}>
          {points[i].title}
          {this.render_points(points[i].points)}
        </li>
      );
    }

    return (
      <ul className="summary-list">
        {rendered_points}
      </ul>
    );
  }
}

export default Summary;
