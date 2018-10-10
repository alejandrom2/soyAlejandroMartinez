import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'typeface-montserrat';
import './aboutme.scss';

class AboutMe extends React.Component {
  render() {
    return (<div>
      <section className="section bg-gradient-success section-wrapper">
        <div className="container pb-5 inner-wrapper">
          <div className="row row-grid align-items-top">
            <div className="col-md-6 order-lg-2 ml-lg-auto ml-sm-auto mr-sm-auto">
              <div className="position-relative pl-md-5 transform-perspective-right">
                <img src="./assets/header.jpeg" className="img-center img-fluid"/>
                <div className="mt-3 text-center">
                  <a href="https://www.github.com/alejandrom2" className="btn btn-dark btn-icon mb-3">
                      <span className="btn-inner--icon"><FontAwesomeIcon icon={['fab', 'github']}/></span>
                      <span className="btn-inner--text">Github</span>
                  </a>
                  <a href="https://www.linkedin.com/in/alejandromartinezaem/" className="btn btn-primary btn-icon mb-3">
                      <span className="btn-inner--icon"><FontAwesomeIcon icon={['fab', 'linkedin-in']}/></span>
                      <span className="btn-inner--text">LinkedIn</span>
                  </a>
                  <a href="https://www.linkedin.com/alejandromartinezaem" className="btn btn-white btn-icon mb-3">
                      <span className="btn-inner--icon"><FontAwesomeIcon icon={['fab', 'medium-m']}/></span>
                      <span className="btn-inner--text">Medium</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="d-flex px-3">
                <div className="d-none d-lg-block">
                  <div className="emoji-slant">🎩</div>
                </div>
                <div className="pl-4">
                  <h2 className="display-3 text-white" id="name">Who am I?</h2>
                  <p className="text-white">I am a software engineer with over three years of experience developing web applications.<br/>
                    Active member of the latinx community advocating for diversity in the technology field, by working with college and high school students to improve k-12 to college pipeline.<br/>
                    Passionate leader with over five years of experience managing teams and organizations, as well as holding the ability to communicate with key corporate executives.
                  </p>

                  <button className="btn btn-lg btn-icon btn-3 btn-white" type="button">
                    <span className="btn-inner--icon"><FontAwesomeIcon icon="glasses" /></span>
                      <span className="btn-inner--text">Find out more!</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>);
  }
}
export default AboutMe;