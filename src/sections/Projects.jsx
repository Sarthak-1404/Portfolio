import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";

const Projects = () => {
  const [preview, setPreview] = useState(null);

  return (
    <section id="projects" className="relative c-space section-spacing">
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}

      {preview && (
        <img
          className="fixed bottom-6 right-6 z-50 object-cover h-56 w-80 rounded-lg shadow-lg pointer-events-none"
          src={preview}
          alt="Preview"
        />
      )}
    </section>
  );
};

export default Projects;
