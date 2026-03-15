import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { experiences, navigationPaths } from "../constants";
import { github } from "../assets";

const ExperienceCard = ({ experience }) => {
  const dateContent = (
    <motion.div
      variants={fadeIn("up", "tween", 0.1, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      style={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      <a
        href={experience.company_website}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          flex: 1,
          display: "flex",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          border: "2px solid transparent",
          transition: "border-color 0.3s",
          position: "relative",
        }}
        className="group hover:border-purple-500"
      >
        {experience.image && (
          <img
            src={experience.image}
            alt={experience.title}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.5s",
            }}
            className="group-hover:scale-110"
          />
        )}
        <div
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "rgba(29, 24, 54, 0.85)",
            padding: "4px 14px",
            borderRadius: "20px",
            fontSize: "14px",
            fontWeight: "600",
            color: "#aaa6c3",
          }}
        >
          {experience.date}
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            transition: "opacity 0.3s",
          }}
          className="group-hover:!opacity-100"
        >
          <span
            style={{
              background: "rgba(145, 94, 255, 0.8)",
              padding: "6px 16px",
              borderRadius: "20px",
              color: "white",
              fontSize: "14px",
            }}
          >
            View Project →
          </span>
        </div>
      </a>
    </motion.div>
  );

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      icon={
        <a
          href={experience.company_website}
          target="_blank"
          className="flex justify-center items-center w-full h-full"
        >
          <img
            src={github}
            alt="github"
            className="w-[60%] h-[60%] object-contain"
          />
        </a>
      }
      iconStyle={{ background: experience.iconBg }}
      date={dateContent}
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        <div>
          <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>

        <ul className="mt-5 ml-5 list-disc space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        <p className={styles.sectionSubText}>What I have built so far</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline animate={false}>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, navigationPaths.experience);
