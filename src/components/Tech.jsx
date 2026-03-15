import React, { useState } from "react";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  const [tooltipTexts, setTooltipTexts] = useState({});

  const handleMouseEnter = (index, technology) => {
    setTooltipTexts({ [index]: technology });
  };

  const handleMouseLeave = () => {
    setTooltipTexts({});
  };

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 max-w-5xl mx-auto">
      {technologies.map((technology, index) => (
        <motion.div
          variants={fadeIn("up", "spring", index * 0.1, 0.75)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="w-28 h-28 mb-2 relative"
          key={technology.name}
          onMouseEnter={() => handleMouseEnter(index, technology.name)}
          onMouseLeave={handleMouseLeave}
        >
          <div>
            <BallCanvas icon={technology.icon} />
          </div>

          {tooltipTexts[index] && (
            <div className="absolute bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm z-10 bottom-[90%] left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              {tooltipTexts[index]}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
