import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './card.scss';
class Card extends React.Component {
  render() {
    return (<div className="col-lg-4 col-md-6 mb-3">
      <div className={`card card-lift--hover-${this.props.color} shadow border-0`}>
        <div className="card-body">
          <div>{this.props.badges.map((badge) => <span className={`badge badge-pill badge-${this.props.color}`}>{badge}</span>)}</div>
          <h4 className="mt-3"><span className="text-under">{this.props.title}</span></h4>

          <p className="description mt-3">{this.props.description}</p>
          <div className={`icon icon-shape icon-shape-${this.props.color} rounded-circle mb-4`}>
            <FontAwesomeIcon icon={this.props.icon}/>
          </div>
          {/*<a href={this.props.link} className={`btn btn-${this.props.color} mt-4`}>Learn more</a>*/}
        </div>
      </div>
    </div>);
  }
}
export default Card;