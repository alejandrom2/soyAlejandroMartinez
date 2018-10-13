import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <section className="section p-sm bg-gradient-success">
        <div className="container">
          <div className="row">
            <div className="card bg-dark shadow-lg border-0">
              <div className="p-5">
                <div className="row align-items-center">
                  <div className="col-lg-10">
                    <h3 className="text-white">Found something that interest you?</h3>
                    <p className="lead text-white mt-3">I would love to get in touch with you to talk about my background, share my expirences, or just grab coffee!</p>
                  </div>
                  <div className="col-lg-2 ml-lg-auto">
                    <span className="emoji text-center" role="img" aria-label="" >☕️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-grid justify-content-center">
            <div className="text-center">
              <h4 className="display-4 mb-5 mt-5">Connect with me on these platforms</h4>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-lg-2 col-4">
              <a href="mailto:hi@alejandromartinez.soy" className="btn border-0 icon icon-shape bg-white rounded-circle">
                <FontAwesomeIcon className="text-dark" icon="envelope-open" />
              </a>
            </div>
            <div className="col-lg-2 col-4">
              <a href="https://www.linkedin.com/in/alejandromartinezaem/" target="_blank" rel="noopener noreferrer" className="btn border-0 icon icon-shape bg-info rounded-circle">
                <FontAwesomeIcon className="text-white" icon={['fab', 'linkedin-in']} />
              </a>
            </div>
            <div className="col-lg-2 col-4">
              <a href="https://github.com/alejandrom2/" target="_blank" rel="noopener noreferrer" className="btn border-0 icon icon-shape bg-dark rounded-circle">
                <FontAwesomeIcon className="text-white" icon={['fab', 'github']} />
              </a>
            </div>
            {/* <div className="col-lg-2 col-4">
              <a href="https://www.creative-tim.com/product/argon-design-system" target="_blank" rel="noopener noreferrer" className="btn border-0 icon icon-shape bg-white rounded-circle">
                <FontAwesomeIcon className="text-dark" icon={['fab', 'medium-m']} />
              </a>
            </div> */}
            <div className="col-lg-2 col-4">
              <a href="https://twitter.com/alejandrom2soy" target="_blank" rel="noopener noreferrer" className="btn border-0 icon icon-shape bg-info rounded-circle">
                <FontAwesomeIcon className="text-primary" icon={['fab', 'twitter']} />
              </a>
            </div>
          </div>
          <hr />
          <div className="row text-center">
            <div className="col-12">
              <div className="copyright text-dark">
            © 2018 Made with <FontAwesomeIcon icon="heart" className="text-danger" /> by Alejandro Martinez.
              </div>
            </div>
          </div>
        </div>
      </section>);
  }
}

export default Footer;
