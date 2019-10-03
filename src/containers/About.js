import React from 'react'
import styled from 'styled-components'

import Row from '../components/Row'
import Image from '../components/Image'
import TextBlock from '../components/TextBlock'
import NavBar from '../components/NavBar'

import AboutBackground from '../components/AboutBackground'

// How to do this?
import img from '../me.jpg'

const StyledAbout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`

const About = props => {
  return (
    <AboutBackground>
      <React.Fragment>
        <NavBar />
        <StyledAbout>
          <Row justifyContent='space-around'>
            <Image src='https://media.licdn.com/dms/image/C4E03AQE2eKJsujGaow/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=FGj5z1y4NKcTvGpBxOMuh0DcQtWzy-BNpyt9rQuTleY' />
            <TextBlock>
              I was born in India and moved to Memphis, TN when I was 10 months
              old and grew up there. I got a Bachelor’s of Science in Computer
              Science in December 2018 and started my Master’s of Science in
              Computer Science in August 2019. My dad is in IT and I have always
              been interested in tech. I started writing code in college and
              realized I wanted to become a developer, working to create and
              contribute to software that helps people. I don’t have any work
              experience except for interning at Patient Financial Services one
              summer in high school. I Configured a new Optical Character
              Recognition system to automate correspondence. The system was
              launched near the end of my internship and is still in use today.
              As an undergraduate student I got to work with Facebook to
              introduce more cybersecurity programs and initiatives to my
              university and I got to meet Facebook’s then chief security
              officer Alex Stamos. Usually reading articles and new updates
              about AI technology, watching tech videos.
            </TextBlock>
          </Row>
        </StyledAbout>
      </React.Fragment>
    </AboutBackground>
  )
}

export default About
