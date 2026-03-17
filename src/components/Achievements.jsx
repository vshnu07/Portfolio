import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";

const AchievementCard = ({
  index,
  title,
  icon,
  iconBg,
  date,
  points,
}) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.1 }}
  >
    <div className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
      <div className='relative w-full h-[230px]'>
        <img
          src={icon}
          alt={title}
          className='w-full h-full object-contain rounded-2xl bg-black-200'
        />
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{title}</h3>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {points.map((point, idx) => (
            <li
              key={`achievement-point-${idx}`}
              className='text-secondary text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const Achievements = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        <p className={styles.sectionSubText}>My milestones</p>
        <h2 className={styles.sectionHeadText}>Achievements.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {achievements.map((achievement, index) => (
          <AchievementCard key={achievement.title} index={index} {...achievement} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");
