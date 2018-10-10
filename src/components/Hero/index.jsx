import React from "react";
import Particles from 'react-particles-js';
import 'typeface-montserrat';
import "./hero.scss";
import particlesJSON from './particles.json';

class Hero extends React.Component {
  render() {
    function Text(props){
      return(<h1 className="hero-text">{props.children}</h1>);
    }
    function SubText(props){
      return(<h2 className="hero-text">{props.children}</h2>);
    }
    return (<div className="hero-section ">
          <div className="hero-text-center container">
            <div className="col-lg-9 m-auto">
              <SubText>Hi. Hola. I am</SubText>
              <Text>ALEJANDRO</Text>
              <Text>AND I <span id="highlight">DEVELOP</span></Text>
              <Text>SOFTWARE
                <img src="./assets/sticker.png" className="sticker"/>
              </Text>
            </div>
          </div>
          <Particles className="hero" params={particlesJSON}/>
        </div>
    );
  }
}
export default Hero;