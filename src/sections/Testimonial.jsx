import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { myProjects } from "../constants";
const firstRow = myProjects.slice(0, Math.ceil(myProjects.length / 2));
const secondRow = myProjects.slice(Math.ceil(myProjects.length / 2));

const ProjectCard = ({ image, title, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation flex flex-col items-center"
      )}
    >
      <img
        className="rounded-lg object-cover w-full h-40 mb-4"
        alt={title}
        src={image}
      />
      <figcaption className="text-lg font-semibold text-white text-center">
        {title}
      </figcaption>
    </a>
  );
};

export default function Testimonial() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading">My Projects Gallery</h2>
      <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </Marquee>
        <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
        <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
      </div>
    </div>
  );
}
