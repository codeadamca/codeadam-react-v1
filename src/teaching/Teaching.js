import React, {Component} from "react";
import {Link} from "react-router-dom";

import Title from "./../components/Title";

import EvaluationList from ".//TeachingEvaluationList";
import TeachingTechnologyList from "./TeachingTechnologyList";
import TeachingAssignmentList from "./TeachingAssignmentList";
import TeachingCourseList from "./TeachingCourseList";

import profile from "./../images/profile-self.jpg";

class Teaching extends Component {
  render() {
    return (
      <div className="Teaching">
        <div className="ca-nav-spacer w3-hide-small"></div>

        <Title title="Teaching"></Title>

        <article className="w3-text-dark-gray ca-container-800">
          <hr className="ca-hr" />

          <h2 className="w3-text-red w3-center">Teaching Philosophy</h2>

          <div className="w3-center">
            <img src={profile} alt="Adam Thomas" width="300" />
          </div>

          <p>
            I teach code. I have been teaching code at{" "}
            <a href="http://humber.ca/">Humber College</a> since 2002. Currently
            I teach code in three programs:{" "}
            <a href="https://mediastudies.humber.ca/programs/graphic-design.html">
              Graphic Design
            </a>
            ,{" "}
            <a href="https://mediastudies.humber.ca/programs/multimedia-design-and-development.html">
              Multimedia, Design and Development
            </a>
            , and{" "}
            <a href="https://mediastudies.humber.ca/programs/web-design-interactive-media.html">
              Web Design and Interactive Media
            </a>
            .
          </p>

          <p>
            My philosophy of teaching has been built around my experience
            teaching code. A key part of that experience has been teaching code
            to students who are not looking to be become career programmers and
            may only be in the course as it is a requirement. In an attempt to
            engage these students I have integrated a series of activities:
            group problem solving, coding art, and coding tangible elements (
            <a href="https://www.arduino.cc/">Arduino</a>,{" "}
            <a href="https://www.raspberrypi.org/">Raspberry Pi</a>, and{" "}
            <a href="https://www.lego.com/en-us/mindstorms/about-ev3">
              LEGO&reg; EV3
            </a>
            ).
          </p>

          <p>
            Code in particular must be learned by{" "}
            <Link to="/tinkering">doing</Link>. By trying, failing, failing some
            more, understanding, and finally succeeding. In class I usually
            spend about 20% of the class lecturing coding concepts and the other
            80% is spent with sample code, in class exercises, and group
            activities.
          </p>

          <p>
            I am also an advocate for the use of{" "}
            <Link to="/technology">technology in the classroom</Link>. There is
            a fine balance between using technology appropriately and using
            technology for technology sake. If used effectively, technology can
            greatly enhance classroom learning and accessibility.
          </p>
        </article>

        <article className="w3-text-dark-gray ca-container-800">
          <hr className="ca-hr" />

          <h2 className="w3-text-red w3-center">Current Technology</h2>

          <p>
            The best part of being an instructor in the technology field is that
            the learning never stops. The list of topics I get to teach is
            continually changing, here are some of the topics I have recently
            taught in class:
          </p>

          <TeachingTechnologyList />

          <p>
            One of the best parts about teaching code at a postsecondary
            institution is the amount of new technology I have to opportunity to
            work with. I have started a{" "}
            <Link to="/learning/list">video library</Link> of the technology I
            have worked with.
          </p>
        </article>

        <TeachingCourseList />
        <TeachingAssignmentList />

        <article className="w3-text-dark-gray ca-container-800">
          <hr className="ca-hr" />

          <h2 className="w3-text-red w3-center">Student Industry Projects</h2>

          <p>
            Having students work on real-life group projects outside of the
            classroom can be one of the best learning experiences. Below is a
            list of some of the projects I have facilitated between students and{" "}
            <a href="https://humber.ca/">Humber College</a> or industry
            partners.
          </p>

          <div className="w3-center">
            <i
              className="fas fa-industry w3-text-dark-gray"
              aria-hidden="true"
            ></i>
            &nbsp;
            <Link to="/industry-projects">View Industry Projects</Link>
          </div>
        </article>

        <EvaluationList />
      </div>
    );
  }
}

export default Teaching;
