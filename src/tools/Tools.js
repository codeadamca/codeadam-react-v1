import React,{Component} from "react";

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
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
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
