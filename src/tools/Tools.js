import React,{Component} from "react";

import Error from './../components/Error';
import Loading from './../components/Loading';
import Title from './../components/Title';

import ToolsCategory from './ToolsCategory';

class Tools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      categories: []
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL + "toolTypes")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            types: result
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
        <div className="Tools">

          <div className="ca-nav-spacer w3-hide-small"></div>

          <Title title="Classroom Tools"></Title>

          {this.state.types.map((type, index) => (
            <>
              <div className="w3-text-dark-gray ca-container-600 ca-margin-medium-vertical">
                <h2 className="w3-text-red w3-center">{type.title}</h2>
                <ToolsCategory type={type.id} ></ToolsCategory>
              </div>
              <hr className="ca-hr" />
            </>
          ))}
        </div>
      );
    }
  }
}

export default Tools;
