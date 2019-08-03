import React from "react";
import { StaticQuery, graphql } from "gatsby"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Fullscreen from "react-full-screen";
import Draggable from 'react-draggable';
import './termynal.scss';

class Terminal extends React.Component {
    constructor() {
        super();
        this.state = {
          hidden:false,
          isFull: false,
          position: {
            x: 0,
            y: 0,
          }
        };
    }
    hide = () => {
      this.setState({ hidden: !this.state.hidden, position: { x: 0, y: 0}})
    }
    goFull = () => {
      this.setState({ isFull: !this.state.isFull, hidden: false, position: { x: 0, y: 0 } });
    }
    close = () => {
        window.open('404', '_blank');
    }
    test = (e, data) =>{
      this.setState({ position: {x:data.x ,y:data.y}});
    }
    finishedType = () => {
    }
    render(){
        function Contents(props) {
          return (
            <div
              id="termynal"
              className="inner-terminal"
              style={{ display: props.hidden ? 'none' : 'block' }}
            >
              <div data-ty>
                <b className="text-info">alejandromartinez.soy</b> on{' '}
                <b className="text-primary">master</b> is 📦{' '}
                <b className="text-danger">v1.1.0</b> via{' '}
                <b className="text-success">⬢ v10.11.0</b>
              </div>
              <div data-ty="input">tree ./experience</div>
              <div>
                <div data-ty="progress">.</div>
                <StaticQuery
                  query={graphql`
                          query Experience {
                            info: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/experience/"}},
                              sort: {fields: frontmatter___end_date, order: DESC}
                            ) {
                              nodes {
                                id
                                frontmatter {
                                  company
                                  position
                                  team
                                  start_date(formatString: "MMMM YYYY")
                                  end_date(formatString: "MMMM YYYY")
                                  city
                                  state
                                }
                                rawMarkdownBody
                              }
                              totalCount
                            }
                          }
                        `}
                  render={data => ( 
                    <div>
                      {
                        data.info.nodes.map(info => (
                          <div key={info.id}>
                            <div data-ty data-ty-prompt={`├── [${info.frontmatter.city} / ${info.frontmatter.state}]`}>
                              <OutboundLink
                                className="text-danger font-weight-bold"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={info.frontmatter.link}
                              >
                                {info.frontmatter.company}
                              </OutboundLink>
                            </div>
                            <div data-ty data-ty-prompt={`│ └── (${info.frontmatter.start_date} - ${info.frontmatter.end_date})`}>
                              <b>{info.frontmatter.position}</b>
                              <div className="job-desc">
                                {info.rawMarkdownBody.split('\n').map(tab => (<div key={tab} className="tab">{tab}</div>))}
                              </div>
                            </div>
                          </div>))
                      }
                      <div data-ty data-ty-prompt="└──"><span role="img" aria-label="Done">✨</span><span className="text-info">Done:</span> {data.info.totalCount} work positions.</div>
                    </div>
                  )}
                />
              </div>
            </div>
          )
        };
        return (
          <Fullscreen
            enabled={this.state.isFull}
            onChange={isFull => this.setState({isFull})}
          >
            <Draggable handle=".buttons" position={this.state.position} onStop={this.test}>
              <div className="col-12 terminal bg-term shadow">
                <div className="buttons">
                  <button className="btn btn-term term-close" onClick={this.close} title="Close" />
                  <button className={`btn btn-term term-min ${this.state.isFull ? 'disabled' : ''}`} onClick={this.hide} disabled={this.state.isFull} title="Minimize" />
                  <button className="btn btn-term term-max" onClick={this.goFull} title="Maximize" />
                </div>
                <Contents hidden={this.state.hidden} />
              </div>
            </Draggable>
          </Fullscreen>);
  }
}
Terminal.defaultProps = { hidden: false };

export default Terminal;