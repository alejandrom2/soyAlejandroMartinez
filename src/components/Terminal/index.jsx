import React from "react";
import './termynal.scss';

class Terminal extends React.Component {
  componentDidMount () {
      let Termynal;
      Termynal('#termynal');
  }
  render() {
    return (
      <div className="col-12 terminal bg-term shadow" id="termynal" data-termynal data-ty-typedelay="40" data-ty-linedelay="700" >
        <div className="buttons">
          <button className="btn btn-term term-close" href="#" />
          <button className="btn btn-term term-min" href="#" />
          <button className="btn btn-term term-max" href="#" />
        </div>
        <div data-ty><b className="text-info">alejandromartinez.soy</b> on <b className="text-primary">master</b> is 📦 <b className="text-danger">v1.1.0</b> via <b className="text-success">⬢ v10.11.0</b></div>
        <div data-ty="input">tree ./expirence</div>
        <div data-ty="progress">.</div>
        <div data-ty data-ty-prompt="├── [Palo Alto / CA]"><a className="text-danger font-weight-bold"  target="_blank" rel="noopener noreferrer" href="https://www.tesla.com/energy">Tesla</a></div>
        <div data-ty data-ty-prompt="│ └── (May - August 2018)"><b>Software Engineer Intern</b>
          <div className="job-desc">
            <div className="tab">1Built scripts to optimize the deployment of multiple applications through a universal pipeline, increasing ease of new project development and deployment utilizing Docker containers and Jenkins.</div>
            <div className="tab">Improved service tool utilized by entire engineering support team, maximizing ease of use of common tools to predict and solve energy and vehicle product issues, written in Python and React.</div>
            <div className="tab">Participated in the development of internal systems using object-oriented design and agile processes, scoping work for future team projects.</div>
            <div className="tab">Assisted in Model 3 general assembly in both mechanical and managerial duties, optimizing the production rate of Model 3s during push to produce 5,000 vehicles per week.</div>
          </div>
        </div>
        <div data-ty data-ty-prompt="├── [Northridge / CA]"><a className="text-danger font-weight-bold"  target="_blank" rel="noopener noreferrer" href="https://www.metalab.csun.edu/">META+LAB</a></div>
        <div data-ty data-ty-prompt="│ └── (September 2015 – May 2018)"><b>Back-end Web Developer / Scrum Master</b>
          <div className="job-desc">
            <div className="tab">2Built scripts to optimize the deployment of multiple applications through a universal pipeline, increasing ease of new project development and deployment utilizing Docker containers and Jenkins.</div>
            <div className="tab">Improved service tool utilized by entire engineering support team, maximizing ease of use of common tools to predict and solve energy and vehicle product issues, written in Python and React.</div>
            <div className="tab">Participated in the development of internal systems using object-oriented design and agile processes, scoping work for future team projects.</div>
            <div className="tab">Assisted in Model 3 general assembly in both mechanical and managerial duties, optimizing the production rate of Model 3s during push to produce 5,000 vehicles per week.</div>
          </div>
        </div>
        <div data-ty data-ty-prompt="├── [San Fransisco / CA]"><a className="text-danger font-weight-bold"  target="_blank" rel="noopener noreferrer" href="https://www.macys.com">Macy’s Technology</a></div>
        <div data-ty data-ty-prompt="│ └── (May - August 2017)"><b>Software Engineer Intern</b>
          <div className="job-desc">
            <div className="tab">1Built scripts to optimize the deployment of multiple applications through a universal pipeline, increasing ease of new project development and deployment utilizing Docker containers and Jenkins.</div>
            <div className="tab">Improved service tool utilized by entire engineering support team, maximizing ease of use of common tools to predict and solve energy and vehicle product issues, written in Python and React.</div>
            <div className="tab">Participated in the development of internal systems using object-oriented design and agile processes, scoping work for future team projects.</div>
            <div className="tab">Assisted in Model 3 general assembly in both mechanical and managerial duties, optimizing the production rate of Model 3s during push to produce 5,000 vehicles per week.</div>
            <div data-ty data-ty-prompt="└──">.</div>
          </div>
        </div>
        <div data-ty>3 work positions.</div>
      </div>);
  }
}
export default Terminal;
