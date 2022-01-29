import React,{Component} from "react";

import Error from './../components/Error';
import Loading from './../components/Loading';

class TeachingTechnologyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      topics: []
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL + "topics/teaching/yes")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            topics: result
          });
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
        <div className="TeachingTechnologyList w3-center">
          {this.state.topics.map((topic, index) => (
            <a href={topic.url} key={index}>
            <img src={topic.image} className="w3-image ca-image-small ca-margin-small-vertical ca-margin-small-horizontal" alt="" />
            </a>
          ))}
          <hr className="ca-hr" />
        </div>
      );
    }
  }
}

export default TeachingTechnologyList;
