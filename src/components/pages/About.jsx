import React from 'react';
import StyledNavPage from '../shared/StyledNavPage';

const About = () => (
  <StyledNavPage>
    <h2>About</h2>
    <p>
      Converter is a webapp to convert between various units of measurement.
    </p>
    <p>
      It was built mainly as a way to learn various web technologies, one of
      them being css-grid, therefore it most likely will not render in IE
      correctly.
    </p>
    <p>
      If you are interested in seeing the code it&apos;s available on&nbsp;
      <a href="https://github.com/richardbristow/converter" title="Github">
        Github
      </a>
      .
    </p>
    <br />
    <h3>Libraries / API&apos;s used</h3>
    <ul>
      <li>
        <a href="https://reactjs.org" title="React">
          React
        </a>
      </li>
      <li>
        <a href="http://mathjs.org/" title="MathJs">
          Math.js
        </a>
      </li>
      <li>
        <a href="https://fixer.io/" title="FixerIO">
          Fixer.io
        </a>
      </li>
    </ul>
    <br />
    <h3>Icons</h3>
    <div>
      <span>
        Flag icons made by&nbsp;
        <a href="https://www.flaticon.com/authors/twitter" title="Twitter">
          Twitter
        </a>
        &nbsp;from&nbsp;
        <a href="https://www.flaticon.com" title="Flaticon">
          Flaticon.com
        </a>
      </span>
    </div>
    <div>
      <span>
        Bitcoin icon made by&nbsp;
        <a
          href="https://www.flaticon.com/authors/pixel-buddha"
          title="Pixel Buddha"
        >
          Pixel Buddha
        </a>
        &nbsp;from&nbsp;
        <a href="https://www.flaticon.com/" title="Flaticon">
          Flaticon.com
        </a>
      </span>
    </div>
    <div>
      <span>
        Mass icon made by&nbsp;
        <a href="http://www.freepik.com" title="Freepik">
          Freepik
        </a>
        &nbsp;from&nbsp;
        <a href="https://www.flaticon.com/" title="Flaticon">
          Flaticon.com
        </a>
      </span>
    </div>
    <div>
      <span>
        Temperature icon made by&nbsp;
        <a
          href="https://www.flaticon.com/authors/hirschwolf"
          title="hirschwolf"
        >
          hirschwolf
        </a>
        &nbsp;from&nbsp;
        <a href="https://www.flaticon.com/" title="Flaticon">
          Flaticon.com
        </a>
      </span>
    </div>
    <div>
      <span>
        All other icons from&nbsp;
        <a href="https://iconmonstr.com/about/#creator">Iconmonstr</a>
      </span>
    </div>
  </StyledNavPage>
);

export default About;
