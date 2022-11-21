import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from '../sanity';

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

export default function SkillComponent({ skill, directionLeft }: Props): ReturnType<React.FC> {
  return (
    <div className="group flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        className="w-16 h-16 rounded-full border border-gray-500 object-cover
        filter group-hover:grayscale transition duration-300 ease-in-out"
        src={urlFor(skill?.image).url()}
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300
      ease-in-out group-hover:bg-white w-16 h-16 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
        </div>
      </div>
    </div>
  );
}
