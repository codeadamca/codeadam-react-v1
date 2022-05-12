import React,{Component} from "react";

import Error from './../components/Error';
import Loading from './../components/Loading';
import TopicList from './../learning/TopicList';

class TeachingCourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      topics: []
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL + "courses")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            courses: result
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
        <div className="TeachingCoutrseList">
          <article className="w3-text-dark-gray ca-container-800">
            <hr className="ca-hr" />
            <h2 className="w3-text-red w3-center">Courses I have Taught</h2>

            {this.state.courses.map((course, index) => (
              <div key={index} className="ca-margin-medium-vertical">
                <strong>{course.name} ({course.code}</strong>)
                {course.description ?
                  <>
                    <br />
                    {course.description}
                  </> :
                    ''
                }
                <div className="ca-font-small-fixed">
                  Resources: <a href={course.url}>{course.name}</a>
                </div>
                <TopicList topics={course.topics} />
              </div>
            ))}
          </article>
        </div>
      );
    }
  }
}

export default TeachingCourseList;

