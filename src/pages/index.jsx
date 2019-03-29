import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Footer from "../components/Footer";

class Index extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} title="Home">
        <div>
          <Helmet />
          <Hero>
          </Hero>
          <AboutMe />
          <Projects />
          <Resume />
          <Footer />
        </div>
      </Layout>
    );
  }
}

export default Index; 