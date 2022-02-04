import React,{Component} from "react";

import Error from './../components/Error';
import Loading from './../components/Loading';

import Title from './../components/Title';

import LearningTopicPageList from './LearningTopicPageList';

class LearningHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      socials: []
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL + "topics/pages/yes")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            topics: result
          });
          window.instgrm.Embeds.process();
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <Error message={error.message}></Error>;
    } else if (!isLoaded) {
      return <Loading />;
    } else {
      return (
        <div className="LearningHome ca-container-800">
          <div className="ca-nav-spacer w3-hide-small"></div>

          <Title title="Learning Code, Teaching Code"></Title>

          <hr className="ca-hr" />

          <p>In an attempt to pass things I have learned on to students and fellow developers (and sometimes to avoid learning the same thing twice), I have attempted to log my learning. Hopefully this list will grow as I continue to learn.</p>

          <hr className="ca-hr" />

          {this.state.topics.map((topic, index) => (
            <div key={index}>
              <article className="w3-text-dark-gray ca-margin-medium-vertical">
                <div className="w3-center">
                  <img src={topic.image} className="w3-image ca-image-medium" alt="" />
                </div>
                <LearningTopicPageList topic={topic.id}></LearningTopicPageList>
              </article>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default LearningHome;
