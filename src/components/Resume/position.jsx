import React from "react";
import './resume.scss'

class Position extends React.Component {
  render() {
    return (
      <div className="block-timeline row">
        <div className={`timeline-date bg-gradient-${this.props.color} col-md-2`}>
          {this.props.date}
        </div>
        <div className="col-md-2">
          <img className="img-fluid" src="https://www.logodesignlove.com/images/monograms/tesla-symbol.jpg" alt="" />
        </div>
        <div className="col-md-8">
          <h4 className="text-white">{this.props.position}</h4>
          <p>{this.props.description}</p>
        </div>
        <div className="clearfix" />
      </div>);
  }
}
export default Position;