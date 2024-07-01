import React from 'react';

const Project = ({ title }) => (
  <div>
    <h3>{title}</h3>
    <img src="/images/project.jpg" alt={title} />
  </div>
);

export default Project;
