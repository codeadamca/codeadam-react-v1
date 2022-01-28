import React,{Component} from "react";

class ToolsCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      categories: []
    };
  }

  componentDidMount() {
    fetch(process.env.REACT_APP_API_URL + "tools/type/" + this.props.type)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            tools: result
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
        <div className="ToolsCategory w3-container">

          {this.state.tools.map((tool, index) => (
            <article className="w3-half w3-center ca-margin-small-vertical" id={"tool-" + tool.id}>
              <a href={tool.url}>
                <img src={process.env.REACT_APP_IMAGE_URL + tool.image} className="w3-image" alt="" />
              </a>
              <h3 className="ca-no-bottom-margin">{tool.title}</h3>
              <a href={tool.url}>{tool.url}</a>
            </article>
          ))}
          
        </div>
      );
    }
  }
}

export default ToolsCategory;
