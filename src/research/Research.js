import React,{Component} from "react";

import Title from './../components/Title';
import ArticleList from './../components/ArticleList';

import mitacsBiotalent from './../images/mitacs-biotalent.jpeg';

class Research extends Component {
  render() {
    return (
      <div className="Research">

        <div className="ca-nav-spacer w3-hide-small"></div>

        <Title title="Research and Publishings"></Title>

        <ArticleList articles={articles}></ArticleList>

      </div>
    );
  }
}

export default Research;

const articles = [
  {
    title: 'BrevisRefero and BioTalent', 
    image: mitacsBiotalent, 
    content: 'In September of 2021 I will be the faculty supervisor for a <a href="https://www.biotalent.ca/">BioTalent Canada</a> grant between <a href="https://www.brevisrefero.com/">BrevisRefero</a> and <a href="https://humber.ca/">Humber College</a>.',
    image: mitacsBiotalent,
    resources: [
    {url: 'https://www.biotalent.ca/', name: 'BioTalent'},
    {url: 'https://humber.ca/', name: 'Humber College'},
    {url: 'https://www.brevisrefero.com/', name: 'BrevisRefero'}
    ],
    date: 'September 7, 2021'
  }
];