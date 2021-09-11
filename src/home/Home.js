import React,{Component} from "react";

import HomeHeader from './HomeHeader';

class Home extends Component {
  render() {
    return (
      <div className="Home">

        <HomeHeader></HomeHeader>

        <h1>Home</h1>

      </div>
    );
  }
}

export default Home;