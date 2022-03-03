import React,{Component} from "react";
import {Link} from 'react-router-dom';

import Error from './../components/Error';
import Loading from './../components/Loading';

class LearningTopicPageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      socials: []
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL + "pages/topic/" + this.props.topic)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            pages: result
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
        <div className="LearningTopicPageList">
          <div className="w3-container">
            <table cellPadding="0" cellSpacing="0" border="0" className="w3-table w3-bordered ">
              <tbody>
                {this.state.pages.map((page, index) => (
                  <tr key={index}>
                    <td>
                      <Link to={"/learning/" + page.slug} className="ca-font-tiny-small">
                        {page.title}
                      </Link>
                    </td>
                    <td className="w3-center ca-nobr">
                      {
                        page.topics.map((topic, index) => 
                          <>
                            <img src={topic.image} className="w3-image ca-image-icon" alt="" key={index} />
                            &nbsp;
                          </>
                        )
                      }
                    </td>
                    <td className="w3-center ca-nobr w3-text-gray">
                      {
                        page.tinkercad_id 
                        ? <i className="fas fa-th ca-margin-tiny-horizontal" aria-hidden="true"></i>
                        : null
                      }
                      {
                        page.arduino_id 
                        ? <i className="fas fa-infinity ca-margin-tiny-horizontal" aria-hidden="true"></i>
                        : null
                      }
                      {
                        page.github_id 
                        ? <i className="fab fa-github ca-margin-tiny-horizontal" aria-hidden="true"></i>
                        : null
                      }
                      {
                        page.youtube_id 
                        ? <i className="fab fa-youtube ca-margin-tiny-horizontal" aria-hidden="true"></i>
                        : null
                      }
                    </td>
                  </tr>
                ))}
              </tbody>  
            </table>
          </div>
        </div>
      );
    }
  }
}

export default LearningTopicPageList;
