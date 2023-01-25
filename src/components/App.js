import React, { useState } from 'react';

import Projects from './Projects';
import SocialProfiles from './socialProfiles';
import profile from "../assets/profile.png"
import Title from './Title';

const App = () => {
  const [showBio, setShowBio] = useState(false);

  const showDetails = () => {
    setShowBio(true);
  }
  return (
      <div className="App">
        <img src={profile} alt="profile" className="profile" />
        <h2>Hello </h2>
        <p>
          I am Sahed, I am {!showBio && <Title/>}  
        
        </p>
        <p>I always look forward to work with Amazaing projects</p>
        {!showBio && <button onClick={showDetails} type='button' >Show Details</button>}
        {showBio && 
          <div>
            <p>I also lover to watch movie</p>
            <p>Playing Ludo club with prova</p>

          </div>
        }
          <hr/>
          <Projects />
          <hr/>
          <SocialProfiles/>
      </div>
  );
}

export default App;
