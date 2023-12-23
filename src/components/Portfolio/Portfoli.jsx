import React from "react";
import "./portfolio.css";
// import img1 from '../../assets/portfolio1.jpg'


const data = [
  // {
  //   id: 1,
  //   image: img1,
  //   title: "project title",
  //   github: "http://github.io",
  //   demo: "http://localhost:8080/",
  // }
];

const Portfoli = () => {
  return (
    <section id="portfoli">
      <h5>My Works</h5>
      <h2>Projects</h2>

      <div className="container project_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="Project_items">
              <div className="project_item-img">
                <img src={image} alt="img1" />
              </div>
              <h3>{title}</h3>
              <div className="project-item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  SourceCode
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live-Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfoli;
