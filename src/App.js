import React,{Component} from "react";


import academia from './images/academia.jpeg';
import arduino from './images/arduino.png';
import backgroundArduino from './images/background-arduino.jpg';
import codeBlock from './images/code-block.png';
import csharp from './images/csharp.png';
import facebook from './images/facebook.jpeg';
import github from './images/github.jpeg';
import instagram from './images/instagram.jpeg';
import javascript from './images/javascript.png';
import json from './images/json.png';
import linkedin from './images/linkedin.jpeg';
import mitacsBiotalent from './images/mitacs-biotalent.jpeg';
import nodejs from './images/nodejs.png';
import stackoverflow from './images/stackoverflow.png';
import twitter from './images/twitter.jpeg';
import youtube from './images/youtube.jpeg';

import ArticleList from "./components/ArticleList";
import Calendly from './components/Calendly';
import CodeAdam from './components/CodeAdam';
import FooterSocial from './components/FooterSocial';
import HeaderHome from './components/HeaderHome';
import HeaderTitle from './components/HeaderTitle';
import Nav from './components/Nav';
import NavCards from './components/NavCards';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Nav></Nav>

      <HeaderHome></HeaderHome>

      <main className="w3-padding-medium">
 
        <HeaderTitle title="Testing"></HeaderTitle>

        <ArticleList articles={articles}></ArticleList>

        <Calendly></Calendly>

        <NavCards title="Teaching Portfolio" links={portfolio}></NavCards>

        <NavCards title="In the Classroom" links={classroom}></NavCards>

        <CodeAdam></CodeAdam>

        <FooterSocial links={social}></FooterSocial>

      </main>

    </div>
  );
}

const portfolio = [
  {icon: 'fas fa-laptop-code', href: '/teaching', name: 'Teaching' },
  {icon: 'fas fa-book', href: '/research-publishings', name: 'Research Publishings' },
  {icon: 'fas fa-chalkboard', href: '/speacking-engagements', name: 'Speaking Engagements' },
  {icon: 'fas fa-graduation-cap', href: '/professional-development', name: 'Professional Development' },
  {icon: 'fas fa-user', href: '/about', name: 'About Me' }
];

const classroom = [
  {icon: 'fas fa-code', href: '/learning/list', name: 'Teaching' },
  {icon: 'fas fa-tools', href: '/tools', name: 'Research Publishings' },
  {icon: 'fas fa-server', href: '/server-setup', name: 'Speaking Engagements' },
  {icon: 'fas fa-robot', href: '/resources', name: 'Professional Development' },
  {icon: 'fas fa-hammer', href: '/tinkering', name: 'About Me' }
];

const social = [
  {image: academia, url: 'https://humber.academia.edu/AdamThomas'},
  {image: facebook, url: 'https://www.facebook.com/adambenjaminthomas'},
  {image: github, url: 'https://github.com/codeadamca'},
  {image: instagram, url: 'https://www.instagram.com/codeadamca/'},
  {image: linkedin, url: 'https://www.linkedin.com/in/adam-thomas-6b563012'},
  {image: stackoverflow, url: 'https://stackoverflow.com/users/9015675/adam'},
  {image: twitter, url: 'https://twitter.com/codeadamca'},
  {image: youtube, url: 'https://www.youtube.com/channel/UCvn-c8MnpjythwWKDi5qMvA'}
];

const articles = [
  {
    title: 'BrevisRefero and BioTalent', 
    image: mitacsBiotalent, 
    content: '<p>In September of 2021 I will be the faculty supervisor for a <a href="https://www.biotalent.ca/">BioTalent Canada</a> grant between <a href="https://www.brevisrefero.com/">BrevisRefero</a> and <a href="https://humber.ca/">Humber College</a>.&nbsp;</p>',
    image: mitacsBiotalent,
    resources: [
      {url: 'https://www.biotalent.ca/', name: 'BioTalent'},
      {url: 'https://humber.ca/', name: 'Humber College'},
      {url: 'https://www.brevisrefero.com/', name: 'BrevisRefero'}
    ],
    date: 'Sep 7, 2021'
  }
];

export default App;
