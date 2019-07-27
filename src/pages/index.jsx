import React from "react";
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
          <Hero />
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