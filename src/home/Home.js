import React,{Component} from "react";

import ArticleList from "./../components/ArticleList";
import Calendly from './../components/Calendly';
import CodeAdam from './../components/CodeAdam';
import SocialList from './../components/SocialList';
import NavCards from './../components/NavCards';

import HomeHeader from './HomeHeader';

import articles from './articles.json';

class Home extends Component {
  render() {
    return (
      <div className="Home">

        <HomeHeader></HomeHeader>
        <ArticleList articles={articles}></ArticleList>
        <Calendly></Calendly>
        <NavCards title="Teaching Portfolio" links={portfolio}></NavCards>
        <NavCards title="In the Classroom" links={classroom}></NavCards>
        <CodeAdam></CodeAdam>
        <SocialList location="home"></SocialList>

      </div>
    );
  }
}

export default Home;

const portfolio = [
  {icon: 'fas fa-laptop-code', href: '/teaching', name: 'Teaching'},
  {icon: 'fas fa-book', href: '/research-publishings', name: 'Research'},
  {icon: 'fas fa-chalkboard', href: '/speaking-engagements', name: 'Speaking'},
  {icon: 'fas fa-graduation-cap', href: '/professional-development', name: 'Professional'},
  {icon: 'fas fa-user', href: '/about', name: 'About Me'}
];

const classroom = [
  {icon: 'fas fa-code', href: '/learning', name: 'Learning'},
  {icon: 'fas fa-tools', href: '/tools', name: 'Tools'},
  {icon: 'fas fa-server', href: '/server-setup', name: 'Server Setup'},
  {icon: 'fas fa-robot', href: '/ev3', name: 'EV3 Resources'},
  {icon: 'fas fa-hammer', href: '/tinkering', name: 'Tinkering'}
];