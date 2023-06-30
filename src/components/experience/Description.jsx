import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark, funky,base16AteliersulphurpoolLight } from "react-syntax-highlighter/dist/esm/styles/prism"; 

import "./Description.css"; 

const CodeDisplay = () => {
let currentCode = "";
  const [displayedCode, setDisplayedCode] = useState("");

  const code = `
  import React from 'react';

  const Description = () => {
    const profileData = [
      { label: 'FullName', value: 'Gent Hulaj' },
      { label: 'Email', value: 'genthulaj@gmail.com' },
      { label: 'Location', value: 'Kosovo' },
      { label: 'Phone number', value: '+383 49-702-694' },
    ];
  
    const descriptionText = [
      'Hello there! I am a passionate programmer from Kosovo.',
      'I love diving into complex problems and',
      'finding elegant solutions through programming.',
      'With a strong background in coding and',
      'a deep curiosity for technology,',
      'I strive to create innovative and efficient software solutions.',
    ];
  
    return (
      <div className="about-me">
        <h1>About Me</h1>
        <div className='desc-cont'>
          <div className="profile">
            {profileData.map((data) => (
              <div key={data.label}>
                <h1>{data.label}: {data.value}</h1>
              </div>
            ))}
          </div>
          <p className="description">
            {descriptionText.map((text, index) => (
              <div key={index}>
                {text}<br />
              </div>
            ))}
          </p>
        </div>
      </div>
    );
  }
  
  export default Description;
  `;

useEffect(() => {
  let index = 0;
  const intervalId = setInterval(() => {
    if (index < code.length) {
      currentCode += code[index];
      setDisplayedCode(currentCode);
      index++;
    } else {
      clearInterval(intervalId);
    }
  }, 10); 

  return () => clearInterval(intervalId);
}, []); 

  

  return (
    <div className="code-display-wrapper">
      <SyntaxHighlighter language="jsx"  style={atomDark} className="CodeDisplay">
        {displayedCode}
      </SyntaxHighlighter>
      <div>
        <h1>
         Gent Hulaj
        </h1>
        <p>Gentihulaj12@gmail.com</p>
        <p>+383 49-702-694</p>
          <p>Hello there!
          <br/>
             I am a passionate programmer from Kosovo.
            <br/>
          I love diving into complex problems and finding elegant 
          <br/>
          
          solutions through programming. 
          <br/>

          With a strong background in coding and a deep curiosity for technology, 
          <br/>

          I strive to create innovative and efficient software solutions.</p>
      </div>
    </div>
  );
};

export default CodeDisplay;
