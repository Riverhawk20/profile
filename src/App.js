import React from 'react';
import './App.css';
import Project from './project/project';
import Dino1 from './images/Dino1.png';
import Dino2 from './images/Dino2.png';
import PTCB1 from './images/ptcb1.png';
import PTCB2 from './images/ptcb2.png';
import PTCB3 from './images/ptcb3.png';


function App() {
  return (
    <div className="App">
      <div className='header container-fluid'>
        <div className=" headerWrapper">
          <h1> Caden Rice </h1>
          <h3> Aspiring Software Engineer</h3>
          <h4> Studying CSE at The Ohio State University </h4>
        </div>
      </div>
      {/* 

         <Project  name={" "}
        appImg={[ ]} 
        link={" "}
        appDescription={<div> 
          
          </div>}
        techDescription={<div> 
          
          </div>}
        techArr={[" "]}/>
        */}
        <Project  name={"Internship: Android Testing App"}
        appImg={[PTCB1,PTCB2,PTCB3]} 
        link={""}
        appDescription={<div> 
          <p>This android application was made for a remote internship with Coventry House Publishing.</p>
          <p>I worked closely with the publisher to deliver what was desired by the company. This app is a testing/quiz app for students preparing for the PTCB exam. The app includes 10+ tests and 1000+ questions. My job was to develop the app and copy over questions/tests for use in the app.</p>
          </div>}
        techDescription={<div> 
          The app was developed in Android Studio using Java and XML.
          </div>}
        techArr={["java", "xml", "android"]}/>
        <Project  name={"FEH Software Design Project: Chrome Dinosaur Game"}
        appImg={[Dino1, Dino2]} 
        link={"https://u.osu.edu/fehsdp19pac0800c1/"}
        appDescription={<div><p>This project was made for a software design project in the Fundamentals of Engineering Honors (FEH) class at OSU.</p>
          <p>This project was done with one other person. We designed a game on the proteus that mimics the offline chrome dinosaur game. Information on the proteus can be found <a href="https://u.osu.edu/fehproteus/" target="_blank" rel="noopener">here</a>. The project was fully documented on a website that is linked to the green link button below. The password to access the site is FEH_SDP_2019.</p>
          <p>I personally worked on the game logic/code, linking the menu and game, statistics from the game to the menu, and various forms of documentation.</p></div>}
        techDescription={<p>The game was written in C++. The FEH library with C++ ran the graphics of the game.</p>}
        techArr={["c++"]}
        />
        
    </div>
  );
}

export default App;
