/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from '../sanity';
import Link from 'next/link';

type Props = {
  projects: Project[];
}

export default function Projects({ projects }: Props): ReturnType<React.FC> {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col justify-evenly text-left
    md:flex-row max-w-full mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="realative w-full flex overflow-x-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 overflow-y-hidden snap-x snap-mandatory z-20">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex flex-col space-y-5 items-center justify-center p-20 md:p-44 flex-shrink-0 snap-center"
          >
            <Link className="cursor-pointer" href={project.linkToBuild}>
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-[400px] h-[200px]"
                src={urlFor(project.image).url()}
              />
            </Link>
            <div className="space-x-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center">
                <span className="underline decoration-[#836a2f]">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex items-center mt-3 space-x-3 justify-center">
                {project.technologies.map((technology) => (
                  <img 
                    className="h-10 w-10"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                    />
                ))}
              </div>
              <p className="mt-8 text-sm md:text-base lg:text-base text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#996a06] left-0 h-[250px] -skew-y-12"></div>
    </motion.div>
  );
}
