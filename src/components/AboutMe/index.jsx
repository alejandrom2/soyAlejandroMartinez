import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'typeface-montserrat/index.css';
import './aboutme.scss';

class AboutMe extends React.Component {
  render() {
    return (
      <section className="section bg-gradient-success section-wrapper">
        <div className="container pb-5 inner-wrapper">
          <div className="row row-grid align-items-top">
            <div className="col-md-6 order-lg-2 ml-lg-auto ml-sm-auto mr-sm-auto">
              <div className="position-relative pl-md-5 transform-perspective-right">
                <img src="./assets/header.jpeg" className="img-center img-fluid" alt="" />
                <div className="mt-3 text-center">
                  <OutboundLink href="https://www.github.com/alejandrom2" className="btn btn-dark btn-icon mb-3">
                    <span className="btn-inner--icon"><FontAwesomeIcon icon={['fab', 'github']} /></span>
                    <span className="btn-inner--text">Github</span>
                  </OutboundLink>
                  <OutboundLink href="https://www.linkedin.com/in/alejandromartinezaem/" className="btn btn-primary btn-icon mb-3">
                    <span className="btn-inner--icon"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></span>
                    <span className="btn-inner--text">LinkedIn</span>
                  </OutboundLink>
                  <OutboundLink href="https://twitter.com/alejandrom2soy" className="btn btn-info btn-icon mb-3">
                    <span className="btn-inner--icon"><FontAwesomeIcon icon={['fab', 'twitter']} /></span>
                    <span className="btn-inner--text">Twitter</span>
                  </OutboundLink>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="d-flex px-3">
                <div className="d-none d-lg-block">
                  <div role="img" className="emoji-slant" aria-label="">🎩</div>{/* eslint-disable-line jsx-a11y/accessible-emoji */}
                </div>
                <div className="pl-4">
                  <h2 className="display-3 text-white" id="name">Who am I?</h2>
                  <p className="text-white">I am a software engineer with over three years of experience developing web applications.<br />
                    Active member of the latinx community advocating for diversity in the technology field, by working with college and high school students to improve k-12 to college pipeline.<br />
                    Passionate leader with over five years of experience managing teams and organizations, as well as holding the ability to communicate with key corporate executives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>);
  }
}
export default AboutMe;