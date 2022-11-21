/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from '../sanity';

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props): ReturnType<React.FC> {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]
     md:w-[600px] lg:w-[900px] lg:mb-24 md:mb-20 snap-center bg-[#292929] p-10 cursor-pointer hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:mt-28 w-28 h h-28 rounded-full lg:w-[145px] lg:mt-24 lg:h-[145px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-xl md:text-2xl lg:text-3xl font-light">{experience?.company}</h4>
        <p className="font-bold text-lg md:text-xl lg:text-2xl mt-1">{experience?.jobTitle}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map(technology => (
            <img
            key={technology._id}
            className="w-5 h-5 md:w-10 md:h-10 object-cover lg:w-16 lg:h-16 rounded-full"
            src={urlFor(technology.image).url()}
            alt=""
          />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">{new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere 
            ? "Present"
            : new Date(experience.dateEnded).toDateString()
          }
        </p>
        <ul className="list-disc space-y-4 ml-5 text-xs md:text-xs lg:text-sm">
          {experience.points.map((point, i) =>                                  (
             <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
