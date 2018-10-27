import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Fullscreen from "react-full-screen";
import './termynal.scss';

class Terminal extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden:false,
      isFull: false
    };
  }
  componentDidUpdate () {
      // const terminal = new Termynal('#termynal');// eslint-disable-line no-unused-vars, no-undef
  }
  hide = () => {
    this.setState({ hidden: !this.state.hidden})
  }
  goFull = () => {
    this.setState({ isFull: !this.state.isFull });
  }
  close(){
    window.open('404', "_blank");
  }
  render() {
    function Term(props){
      return(<div id="termynal" style={{display: props.hidden?'none':'block' }} data-termynal data-ty-typedelay="40" data-ty-linedelay="700" >
        <div data-ty><b className="text-info">alejandromartinez.soy</b> on <b className="text-primary">master</b> is 📦 <b className="text-danger">v1.1.0</b> via <b className="text-success">⬢ v10.11.0</b></div>
        <div data-ty="input">tree ./experience</div>
        <div data-ty="progress">.</div>
        <div data-ty data-ty-prompt="├── [Palo Alto / CA]"><OutboundLink className="text-danger font-weight-bold"  target="_blank" rel="noopener noreferrer" href="https://www.tesla.com/energy">Tesla</OutboundLink></div>
        <div data-ty data-ty-prompt="│ └── (May - August 2018)"><b>Software Engineer Intern</b>
          <div className="job-desc">
            <div className="tab">Built scripts to optimize the deployment of multiple applications through a universal pipeline, increasing ease of new project development and deployment utilizing Docker containers and Jenkins.</div>
            <div className="tab">Improved service tool utilized by entire engineering support team, maximizing ease of use of common tools to predict and solve energy and vehicle product issues, written in Python and React.</div>
            <div className="tab">Participated in the development of internal systems using object-oriented design and agile processes, scoping work for future team projects.</div>
            <div className="tab">Assisted in Model 3 general assembly in both mechanical and managerial duties, optimizing the production rate of Model 3s during push to produce 5,000 vehicles per week.</div>
          </div>
        </div>
        <div data-ty data-ty-prompt="├── [Northridge / CA]"><OutboundLink className="text-danger font-weight-bold"  target="_blank" rel="noopener noreferrer" href="https://www.metalab.csun.edu/">META+LAB</OutboundLink></div>
        <div data-ty data-ty-prompt="│ └── (September 2015 – May 2018)"><b>Back-end Web Developer / Scrum Master</b>
          <div className="job-desc">
            <div className="tab">Led team scrum ceremonies and communicated with a project manager and product owner ensuring a deliverable sprint scope and expected product release.</div>
            <div className="tab">Developed four applications using a PHP Framework to handle user authentication, storage of faculty class data and project details, and delivery of dynamic data to front-end developers.</div>
            <div className="tab">Created database schemas using MySQL in order to organize data from multiple applications and built model logic using Object-relational mapping.</div>
            <div className="tab">Integrated 3rd party services including IBM Watson, and full-text search engines to make usage of natural language understanding to better organize user inputted data and improve search speed and accuracy.</div>
            <div className="tab">Developed and updated documentation to strengthen quality and functionality of public-facing APIs.</div>
          </div>
        </div>
        <div data-ty data-ty-prompt="├── [San Fransisco / CA]"><OutboundLink className="text-danger font-weight-bold"  target="_blank" rel="noopener noreferrer" href="https://www.macys.com">Macy’s Technology</OutboundLink></div>
        <div data-ty data-ty-prompt="│ └── (May - August 2017)"><b>Software Engineer Intern</b>
          <div className="job-desc">
            <div className="tab">Implemented Lean methodology experiments to improve visuals and functionality of the check-out shopping experience in order to minimize cart abandonment.</div>
            <div className="tab">Contributed functional code to projects using Java Spring, Node.js, and Backbone.js.</div>
            <div className="tab">Interacted with VPs, directors, and technology managers consulting on our intern summer project, helping iterate our application.</div>
            <div className="tab">Led a team of 4 software engineering interns to create a proposed software architecture and deliver a functional minimum viable product web API and mobile iOS application.</div>

            <div data-ty data-ty-prompt="└──">.</div>
          </div>
        </div>
        <div data-ty>3 work positions.</div>
      </div>);
    }
    return (
      <Fullscreen
        enabled={this.state.isFull}
        onChange={isFull => this.setState({isFull})}
      >
      <div className="col-12 terminal bg-term shadow">
        <div className="buttons">
          <button className="btn btn-term term-close" onClick={this.close} />
          <button className={`btn btn-term term-min ${this.state.isFull?'disabled':''}`} onClick={this.hide} disabled={this.state.isFull} />
          <button className="btn btn-term term-max" onClick={this.goFull} />
        </div>
        <Term hidden={this.state.hidden}/>
        </div>
        </Fullscreen>
      );
  }
}

Terminal.defaultProps = { hidden: false };

export default Terminal;
