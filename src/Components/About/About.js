import React from "react";
import "./About.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Harsh Gupta, web developer. I have experience in web design,
              building and customizing functions. Also I'm good in Football.
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Functioning</h3>
                <span className="skills_number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage functioning"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Designing</h3>
                <span className="skills_number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage designing"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Confident</h3>
                <span className="skills_number">100%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage confident"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
