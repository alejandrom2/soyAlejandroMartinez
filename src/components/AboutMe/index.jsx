import React from "react";
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GitHubCalendar from 'react-github-contributions-calendar';
import Draggable from 'react-draggable';
import 'typeface-montserrat/index.css';
import './aboutme.scss';

class AboutMe extends React.Component {
  render() {
    const defaultTheme = {
      background: 'transparent',
      text: '#fff',
      grade4: '#e57373',
      grade3: '#f44336',
      grade2: '#d32f2f',
      grade1: '#b71c1c',
      grade0: 'rgba(255,255,255,0.1)',
    };
    return (
      <section className="section bg-gradient-success section-wrapper">
        <div className="container pb-5 inner-wrapper">
          <div className="row row-grid align-items-top">
            <div className="col-md-6 order-lg-2 ml-lg-auto ml-sm-auto mr-sm-auto">
              <div className="position-relative pl-md-5 transform-perspective-right">
                <img src="./assets/header.jpeg" className="img-center img-fluid" style={{maxWidth:'75%'}} alt="" />
                <div className="mt-3 text-center">
                  {/* <OutboundLink href="https://www.github.com/alejandrom2" className="btn btn-dark btn-icon mb-3">
                    <span className="btn-inner--icon"><FontAwesomeIcon icon={['fab', 'github']} /></span>
                    <span className="btn-inner--text">Github</span>
                  </OutboundLink> */}
                  <OutboundLink href="https://www.linkedin.com/in/alejandromartinezaem/" className="btn btn-primary btn-icon mb-3">
                    <span className="btn-inner--icon"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></span>
                    <span className="btn-inner--text">LinkedIn</span>
                  </OutboundLink>
                  <OutboundLink href="https://twitter.com/alejandrom2soy" className="btn btn-info btn-icon mb-3">
                    <span className="btn-inner--icon"><FontAwesomeIcon icon={['fab', 'twitter']} /></span>
                    <span className="btn-inner--text">Twitter</span>
                  </OutboundLink>
                </div>
                <div className="card p-3 bg-dark rounded">
                  <span className="btn-inner--icon text-white"><FontAwesomeIcon icon={['fab', 'github']} /></span>
                  <GitHubCalendar username="alejandrom2" theme={defaultTheme} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="d-flex px-3">
                <div className="d-lg-block">
                  <Draggable >
                    <div>
                      <span role="img" className="emoji-slant" id="tophat" aria-label="tophat" style={{position: 'absolute' ,zIndex: 1}}>🎩</span>
                    </div>
                  </Draggable>
                  <span role="img" className="emoji-slant" id="wave" aria-label="wave" style={{ zIndex: -1,fontSize: '3rem',position: 'relative',left: '5px',top: '15px'}}>👋</span>
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