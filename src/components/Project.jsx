import React from "react";

const Project = ({ title, description, gif, link, repo }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={gif} alt={`${title} GIF`} />
      </a>
      <p>{description}</p>
      <a href={repo} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
    </div>
  );
};

export default Project;
