import React from "react";
import './resume.scss'

class Position extends React.Component {
  render() {
    return (<div class="block-timeline row">
        <div class={`timeline-date bg-gradient-${this.props.color} col-md-2`}>
           {this.props.date}
        </div>
        <div class="col-md-2">
         <img class="img-fluid" src="https://www.logodesignlove.com/images/monograms/tesla-symbol.jpg"/>
        </div>
        <div class="col-md-8">
           <h4 class="text-white">{this.props.position}</h4>
           <p>{this.props.description}</p>
        </div>
        <div class="clearfix"></div>
      </div>)
  }
}
export default Position;