import React,{Component} from "react";
import {Link} from 'react-router-dom';

import PhotoList from './../components/PhotoList';
import SocialList from '../components/SocialList';
import Title from './../components/Title';

import AboutEducationList from './AboutEducationList';
import AboutJobList from './AboutJobList';

import academia from './../images/academia.jpeg';
import facebook from './../images/facebook.jpeg';
import flickr from './../images/flickr.jpeg';
import github from './../images/github.jpeg';
import instagram from './../images/instagram.jpeg';
import linkedin from './../images/linkedin.jpeg';
import profile from './../images/profile.jpg';
import stackoverflow from './../images/stackoverflow.png';
import tinkercad from './../images/tinkercad.png';
import twitch from './../images/twitch.jpeg';
import twitter from './../images/twitter.jpeg';
import youtube from './../images/youtube.jpeg';

import instagramAlgonquin from './../images/instagram-algonquin.jpg';
import instagramArduino from './../images/instagram-arduino.jpg';
import instagramCustomPc from './../images/instagram-custom-pc.jpg';
import instagramLego from './../images/instagram-lego.jpg';
import instagramNuggets from './../images/instagram-nuggets.jpg';
import instagramRoot from './../images/instagram-root.jpg';

import brevisRefero from './../images/logo-brevisrefero.png';
import humber from './../images/logo-humber.jpg';
import rht from './../images/logo-rht.png';
import royalRoads from './../images/logo-royal-roads.png';

class About extends Component {
  render() {
    return (
      <div className="About">

        <div className="ca-nav-spacer w3-hide-small"></div>

        <Title title="About Me"></Title>

        <article className="w3-text-dark-gray ca-container-600">
            
          <h2 className="w3-text-red w3-center">Abstract</h2>
      
          <div className="w3-center">
            <img src={profile} alt="Adam Thomas" width="300" />
          </div>
      
          <p>
            I live in Milton, Canada with my wife and three kids. We spend our free time playing board games, camping, cottaging, rock climbing, biking, and generally enjoying the outdoors.  
          </p>
          
          <p>
            I code for fun. I enjoy spending quiet time <Link to="/learning/list">learning code</Link>; a new language, an old language in a new environment, a new framework, or just tinkering with new technology. 
          </p>

        </article>

        <hr className="ca-hr" />

        <PhotoList photos={photos}></PhotoList>
        <SocialList links={social}></SocialList>
        <AboutEducationList educations={educations}></AboutEducationList>
        <AboutJobList jobs={jobs}></AboutJobList>

      </div>
    );
  }
}

export default About;

const photos = [
  {image: instagramAlgonquin},
  {image: instagramArduino},
  {image: instagramCustomPc},
  {image: instagramLego},
  {image: instagramNuggets},
  {image: instagramRoot}
];

const social = [
  {image: academia, url: 'https://humber.academia.edu/AdamThomas'},
  {image: facebook, url: 'https://www.facebook.com/adambenjaminthomas'},
  {image: flickr, url: 'https://www.flickr.com/photos/codeadamca/'},
  {image: github, url: 'https://github.com/codeadamca'},
  {image: instagram, url: 'https://www.instagram.com/codeadamca/'},
  {image: linkedin, url: 'https://www.linkedin.com/in/adam-thomas-6b563012'},
  {image: stackoverflow, url: 'https://stackoverflow.com/users/9015675/adam'},
  {image: tinkercad, url: 'https://www.tinkercad.com/users/8gtB0Bov9MA-codeadamca'},
  {image: twitch, url: 'https://www.twitch.tv/codeadamca'},
  {image: twitter, url: 'https://twitter.com/codeadamca'},
  {image: youtube, url: 'https://www.youtube.com/channel/UCvn-c8MnpjythwWKDi5qMvA'}
];

const educations = [
  {
    image: royalRoads, 
    name: "Royal Roads",
    credits: [
      {
        title: 'Masters of Arts in Learning and Technology',
        description: '<a href="http://www.royalroads.ca/prospective-students/master-arts-learning-and-technology">Masters of Arts in Learning and Technology</a> from <a href="http://www.royalroads.ca/">Royal Roads University</a>',
        published_at: 'April 2016'
      }
    ]
  },
  {
    image: humber, 
    name: "Humber College",
    credits: [
      {
        title: 'Teaching Excellence Program', 
        description: '<a href="http://www.humber.ca/centreforteachingandlearning/professional-development/teaching-excellence-program/introduction.html">Teaching Excellence Certificate</a>',
        published_at: 'September 2016'
      },
      {
        title: 'Web Design, Development and Maintenance', 
        description: 'Web Design, Development and Maintenance Certificate from <a href="https://humber.ca/">Humber College</a>',
        published_at: 'April 2002'
      },
      {
        title: 'Computer Information Systems', 
        description: 'Computer Information Systems Diploma from <a href="https://humber.ca/">Humber College</a>',
        published_at: 'September 1999'
      },
    ]
    
  }

];

const jobs = [
  {
    image: brevisRefero, 
    name: 'BrevisRefero',
    position: 'Lead Developer',
    description: 'Lead developer of <a href="https://app.brevisrefero.com/">app.brevisrefero.com</a>, an online RFP platform connecting biopharm companies with biologics development and manufacturing services.',
    url: 'https://brevisrefero.com/',
    published_at: 'July 2018 to Current'
  },
  {
    image: humber, 
    name: 'Humber College',
    position: 'Professor, Multimedia Design, Interactive & Web Development',
    description: 'Teach coding in three programs at <a href="http://humber.ca">Humber College</a>, Toronto Canada: <a href="https://mediastudies.humber.ca/programs/graphic-design.html">Graphic Design</a>, <a href="https://mediastudies.humber.ca/programs/multimedia-design-and-development.html">Multimedia, Design and Development</a>, and <a href="https://mediastudies.humber.ca/programs/web-design-interactive-media.html">Web Design and Interactive Media</a>. Technologies taught include HTML, CSS, JavaScript, jQuery, Firebase, SASS, LESS, PHP, MySQL, NodeJS, Python, Arduino, Raspberry Pi, and more.',
    url: 'http://humber.ca/',
    published_at: 'September 2016 to Current'
  },
  {
    image: rht, 
    name: 'Robin Hood Technology Inc.',
    position: 'Partner and Lead Developer',
    description: 'Contributed to the development of a series of internal applications such as Plujo, Learnopia, and <a href="https://rnked.com/">Rnked</a>.',
    url: 'http://www.robinhoodtech.com/',
    published_at: 'September 2006 to 2016'
  }
];
