import React from 'react'
import styled from 'styled-components'

import Row from '../components/Row'
import Image from '../components/Image'
import TextBlock from '../components/TextBlock'
import NavBar from '../components/NavBar'

import ProjectsBackground from '../components/ProjectsBackground'
import ScrollUpButton from 'react-scroll-up-button'

// How to do this?
import img from '../me.jpg'

const StyledAbout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  padding-top: ${props => (props.paddingTop ? props.paddingTop : '10px')};
`

const Projects = props => {
  return (
    <ProjectsBackground>
      <div>
        <ScrollUpButton />
      </div>
      <React.Fragment>
        <NavBar />
        <StyledAbout>
          <Row justifyContent='space-around'>
            <Image
              paddingTop='10px'
              // height='300px'
              // width='300px'
              src='https://techcrunch.com/wp-content/uploads/2016/02/cleandatabase.jpg?w=730&crop=1'
            />
            <TextBlock paddingTop='140px'>
              Created a database schema representing People, their Location, and
              their Interests in order to connect individuals who are in the
              same location and share interests. <br />
              <br />
              <a
                href='https://github.com/fasttrackd-student-work/java-assignment-schema-design-AnubhawM'
                target='_blank'
              >
                View on GitHub
              </a>
            </TextBlock>
          </Row>
        </StyledAbout>
      </React.Fragment>
      <React.Fragment>
        <StyledAbout>
          <Row justifyContent='space-around'>
            <Image
              // height='300px'
              // width='300px'
              src='https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2012/06/06/47707665-twitter-bird-white-on-blue.530x298.jpg?v=1347910373'
            />
            <TextBlock paddingTop='140px'>
              Build a Twitter backend clone by implementing a RESTful API using
              Spring Boot, JPA, and Postgresql. We were tasked with implementing
              several endpoints such as those which retrieved all active users,
              created tweets, and deleted users. <br />
              <br />
              <a
                href='https://github.com/fasttrackd-student-work/spring-assessment-social-media-AnubhawM'
                target='_blank'
              >
                View on GitHub
              </a>
            </TextBlock>
          </Row>
        </StyledAbout>
      </React.Fragment>
      <React.Fragment>
        <StyledAbout>
          <Row justifyContent='space-around'>
            <Image
              // height='300px'
              // width='300px'
              src='https://www.historyanswers.co.uk/wp-content/uploads/2014/04/All-About-History-duel.jpg'
            />
            <TextBlock paddingTop='140px'>
              Developed a small, full-stack application which interfaced with
              GitHub's API to collect, modify, and display a user's profile and
              repository data. The application used a Node server exposing an
              API using Express. The frontend was created using HTML, CSS,
              JavaScript, and JQuery. <br />
              <br />
              <a
                href='https://github.com/fasttrackd-student-work/js-assessment-dev-duel-AnubhawM'
                target='_blank'
              >
                View on GitHub
              </a>
            </TextBlock>
          </Row>
        </StyledAbout>
      </React.Fragment>
    </ProjectsBackground>
  )
}

export default Projects
