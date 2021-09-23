import React from "react";
import {BrowserRouter, Switch} from 'react-router-dom';
import {Page} from './extensions/Page';

import Nav from './components/Nav';
import Footer from './components/Footer';

import About from './about/About';
import Ev3 from './ev3/Ev3';
import Home from './home/Home';
import Industry from './industry/Industry';
import Learning from './learning/Learning';
import Professional from './professional/Professional';
import Research from './research/Research';
import ScrollToTop from './components/ScrollToTop';
import Server from './server/Server';
import Speaking from './speaking/Speaking';
import Teaching from './teaching/Teaching';
import Technology from './technology/Technology';
import Tinkering from './tinkering/Tinkering';
import Tools from './tools/Tools';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <div className="App">
        
        <Nav></Nav>

        <main className="w3-padding-medium">

          <Switch>

            <Page exact path="/" component={Home} title=""></Page>

            <Page path="/teaching" component={Teaching} title="Teaching"></Page>
            <Page path="/research-publishings" component={Research} title="Research and Publishings"></Page>
            <Page path="/speaking-engagements" component={Speaking} title="Speaking Engagements"></Page>
            <Page path="/professional-development" component={Professional} title="Professional Development"></Page>
            <Page path="/about" component={About} title="About Me"></Page>

            <Page path="/tools" component={Tools} title="Classroom Tools"></Page>
            <Page path="/server-setup" component={Server} title="Server Setup"></Page>
            <Page path="/learning" component={Learning} title="Classroom Learning"></Page>
            <Page path="/ev3" component={Ev3} title="EV3 Resources"></Page>
            <Page path="/tinkering" component={Tinkering} title="Tinkering"></Page>

            <Page path="/industry-projects" component={Industry} title="Industry Projects"></Page>
            <Page path="/technology" component={Technology} title="Technology in the Classroom"></Page>
            
          </Switch>

        </main>

        <Footer></Footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
