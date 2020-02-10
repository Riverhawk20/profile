import React from 'react';
import './project.css';
import CPlusPlus from '../images/c++.png';
import Bootstrap from '../images/bootstrap.png';
import HTML from '../images/HTML.png';
import CSS from '../images/CSS.png';
import Javascript from '../images/javascript.jpg';
import Jquery from '../images/jquery.png';
import ReactJS from '../images/react.png';
import Java from '../images/java.png'
import Placeholder from '../images/placeholder.png';
import Android from '../images/android.png';
import XML from '../images/xml.png';

function project(props){ 
    let images=[];
    for (let i=0;i<props.techArr.length;i++){
        let a;
        switch (props.techArr[i]){
            case "c++":
                a=CPlusPlus;
                break;
            case "bootstrap":
                a=Bootstrap;
                break;
            case "javascript":
                a=Javascript;
                break;
            case "reactjs":
                a=ReactJS;
                break;
            case "html":
                a=HTML;
                break;
            case "jquery":
                a=Jquery;
                break;
            case "css":
                a=CSS;
                break;
            case "java":
                a=Java;
                break;
            case "android":
                a=Android;
                break;
            case "xml":
                a=XML;
                break;
            default:
                a=Placeholder;
                break

        }
        images.push(<img src={a} alt='tech logo'/>);
    }
    let appImages=[];
    for (let i=0; i<props.appImg.length;i++){
        appImages.push(<img src={props.appImg[i]} id='app' alt='alt text'/>);
    }
    let link=[];
    if(props.link!=""){
        link.push(<a href={props.link} target="_blank"><button className='btn btn-success'>Link</button></a>);
    }
    return(
        <div className="container-fluid projectWrapper">
        <div className='container project'>
            {/* Snapshot of application */}
            {appImages}
            {/* Project Name */}
            <h3>{props.name}</h3>
            {/* Project description */}
            {props.appDescription}
            <h5>Technology</h5>
            {/* Technology Description */}
            <p>{props.techDescription}</p>
            {/* Technology logos */}
            <div>
                {images}
            </div>
            {/* Link if Applicable */}
            {link}
        </div>
        </div>
    );

}

export default project;