import React,{Component} from "react";

import Error from './../components/Error';
import Loading from './../components/Loading';

import ArticleResourceList from './ArticleResourceList';
import Date from './../components/Date';

import Instagram from './Instagram';
import SoundCloud from './SoundCloud';
import Twitter from './Twitter';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      socials: []
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL + "articles/" + this.props.filter + "/" + this.props.value)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            articles: result
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
        <div className="ArticleList">
          {this.state.articles.map((article, index) => (
            <div key={index}>
              <article className="w3-text-dark-gray ca-container-800">
                <hr className="ca-hr" />
                <h2 className="w3-text-red w3-center">{article.title}</h2>
                <div className="w3-center">
                  {
                    article.image
                    ? 
                      article.url 
                      ? <a href={article.url}><img src={article.image} className="w3-image" alt="" /></a>
                      : <img src={article.image} className="w3-image" alt="" />
                    : null
                  }
                </div>
                {
                  article.image && (article.instagram_id || article.twitter_id || article.soundcloud_id)
                  ? <div className="ca-nav-spacer-small"></div>
                  : null
                }
                {
                  article.instagram_id && this.props.social === "yes"
                  ? <Instagram id={article.instagram_id}></Instagram>
                  : null
                }
                {
                  article.twitter_id && this.props.social === "yes"
                  ? <Twitter id={article.twitter_id}></Twitter>
                  : null
                }
                {
                  article.soundcloud_id && this.props.social === "yes"
                  ? <SoundCloud id={article.soundcloud_id}></SoundCloud>
                  : null
                }
                <div dangerouslySetInnerHTML={{__html: article.content}}></div>
                <div className="ca-font-small-fixed">
                  <ArticleResourceList resources={article.resources}></ArticleResourceList>
                  Date: <Date date={article.published_at} />
                </div>
              </article>
            </div>
          ))}
        </div>
      );
    }
  }
}

export default ArticleList;
