import React,{Component} from "react";
import Moment from 'react-moment';

class Date extends Component {
  render() {
    return (
      <Moment format="MMMM Do, YYYY">{this.props.date}</Moment>
    );
  }
}

export default Date;