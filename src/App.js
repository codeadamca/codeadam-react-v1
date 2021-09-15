import React,{Component} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Page} from './extensions/Page';

import Nav from './components/Nav';
import Footer from './components/Footer';

import About from './about/About';
import Home from './home/Home';
import Industry from './industry/Industry';
import Professional from './professional/Professional';
import Research from './research/Research';
import Speaking from './speaking/Speaking';
import Teaching from './teaching/Teaching';
import Tools from './tools/Tools';

import './App.css';

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

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Nav></Nav>

        <main className="w3-padding-medium">
  
          <Switch>
            <Page exact path="/" component={Home}></Page>
            <Page path="/teaching" component={Teaching}></Page>
            <Page path="/research-publishings" component={Research}></Page>
            <Page path="/speaking-engagements" component={Speaking}></Page>
            <Page path="/professional-development" component={Professional}></Page>
            <Page path="/about" component={About} title="About Me"></Page>

            <Page path="/tools" component={Tools} title="Classroom Tools"></Page>

            <Page path="/industry-projects" component={Industry}></Page>
          </Switch>

        </main>

        <Footer></Footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
