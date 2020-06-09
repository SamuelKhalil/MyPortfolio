import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import myself from "../assets/myImg.png"


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={myself}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Samuel Morkos Khalil</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Software Developer with more than 3 years' experience in development and testing. Proficient in problem-solving techniques and skilled in high-level programming languages. Adaptable and driven with strong work ethic and ability to thrive in team-based or individually motivated settings.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Sterling Heights, MI</p>
            <h5>Phone</h5>
            <p>(248) 508 - 3672</p>
            <h5>Email</h5>
            <p>samuel.m.khalil@gmail.com</p>
            <h5>Web</h5>
            <p>google.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            
            
            <Education
                 startYear={2017}
                 endYear={2019}
                 schoolName="Oakland Unversity"
                 schoolDescription="Completed a Bachelor of Science in Computer Science major. "
                  />

                      <hr style={{borderTop: '3px solid #e22947'}} />


              <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2019}
              jobName="Student Technology Analyst"
              jobDescription="
              •	Supported the Enterprise Applications department by utilizing a third-party application to convert paper forms used in various departments around campus to online forms that could be processed electronically (E-forms)
              •	Communicated with departments through FootPrints to identify needs of new E-forms or addition of new requirements
              •	Increased the usability of the E-forms by following the standards for accessible design and ensuring ADA compliance
              •	Created training documents and trained new employees on the use of the vendor application to develop E-forms
              "
              />

              <Experience
                startYear={2019}
                endYear={2019}
                jobName="Test Analyst"
                jobDescription="
                •	Developed various test plans and test cases from user stories and ticket requirements to drive test scripts
                •	Performed Agile Data-Driven Testing (DDT) using SQL Developer by executing test scripts and documenting the results
                •	Ensured consistency and increased efficiency of testing by automating test cases using Robot framework
                •	Coordinated all ticket assignments using JIRA project management system by utilizing time logging and bug reporting
                •	Created comprehensive documentation of the testing workflow using Confluence document management system
                "
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Java"
                progress={99}
                />
                <Skills
                  skill="MySQL"
                  progress={99}
                      />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                  skill="Javascript"
                  progress={70}
                  />
                  <Skills
                    skill="MongoDB"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={50}
                      />
              


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
