import React from "react";
import Helmet from "react-helmet";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Layout from '../components/layout'

class Index extends React.Component {
  render() {
    return (
      <Layout title="Home">
        <Helmet />
        <Hero class="hero-min"/>
        <AboutMe />
        <section className="section profile-page">
            <div className="container">
            <div className="card card-profile shadow mt--300">
              <div className="px-4">
                <div className="row justify-content-center">
                  <div className="col-3">
                    <div className="card-profile-image">
                      <a href="#">
                          <img src="https://images.unsplash.com/photo-1549366021-9f761d450615?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200" className="rounded-circle" />
                      </a>
                    </div>
                    </div>

                    <div className="col-7 ml-4">

                      <div className="mt-3">
                        <h3>Some Project
                  </h3>
                        <div className="h6 font-weight-300"><i className="ni location_pin mr-2"></i>Bucharest, Romania</div>

                        <div><i className="ni education_hat mr-2"></i>University of Computer Science</div>
                      </div></div>
                  </div>

                  <div className="mt-5 py-5 border-top ">
                    <div className="row justify-content-center">
                      <div className="col-lg-9">
                        <p>An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
                        <a href="#">Show more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </Layout>
    )}
  }
export default Index; 