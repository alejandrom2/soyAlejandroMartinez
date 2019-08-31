import React from "react";
import { StaticQuery, graphql } from "gatsby"
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
                <StaticQuery
                  query={graphql`
                          query Projects {
                            info: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"}}, sort: {fields: [frontmatter___order], order: ASC}) {
                              nodes {
                                id
                                frontmatter {
                                  title
                                  color
                                  link
                                  icon
                                  altTitle
                                  badges
                                  order
                                }
                                rawMarkdownBody
                              }
                              totalCount
                            }
                          }`}
                  render={data => 
                    data.info.nodes.map((project, index) => (
                      <Card
                        key={project.id}
                        title={project.frontmatter.title}
                        description={project.rawMarkdownBody}
                        color={project.frontmatter.color}
                        link={project.frontmatter.link}
                        badges={project.frontmatter.badges}
                        icon={project.frontmatter.icon}
                        altTitle={project.frontmatter.altTitle}
                        last={index+1 === data.info.totalCount}
                      />
                    ))
                  }
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