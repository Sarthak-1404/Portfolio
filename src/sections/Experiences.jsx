import { Timeline } from "../components/Timeline";
import { experiences, education } from "../constants";

const EducationTimeline = () => (
  <div className="w-full mt-20" id="education">
    <h2 className="text-heading mb-8">Education</h2>
    <div className="flex flex-col gap-8">
      {education.map((edu, idx) => (
        <div key={idx} className="bg-gradient-to-r from-indigo to-storm rounded-xl p-6 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-lg text-neutral-300">{edu.institution}</p>
            </div>
            <div className="text-md text-neutral-400 mt-2 md:mt-0">{edu.date}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Experiences = () => {
  return (
    <div className="w-full" id="work">
      <Timeline data={experiences} />
      <EducationTimeline />
    </div>
  );
};

export default Experiences;
