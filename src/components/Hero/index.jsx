import React from "react";
import Particles from 'react-particles-js';
import 'typeface-montserrat/index.css';
import "./hero.scss";
import particlesJSON from './particles.json';

class Hero extends React.Component {
  render(props) {
    function Text(props){
      return(<h1 className="hero-text">{props.children}</h1>);
    }
    function SubText(props){
      return(<h2 className="hero-text">{props.children}</h2>);
    }
    return (
      <div className="hero-section">
        <div className="hero-text-center container">
          <div className="col-lg-9 m-auto">
            <SubText>Hola. Soy</SubText>
            <Text>ALEJANDRO</Text>
            <Text>AND I <span id="highlight">DEVELOP</span></Text>
            <Text>SOFTWARE
              <img src="./assets/sticker.png" className="sticker" alt="" />
            </Text>
          </div>
        </div>
        <Particles className={`hero ${this.props.class}`} params={particlesJSON} />
      </div>);
  }
}
export default Hero;