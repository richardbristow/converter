import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.div`
  h2 {
    margin-top: 0;
  }
`;

const About = () => (
  <StyledAbout>
    <h2>About</h2>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
       Delectus deleniti nam beatae sint voluptas ea blanditiis,
       sequi itaque animi vero nisi aperiam necessitatibus
       mollitia est voluptates nemo sit at temporibus?
    </p>
    <h3>Credits</h3>
    <ul>
      <li>react</li>
      <li>math.js</li>
      <li>fixe</li>
    </ul>
  </StyledAbout>
);


export default About;
