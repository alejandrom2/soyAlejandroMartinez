import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../Card';

class Projects extends React.Component {
  render() {
    return (
      <section className="section pt-md">
        <div className="container-fluid">
          <div className="row justify-content-center text-center mb-sm">
            <div className="col-lg-8">
              <div className="icon icon-shape bg-gradient-info rounded-circle text-white">
                <FontAwesomeIcon icon="code-branch" />
              </div>
              <h2 className="display-3 d-inline pl-4">My Projects</h2>
              <p className="lead text-muted">
                These are some of the projects I have worked directly on
                either at a company or as a side project.
              </p>
            </div>
          </div>
          <div className="row cond-justify-center">
            <div className="card-slider-holder">
              <div className="card-slider">
                <Card
                  title="Formula SAE Electric Software"
                  description="Developed a realtime data acquisition system connected to the web via 4G, for CSUN's first Formula SAE Electric Vehicle. Utilizing data visualization tools we deliver
                   important data to vehicle engineers in various teams."
                  color="info"
                  link="https://www.linkedin.com/pulse/connecting-race-vehicle-web-alejandro-martinez-/"
                  badges={[
                    'NodeJS',
                    'PostgreSQL',
                    '4G',
                    'API',
                    'Big Data',
                    'Web Sockets',
                  ]}
                  icon="car-battery"
                  altTitle="LinkedIn Article on our data acquisition system."
                />
                <Card
                  title="Macys.com - Shopping Bag"
                  description="Contributed to the Desktop and Mobile Shopping Bag application. Made changes to both front-end and back-end using Java Spring, Node.JS, and Handlebar.JS."
                  color="danger"
                  link="https://www.macys.com"
                  badges={['Java', 'Spring', 'Lean', 'HandleBar.JS']}
                  icon="shopping-bag"
                  altTitle="Macys.com Webpage"
                />
                <Card
                  title="CSUN Scholarship"
                  description="A digital showcase of professional and service-related activities being completed by faculty members, engaging students and fellow colleagues in order to collaborate between work of common interest and expand on their interdisciplinary connections."
                  color="danger"
                  link="https://www.csun.edu/faculty/scholarship"
                  badges={['IBM Watson', 'PHP', 'Laravel']}
                  icon="user-graduate"
                  altTitle="Scholarship Application built for CSUN"
                />
                <Card
                  title="CSUN Faculty"
                  description="A digital listing of all faculty members on campus, 
                    allowing you to learn about their stories, degree, research interests, and current / past courses taught."
                  color="danger"
                  link="https://www.csun.edu/faculty"
                  badges={['PHP', 'Laravel']}
                  icon="chalkboard-teacher"
                  altTitle="CSUN Faculty listing application."
                />
                <Card
                  title="CSUN Web Services"
                  description="A collection of web services developed to provide API access to many of the university's resources."
                  color="success"
                  link="https://api.metalab.csun.edu/"
                  badges={['Lumen', 'PHP', 'REST', 'MySQL']}
                  icon="server"
                  altTitle="CSUN Meta+Lab API's"
                  last
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
export default Projects;