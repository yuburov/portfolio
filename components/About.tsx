import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo
};

export default function About({ pageInfo }: Props): ReturnType<React.FC> {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row
     max-w-7xl px-18 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mt-[115px] flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:ml-3 md:mb-0 md:w-[240px] md:h-[340px] xl:w-[400px] xl:h-[500px] "
        src={urlFor(pageInfo?.profilePic).url()}
      />
      <div className="space-y-10 px-0 md:px-10">
        <h3 className="text-3xl font-semibold mt-10">
          Here is a little background
        </h3>
        <p className="md:text-base text-xs lg:text-base">
          {pageInfo?.backgroundInformation}  
        </p>
      </div>
    </motion.div>
  );
}
