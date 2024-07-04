import React from "react";
import Project from "./Project";
import pawfinderGif from "../assets/gifs/pawfinder.gif";
// import workdaySchedulerGif from '../assets/gifs/workday-scheduler.gif';
// import weatherApplicationGif from '../assets/gifs/weather-application.gif';

const Portfolio = () => {
  const projects = [
    {
      title: "Pawfinder",
      description: "A web application to find pets and help you name them.",
      gif: pawfinderGif,
      link: "https://mpierson00.github.io/Pawfinder/",
    },
    // {
    //   title: 'Workday Scheduler',
    //   description: 'A simple calendar application to schedule your workday.',
    //   gif: workdaySchedulerGif,
    //   link: 'https://mpierson00.github.io/Workday-Scheduler/',
    // },
    // {
    //   title: 'Weather Application',
    //   description: 'A weather application to check the current weather.',
    //   gif: weatherApplicationGif,
    //   link: 'https://mpierson00.github.io/WeatherApplication/',
    // },
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            gif={project.gif}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
