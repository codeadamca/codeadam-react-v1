import React,{Component} from "react";
import {Link} from 'react-router-dom';

import Title from './../components/Title';

import EvaluationList from './/TeachingEvaluationList';
import TeachingTechnologyList from './TeachingTechnologyList';

import profile from './../images/profile-self.jpg';

import apache from './../images/topics/apache.png';
import arduino from './../images/topics/arduino.png';
import csharp from './../images/topics/csharp.png';
import css from './../images/topics/css.png';
import d3 from './../images/topics/d3.png';
import es6 from './../images/topics/es6.png';
import express from './../images/topics/express.png';
import firebase from './../images/topics/firebase.png';
import git from './../images/topics/git.png';
import github from './../images/topics/github.png';
import googleCloud from './../images/topics/google-cloud.png';
import heroku from './../images/topics/heroku.png';
import html from './../images/topics/html.png';
import javascript from './../images/topics/javascript.png';
import jquery from './../images/topics/jquery.png';
import json from './../images/topics/json.png';
import less from './../images/topics/less.png';
import mamp from './../images/topics/mamp.png';
import mongo from './../images/topics/mongo.png';
import mysql from './../images/topics/mysql.png';
import nginx from './../images/topics/nginx.png';
import nodejs from './../images/topics/nodejs.png';
import npm from './../images/topics/npm.png';
import obs from './../images/topics/obs.png';
import php from './../images/topics/php.png';
import pm2 from './../images/topics/pm2.png';
import pug from './../images/topics/pug.png';
import python from './../images/topics/python.png';
import raspberryPi from './../images/topics/raspberry-pi.png';
import react from './../images/topics/react.png';
import sass from './../images/topics/sass.png';
import scratch from './../images/topics/scratch.png';
import socket from './../images/topics/socket.png';
import three from './../images/topics/three.jpeg';
import typescript from './../images/topics/typescript.png';
import ubuntu from './../images/topics/ubuntu.png';
import wordpress from './../images/topics/wordpress.png';

class Teaching extends Component {
  render() {
    return (
      <div className="Teaching">

      <div className="ca-nav-spacer w3-hide-small"></div>

      <Title title="Teaching"></Title>

      <article className="w3-text-dark-gray ca-container-600">
          
        <h2 className="w3-text-red w3-center">Teaching Philosophy</h2>

        <div className="w3-center">
          <img src={profile} alt="Adam Thomas" width="300" />
        </div>

        <p>
          I teach code. I have been teaching code at <a href="http://humber.ca/">Humber College</a> since 2002. Currently I teach code in three programs: <a href="https://mediastudies.humber.ca/programs/graphic-design.html">Graphic Design</a>, <a href="https://mediastudies.humber.ca/programs/multimedia-design-and-development.html">Multimedia, Design and Development</a>, and <a href="https://mediastudies.humber.ca/programs/web-design-interactive-media.html">Web Design and Interactive Media</a>. 
        </p> 

        <p>
          My philosophy of teaching has been built around my experience teaching code. A key part of that experience has been teaching code to students who are not looking to be become career programmers and may only be in the course as it is a requirement. In an attempt to engage these students I have integrated a series of activities: group problem solving, coding art, and coding tangible elements (<a href="https://www.arduino.cc/">Arduino</a>, <a href="https://www.raspberrypi.org/">Raspberry Pi</a>, and <a href="https://www.lego.com/en-us/mindstorms/about-ev3">LEGO<small>®</small> EV3</a>). 
        </p>

        <p>
          Code in particular must be learned by <Link to="/tinkering">doing</Link>. By trying, failing, failing some more, understanding, and finally succeeding. In class I usually spend about 20% of the class lecturing coding concepts and the other 80% is spent with sample code, in class exercises, and group activities. 
        </p>

        <p>
          I am also an advocate for the use of <Link to="/technology">technology in the classroom</Link>. There is a fine balance between using technology appropriately and using technology for technology sake. If used effectively, technology can greatly enhance classroom learning and accessibility.
        </p>

        <hr className="ca-hr" />

      </article>

      <article className="w3-text-dark-gray ca-container-600">
          
        <h2 className="w3-text-red w3-center">Current Technology</h2>

        <p>
          The best part of being an instructor in the technology field is that the learning never stops. The list of topics I get to teach is continually changing, here are some of the topics I have recently taught in class:
        </p>

        <TeachingTechnologyList />

        <p>
          One of the best parts about teaching code at a postsecondary institution is the amount of new technology I have to opportunity to work with. I have started a <Link to="/learning/list">video library</Link> of the technology I have worked with.
        </p>

        <hr className="ca-hr" />

      </article>

      <article className="w3-text-dark-gray ca-container-600">
          
          <h2 className="w3-text-red w3-center">Student Industry Projects</h2>
  
          <p>
            Having students work on real-life group projects outside of the classroom can be one of the best learning experiences. Below is a list of some of the projects I have facilitated between students and <a href="https://humber.ca/">Humber College</a> or industry partners. 
          </p>
  
          <div className="w3-center">
            <i className="fas fa-industry w3-text-dark-gray" aria-hidden="true"></i>
            &nbsp;
            <Link to="/industry-projects">View Industry Projects</Link>
          </div>

          <hr className="ca-hr" />
  
        </article>

        <EvaluationList evaluations={evaluations}></EvaluationList>

      </div>
    );
  }
}

export default Teaching;

const evaluations = [
  {content: 'The professionalism of the professor is admiring, and he seems to genuinely care about seeing his students succeed.'},
  {content: 'No student wants an unfriendly unapproachable teacher. Adam is a breath of fresh air, he is approachable and appears to really care.'},
  {content: 'The use of technology in the classroom is awesome, especially screen sharing through collaborate!'},
  {content: 'Super awesome instructor! Extremely smart! Cares about his students, really wants them to succeed. He is great at teaching, really knows how to best approach teaching code to students. Always helping his students! Thanks to him I now have a great job! Than you Adam.'},
  {content: 'Adam, each year, is a phenomenal professor. He goes at an easy to learn pace, very friendly, and his teacher style is what makes every student want to show up to his classes. Excellent work!'},
  {content: 'Adam is a beautiful human being, who is my absolute favourite professor. He teaches so nicely, and makes sure we know what we are doing, by explaining LINE FOR LINE what this code does, and codes with us, using notes of course. Adam, it was a pleasure to have you as an instructor, and I\'ll miss seeing you every week, and learning cool new things. I\'d literally love to work for you one day.'}
];