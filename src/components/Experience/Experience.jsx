import React from "react";
import "./experience.css";
import { FaBootstrap, FaCss3, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTailwindCss, BiLogoSpringBoot } from "react-icons/bi";
import { SiMysql, SiNodedotjs, SiPython } from "react-icons/si";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_Frontend">
          <h3>FrontEnd Techs</h3>

          <div className="exp_content">
            <article className="exp_details">
              <FaHtml5 className="exp_details-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp_details">
              <FaCss3 className="exp_details-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <IoLogoJavascript className="exp_details-icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <FaBootstrap className="exp_details-icons"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp_details">
              <BiLogoTailwindCss className="exp_details-icons"/>
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <FaReact className="exp_details-icons"/>
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_Backend">
          <h3>BackEnd Techs</h3>

          <div className="exp_content">
            <article className="exp_details">
              <FaJava className="exp_details-icons"/>
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <BiLogoSpringBoot className="exp_details-icons"/>
              <div>
                <h4>SpringBoot</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="exp_details">
              <SiMysql className="exp_details-icons"/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <SiNodedotjs className="exp_details-icons" />
              <div>
                <h4>Node.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <SiPython className="exp_details-icons"/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
