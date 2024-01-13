import React from 'react';

function Projects() {
  return (
    <section id="projects" className="p-8">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {/* Project cards */}
        <div className="p-4 border border-gray-200 rounded">
          <h3 className="font-bold">Project 1</h3>
          <p>Description of Project 1...</p>
        </div>
        {/* Repeat for other projects */}
      </div>
    </section>
  );
}

export default Projects;