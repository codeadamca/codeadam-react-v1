import React,{Component} from "react";

import Error from './../components/Error';
import Loading from './../components/Loading';

class NavSocial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      socials: []
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL + "socials/header/yes")
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
    const { error, isLoaded } = this.state;
    if (error) {
      return <Error message={error.message}></Error>;
    } else if (!isLoaded) {
      return <Loading />;
    } else {
      return (
        <div className="NavSocial">

          {this.state.socials.map((social, index) => (
            <a href={social.url} key={index}>
              <img src={social.image} className="ca-image-icon ca-margin-small-horizontal" alt="" />
            </a>
          ))}
        </div>
      );
    }
  }
}

export default NavSocial;
