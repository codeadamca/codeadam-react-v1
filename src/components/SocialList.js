import React,{Component} from "react";

import Error from './../components/Error';
import Loading from './../components/Loading';

class SocialList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      socials: []
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL + "socials/home/yes")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            socials: result
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
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <Error message={error.message}></Error>;
    } else if (!isLoaded) {
      return <Loading />;
    } else {
      return (
        <div className="SocialList">
          <article className="ca-container-600 w3-center">
            {this.state.socials.map((social, index) => (
              <a href={social.url} className="ca-font-none" key={index}>
                <img src={social.image} className="ca-image-small ca-margin-small-horizontal ca-margin-small-vertical" alt="" />
              </a>
            ))}
          </article>
          <hr className="ca-hr" />
        </div>
      );
    }
  }
}

export default SocialList;