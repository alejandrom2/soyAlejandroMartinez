import React from "react";
import { withPrefix } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import Terminal from '../Terminal';
import './resume.scss';

class Resume extends React.Component {
  render() {
    return (
      <section className="section bg-dark">
        <div className="container">
          <div className="row justify-content-center text-center mb-sm">
            <div className="col-lg-8">
              <div className="icon icon-shape bg-white rounded-circle text-success">
                <FontAwesomeIcon icon="terminal" />
              </div>
              <h2 className="display-3 d-inline pl-4 text-white">Work Experience</h2>
              <br />
              <button className="btn btn-icon btn-3 btn-white" type="button">
                <span className="btn-inner--icon"><FontAwesomeIcon icon="file-download" /></span>
                <OutboundLink href={withPrefix('/alejandrom_resume.pdf?pdf=Resume')} className="btn-inner--text text-dark"  >Download my PDF resume</OutboundLink>
              </button>
            </div>
          </div>
          <Terminal />
        </div>
      </section>
      );
  }
}
export default Resume;