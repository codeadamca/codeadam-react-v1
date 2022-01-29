import React,{Component} from "react";

import Error from './../components/Error';
import Loading from './../components/Loading';

class TeachingEvaluationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      topics: []
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL + "evaluations")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            evaluations: result
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
          <article className="w3-text-dark-gray ca-container-600">
            <h2 className="w3-text-red">Evaluation of my Teaching</h2>
            <p>Student feedback is important to me. Here is some of my recent student feedback successes:</p>

            {this.state.evaluations.map((evaluation, index) => (
              <blockquote key={index}>
                <i className="fas fa-quote-left" aria-hidden="true"></i>
                &nbsp;
                {evaluation.content}
                &nbsp;
                <i className="fas fa-quote-right" aria-hidden="true"></i>
              </blockquote>
            ))}
          </article>
          <hr className="ca-hr" />
        </div>
      );
    }
  }
}

export default TeachingEvaluationList;

