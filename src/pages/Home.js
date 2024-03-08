import React from "react";
import "../styles/Home.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, my name is Liam</h2>
        <div className="prompt">
          <p>Data Scientist & budding Software Engineer</p>
          <LinkedInIcon
            onClick={() =>
              window.open("https://www.linkedin.com/in/liamgower", "_blank")
            }
          />
          <GitHubIcon
            onClick={() =>
              window.open("https://www.github.com/leej11", "_blank")
            }
          />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Languages</h2>
            <span>
              Python, R, SQL, Git, Bash, Javascript, ReactJS, HTML, CSS, LaTeX
            </span>
          </li>
          <li className="item">
            <h2>Tools</h2>
            <span>AWS, DataBricks, Airflow, Snowflake, Tableau, LLMs</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
