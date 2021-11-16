import React,{Component} from "react";
import {Link} from 'react-router-dom';

import topics from './topics.json';

import arduino from './../images/topics/arduino.png';

import Arduino from './../components/Arduino';
import Tinkercad from './../components/Tinkercad';
import YouTube from './../components/YouTube';
import Date from './../components/Date';

import LearningHeader from './LearningHeader';
import TopicList from './TopicList';

class Tutorial extends Component {

  constructor(props){
    super(props);

    topics.forEach((topic, topicIndex) => {

      topic.pages.forEach((page, pageIndex) => {

        if(page.url === this.props.match.params.url)
        {
          
          this.state = {
            page: {
              url: page.url,
              title: page.title,
              content: page.content,
              tinkercadId: page.tinkercadId,
              arduinoId: page.arduinoId,
              githubId: page.githubId,
              youtubeId: page.youtubeId,
              date: page.date,
              topicId: page.topicId,
              topics: page.topics
            },
            topic: {
              name: topic.name,
              tag: topic.tag,
              url: topic.name,
              icon: topic.name,
              teaching: topic.name,
              background: topic.background,
              image: topic.image,
              banner: topic.banner
            },
          }
        }

      })

    })
    
  }

  render() {

    return (
      <div className="Tutorial">

        <LearningHeader
          title={this.state.page.title}
          background={this.state.topic.background}
          banner={this.state.topic.banner}
          topics={this.state.page.topics} />

        <div className="ca-nav-spacer w3-hide-small"></div>

        <div className="ca-container-600">

          <div className="w3-center ca-font-small-fixed">

            <Link to="/learning">Learning Code</Link> | {this.state.page.title}
            <br />
            Posted: <Date date={this.state.page.date} />

          </div>

          <hr className="ca-hr" />

          <div dangerouslySetInnerHTML={{__html: this.state.page.content}}></div>

          <hr className="ca-hr" />

          {this.state.page.youtubeId ? 
            <>
              <YouTube id={this.state.page.youtubeId} />
              <hr className="ca-hr" />
            </> : null}

        </div>

        <div className="ca-container-800">

          {this.state.page.arduinoId ? 
            <>
              <Arduino id={this.state.page.arduinoId} />
              <hr className="ca-hr" />
            </> : null}

            {this.state.page.tinkercadId ? 
            <>
              <Tinkercad id={this.state.page.tinkercadId} />
              <hr className="ca-hr" />
            </> : null}

        </div>

        <div className="ca-container-600 w3-center">

              
            <a href={"https://create.arduino.cc/editor/professoradam/" + this.state.page.arduinoId}>
              <i className="w3-padding-small fas fa-infinity fa-2x" aria-hidden="true"></i>
            </a>

            <a href={"https://github.com/codeadamca/" + this.state.page.githubId}>
              <i className="w3-padding-small fab fa-github fa-2x" aria-hidden="true"></i>
            </a>

            <a href={"https://www.tinkercad.com/things/" + this.state.page.tinkercadId}>
              <i className="w3-padding-small fas fa-th fa-2x" aria-hidden="true"></i>
            </a>    

            <a href={"https://www.youtube.com/watch?v=" + this.state.page.youtubeId}>
              <i className="w3-padding-small fab fa-youtube fa-2x" aria-hidden="true"></i>
            </a>

            <hr className="ca-hr" />

            <TopicList topics={this.state.page.topics} />

            <hr className="ca-hr" />

          </div>       

      </div>
    );
  }
}

export default Tutorial;