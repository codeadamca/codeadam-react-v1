import React,{Component} from "react";

import Error from './../components/Error';
import Loading from './../components/Loading';

class TeachingAssignmentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      topics: []
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL + "assignments")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            assignments: result
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
        <div className="TeachingAssignmentList w3-center">
          <article className="w3-text-dark-gray ca-container-800">
            <hr className="ca-hr" />
            <h2 className="w3-text-red w3-center">Sample Assignments</h2>

            <div class="w3-cell-row">

              {this.state.assignments.map((assignment, index) => index < 4 && (
                <div class="w3-cell w3-padding w3-center">
                  <a href={assignment.url}>
                    <img src={assignment.image} className="w3-image" alt="" />
                  </a>
                </div>
              ))}

            </div>

            <div className="w3-center">
              <i className="fas fa-file w3-text-dark-gray" aria-hidden="true"></i>
              &nbsp;
              <a href="http://pages.codeadam.ca/">View Sample Assignments</a>
            </div>

          </article>
        </div>
      );
    }
  }
}

export default TeachingAssignmentList;

