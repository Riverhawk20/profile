import React from 'react';
import './App.css';
import Project from './project/project';
import Dino1 from './images/Dino1.png';
import Dino2 from './images/Dino2.png';
import PTCB1 from './images/ptcb1.png';
import PTCB2 from './images/ptcb2.png';
import PTCB3 from './images/ptcb3.png';
import Valorant1 from './images/valorant1.png';
import Valorant2 from './images/valorant2.png';
import Valorant3 from './images/valorant3.png';
import Robot1 from './images/robot1.png';
import Reaction1 from './images/reaction1.png';
import Reaction2 from './images/reaction2.png';
import FCC1 from './images/fcc.JPG';
import FCC2 from './images/fcc2.JPG';




function App() {
  return (
    <div className="App">
      <div className='header container-fluid'>
        <div className=" headerWrapper">
          <h1> Caden Rice </h1>
          <h3> Aspiring Software Engineer</h3>
          <h4> Studying CSE at The Ohio State University </h4>
          <h6>GPA: 3.9</h6>
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
        <Project  name={"Internship: Android Testing Apps"}
        appImg={[PTCB1,PTCB2,PTCB3]} 
        link={["https://play.google.com/store/apps/details?id=com.coventrybooks.realestateapp&hl=en_US","https://play.google.com/store/apps/details?id=com.coventrybooks.quizapp","https://play.google.com/store/apps/details?id=com.coventrybooks.top300drugsapp"]}
        appDescription={<div> 
          <p>3 android applications were made for a remote internship with Coventry House Publishing.</p>
          <p>I worked closely with the publisher to deliver what was desired by the company. Three similar testing/quiz apps were made to prepare for various exams. The 3 apps contain over 2500 questions and 24 tests in total. My job was to develop the app and copy over questions/tests for use in the apps.</p>
          </div>}
        techDescription={<div> 
          The apps were developed in Android Studio using Java, EasySQL, and XML.
          </div>}
        techArr={["java", "xml", "android", "sql"]}/>

        <Project  name={"Robot Design Project FEH"}
        appImg={[Robot1 ]} 
        link={["https://u.osu.edu/feh20m1/"]}
        appDescription={<div> 
          <p>This project was made in my second semester of Fundamentals of Engineering Honors (FEH).</p>
<p>The purpose of this project was to create an autonomous robot to complete various tasks on an obstacle course. Due to the coronavirus, we were unable to get to the competition stage of the project. The class was approximately 80% done with the project and was about to enter the competition stage before school was moved online. I worked in a team of 4 to fully brainstorm, design, build, program, and test a functional robot.</p>
<p>My primary role was coding, testing the robot, making drawings and models in SolidWorks, and thoroughly documenting the project (final report, video presentation, website, etc.). The website containing the documentation is linked to the green link button below. The password to access this site is m12020.</p>
          </div>}
        techDescription={<div> 
          <p>The robot's logic was written in C++. The model and drawings were made in SolidWorks</p>
          <p><b>The password for the link below is 'm12020'</b></p>
          </div>}
        techArr={["c++"]}/>

        <Project  name={"Valorant Assistant"}
        appImg={[ Valorant1, Valorant2, Valorant3]} 
        link={["https://play.google.com/store/apps/details?id=com.app.valorantassistant&hl=en_US"]}
        appDescription={<div> 
          <p>I made this app for my own entertainment and development as a developer.</p>
<p>This project was done while I was in quarantine. The app's purpose is to be an assistant for the game Valorant. It contains information about all the agents, weapons, maps, ranks, and skins. The app gets images from firebase. This allows me to quickly add skins to the app without requiring an update.</p>         </div>}
        techDescription={<div> 
          <p>The app was developed in Android Studio using Java, XML, and Firebase.</p>
          </div>}
        techArr={["java", "xml", "android", "firebase"]}/>
        
        <Project  name={"FEH Software Design Project: Chrome Dinosaur Game"}
        appImg={[Dino1, Dino2]} 
        link={["https://u.osu.edu/fehsdp19pac0800c1/"]}
        appDescription={<div><p>This project was made for a software design project in the Fundamentals of Engineering Honors (FEH) class at OSU.</p>
          <p>This project was done with one other person. We designed a game on the proteus that mimics the offline chrome dinosaur game. Information on the proteus can be found <a href="https://u.osu.edu/fehproteus/" target="_blank" rel="noopener">here</a>. The project was fully documented on a website that is linked to the green link button below. The password to access the site is FEH_SDP_2019.</p>
          <p>I personally worked on the game logic/code, linking the menu and game, statistics from the game to the menu, and various forms of documentation.</p></div>}
        techDescription={<div><p>The game was written in C++. The FEH library with C++ ran the graphics of the game.</p><p><b>The password for the link below is 'FEH_SDP_2019'</b></p></div>}
        techArr={["c++"]}
        />
        <Project  name={"Reaction Time and Accuracy Test"}
        appImg={[Reaction1,Reaction2 ]} 
        link={["https://play.google.com/store/apps/details?id=com.CadenRice.ReactionTimeGame"]}
        appDescription={<div> 
          <p>I made this app for my own entertainment and desire to learn game development/Unity.</p>
<p>This project was developed in Unity and published to the Google Play store. This is a simple game where circles pop up and grow to a certain size then shrink until it 'disappears.' The goal of this game is to tap as many circles as you can without losing 3 lives. You lose a life when you let a circle 'disappears' or the screen is miss clicked. There are three levels of difficulties that alter how fast the circles pop up. The game keeps track of your high score and saves it to the device.</p>
          </div>}
        techDescription={<div> 
          <p>This app was developed in C# and Unity</p>
          </div>}
        techArr={["unity", "c#"]}/>
        <Project  name={"Free Code Camp"}
        appImg={[FCC1,FCC2 ]} 
        link={["https://codepen.io/collection/nbwwQQ?cursor=ZD0wJm89MSZwPTEmdj0xMDQwMzU2"]}
        appDescription={<div> 
          <p>Completed approximately 400 hours of coursework focused on web development. Built several projects such as Tic Tac Toe, Simon Says, Twitch API display, and more. I also completed several algorithms.</p>
          <p>The projects I made were written on codepen.io and are linked below. Lessons and algorithms were written on <a target="_blank" href="https://www.freecodecamp.org/">Free Code Camp</a>. I completed this primarily in 2017 and really got me into developing.</p>
          </div>}
        techDescription={<div> 
          <p>Projects and lessons were programmed in html, css, bootstrap, and javascript.</p>
          </div>}
        techArr={["html", "css", "javascript", "bootstrap"]}/>
        
        
    </div>
  );
}

export default App;
