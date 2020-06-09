import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import myself from "../assets/myImg.png"


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={myself}
              alt="My Image"
              className="myimage-img"
              />

            <div className="banner-text">
              <h1>Full Stack Java Developer</h1>

            <hr/>
          <p><h5>Programming Languages: Java | JavaScript | SQL | HTML5 | CSS3</h5>
          <h5> Framworks: Bootstrap | React | AngularJS | Spring</h5> 
          <h5>Technologies: Microservices | MongoDB | MySQL </h5></p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/samuel-khalil-8565b4126/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/SamuelKhalil" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Hacker Rank */}
            <a href="https://www.hackerrank.com/SamKhalil" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-hackerrank" aria-hidden="true" />
          </a>
          {/* Youtube */}
          <a href="https://www.youtube.com/channel/UC2Psko_yR5W7yNyY8C9Kluw/featured?view_as=subscriber" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
