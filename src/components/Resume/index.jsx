import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Terminal from '../Terminal';
import './resume.scss'

class Resume extends React.Component {
  render() {
    return (
    <section className="section bg-gradient-success">
      <div className="container">
      <div className="row justify-content-center text-center mb-sm">
          <div className="col-lg-8">
              <div className="icon icon-shape bg-white rounded-circle text-success">
                <FontAwesomeIcon icon="terminal"/>
              </div>
              <h2 className="display-3 d-inline pl-4 text-white">Work Expirence</h2>
              <p className="lead text-white">These are some of the projects I have worked directly on either at a company or as a side project.</p>
               <button className="btn btn-icon btn-3 btn-default" type="button">
                  <span className="btn-inner--icon"><FontAwesomeIcon icon="file-download"/></span>
                    <span className="btn-inner--text">Download my PDF resume</span>
                </button>
          </div>
      </div>
      <Terminal/>
      </div>
    </section>
      );
  }
}
export default Resume;