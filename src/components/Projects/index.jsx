import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../Card';

class Projects extends React.Component {
  render() {
    return (
      <section className="section pt-md">
        <div className="container">
          <div className="row justify-content-center text-center mb-sm">
            <div className="col-lg-8">
              <div className="icon icon-shape bg-gradient-info rounded-circle text-white">
                <FontAwesomeIcon icon="code-branch" />
              </div>
              <h2 className="display-3 d-inline pl-4">My Projects</h2>
              <p className="lead text-muted">
                  These are some of the projects I have worked directly on either at a company or as a side project.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="row row-grid">
                <Card 
                  title="Formula SAE Electric" 
                  description="Coming Soon..."
                  color="info"
                  link="#"
                  badges={["Python","PostgreSQL","API","Big Data","Web Socket"]}
                  icon="car-battery"
                />
                <Card 
                  title="Macys.com - Shopping Bag" 
                  description="Contributed to the Desktop and Mobile Shopping Bag application. Made changes to both front-end and back-end using Java Spring, Node.JS, and Handlebar.JS." 
                  color="danger" 
                  link="#" 
                  badges={["Java","Spring","Lean","HandleBar.JS"]} 
                  icon="shopping-bag"
                />
                <Card 
                  title="CSUN Scholarship" 
                  description="A digital showcase of professional and service-related activities being completed by faculty members, engaging students and fellow colleagues in order to collaborate between work of common interest and expand on their interdisciplinary connections." 
                  color="danger"
                  link="#" 
                  badges={["IBM Watson","PHP","Laravel"]} 
                  icon="user-graduate"
                />
                <Card 
                  title="CSUN Faculty" 
                  description="A digital listing of all faculty members on campus, 
                    allowing you to learn about their stories, degree, research interests, and current / past courses taught." 
                  color="danger"
                  link="#" 
                  badges={[
                      "PHP","Laravel"]} 
                  icon="chalkboard-teacher"
                />
                <Card 
                  title="CSUN Web Services" 
                  description="A collection of web services developed to provide API access to many of the university's resources."
                  color="success" 
                  link="#" 
                  badges={["Lumen","PHP","REST","MySQL"]} 
                  icon="server"
                />
              </div>
            </div>
          </div>
        </div>
      </section>);
  }
}
export default Projects;