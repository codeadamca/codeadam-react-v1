import React,{Component} from "react";

import topics from './topics.json';

class Tutorial extends Component {

    constructor(props){
      super(props);

      topics.forEach((topic) => {

        topic.pages.forEach((page) => {

          if(page.url === this.props.match.params.url )
          {
            console.log(page.title);
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
                topicId: page.topicId
              },
              topic: {
                name: topic.name,
                tag: topic.name,
                url: topic.name,
                icon: topic.name,
                teaching: topic.name,
                background: topic.background,
                image: topic.image,
              }
            }
          }

        })

      })
      
    }



  render() {


    return (
      <div className="Tutorial">

        <div className="ca-nav-spacer w3-hide-small"></div>

          {topics.length}
          -
          {this.state.page.url}
          -
          {this.state.page.title}
          -
          <img src={this.state.page.image} alt="" />
          <img src={this.state.topic.image} alt="" />
          

      </div>
    );
  }
}

export default Tutorial;