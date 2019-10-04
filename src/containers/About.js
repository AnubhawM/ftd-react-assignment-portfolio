import React from 'react'
import styled from 'styled-components'

import Row from '../components/Row'
import Image from '../components/Image'
import TextBlock from '../components/TextBlock'
import NavBar from '../components/NavBar'

import AboutBackground from '../components/AboutBackground'

import YouTube from 'react-youtube'
import ScrollUpButton from 'react-scroll-up-button'

const StyledAbout = styled.div`
  // height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  padding-top: ${props => (props.paddingTop ? props.paddingTop : '100px')};
`

const About = props => {
  return (
    <AboutBackground>
      <div>
        <ScrollUpButton />
      </div>
      <React.Fragment>
        <NavBar />
        <StyledAbout paddingTop='20px'>
          <Row justifyContent='space-around'>
            <Image
              paddingTop='50px'
              src='https://media.licdn.com/dms/image/C4E03AQE2eKJsujGaow/profile-displayphoto-shrink_200_200/0?e=1575504000&v=beta&t=FGj5z1y4NKcTvGpBxOMuh0DcQtWzy-BNpyt9rQuTleY'
            />
            <TextBlock paddingTop='150px'>
              I was born in India and moved to Memphis, TN when I was 10 months
              old and grew up there. I got a Bachelor’s of Science in Computer
              Science in December 2018 and started my Master’s of Science in
              Computer Science in August 2019. My dad is in IT and I have always
              been interested in tech. I started writing code in college and
              realized I wanted to become a developer, working to create and
              contribute to software that helps people.
            </TextBlock>
          </Row>
        </StyledAbout>
      </React.Fragment>

      <React.Fragment>
        <StyledAbout paddingTop='20px'>
          <Row justifyContent='space-around'>
            <Image
              paddingTop='100px'
              src='data:image/png;base64,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'
            />
            <TextBlock paddingTop='200px'>
              During a summer in high school, I got the opportunity to intern at
              Methodist Le Bonheur Healthcare's Patient Financial Services
              department as part their VolunTeen program. I Configured a new
              Optical Character Recognition system to automate correspondence.
              The system was launched near the end of my internship and is still
              in use today.
            </TextBlock>
          </Row>
        </StyledAbout>
      </React.Fragment>

      <React.Fragment>
        <StyledAbout paddingTop='100px'>
          <Row justifyContent='space-around'>
            <div padding-top='100px'>
              <iframe
                allowFullScreen='true'
                frameBorder='0'
                width='395'
                height='405'
                src='https://www.youtube.com/embed/bLgl8rbsJDA'
              />
            </div>

            <TextBlock paddingTop='120px'>
              During my Junior year, a couple of friends and I decided to
              participate in our university's first-ever hackathon. We built a
              miniature crane operated by a Myo armband with a DC motor and
              servo.
            </TextBlock>
          </Row>
        </StyledAbout>
      </React.Fragment>

      <React.Fragment>
        <StyledAbout paddingTop='10px'>
          <Row justifyContent='space-around'>
            <Image
              height='500px'
              paddingTop='100px'
              src='https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Flh3.googleusercontent.com%2Fb4mbSvANnjNos7ovCoUn4q0zDjrEqanOy7q_UZK-LRGvBQwz3Bw-UZeLuTlWBeQ6KLWwiOJkkkoaU_hGeB0_HKfcblp_bzWFmlwXA31FSCVM2goMLzOA3kUZC2Yb8SiRBRdY0ILi7A'
            />
            <TextBlock paddingTop='280px'>
              In my Junior and Senior years, I got to work with Facebook to
              introduce more cybersecurity programs and initiatives to my
              university. I also participated in and was responsible for
              managing trips to technical conferences and to Facebook HQ.
            </TextBlock>
          </Row>
        </StyledAbout>
      </React.Fragment>
    </AboutBackground>
  )
}

export default About
