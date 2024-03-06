import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import "../styles/Experience.css";
import capOneLogo from "../assets/capitalOne.png";
import playstationLogo from "../assets/playstationLogo.png";
import eonNextLogo from "../assets/eonNextLogo.png";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        {/* E.ON Next - Senior Data Scientist */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work eon"
          date="March 2024 - Present"
          /* contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }} */
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "#fff", color: "#3e497a" }}
          icon={<img src={eonNextLogo} alt="eonNextLogo" width="50" />}
          iconClassName="eonNextIcon"
        >
          <h3 className="vertical-timeline-element-title">
            Senior Data Scientist
          </h3>
          <p>E.ON Next</p>
        </VerticalTimelineElement>

        {/* PlayStation - Data Scientist */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work playstation"
          date="March 2022 - February 2024"
          iconStyle={{ background: "#fff", color: "#3e497a" }}
          icon={<img src={playstationLogo} alt="playstationLogo" width="50" />}
          iconClassName="playstationIcon"
        >
          <h3 className="vertical-timeline-element-title">Data Scientist</h3>
          <p>Sony PlayStation</p>
        </VerticalTimelineElement>

        {/* Capital One - Senior Data Scientist */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work capitalone"
          date="April 2021 - February 2022"
          iconStyle={{ background: "#fff", color: "#3e497a" }}
          icon={<img src={capOneLogo} alt="capitalOneLogo" width="50" />}
          iconClassName="capitaloneIcon"
        >
          <h3 className="vertical-timeline-element-title">
            Senior Data Scientist
          </h3>
          <p>Capital One</p>
        </VerticalTimelineElement>

        {/* Capital One - Senior Data Engineer */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work capitalone"
          date="January 2020 - March 2021"
          iconStyle={{ background: "#fff", color: "#3e497a" }}
          icon={<img src={capOneLogo} alt="capitalOneLogo" width="50" />}
          iconClassName="capitaloneIcon"
        >
          <h3 className="vertical-timeline-element-title">
            Senior Data Engineer
          </h3>
          <p>Capital One</p>
        </VerticalTimelineElement>

        {/* Capital One - Senior Data Analyst */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work capitalone"
          date="July 2018 - December 2019"
          iconStyle={{ background: "#fff", color: "#3e497a" }}
          icon={<img src={capOneLogo} alt="capitalOneLogo" width="50" />}
          iconClassName="capitaloneIcon"
        >
          <h3 className="vertical-timeline-element-title">
            Senior Data Analyst
          </h3>
          <p>Capital One</p>
        </VerticalTimelineElement>

        {/* Capital One - Data Analyst */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work capitalone"
          date="September 2017 - June 2018"
          iconStyle={{ background: "#fff", color: "#3e497a" }}
          icon={<img src={capOneLogo} alt="capitalOneLogo" width="50" />}
          iconClassName="capitaloneIcon"
        >
          <h3 className="vertical-timeline-element-title">Data Analyst</h3>
          <p>Capital One</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon=<SchoolIcon />
        >
          <h3 className="vertical-timeline-element-title">
            University of Bath, UK
          </h3>
          <p>BSc. Economics</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
