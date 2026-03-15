import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { personalInfo, navigationPaths, services, technologies } from "../constants";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { profile } from "../assets";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.25, 1.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] min-h-[280px] py-5 px-12 flex flex-col justify-evenly items-center">
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const FloatingSkill = ({ icon, name, index, total }) => {
  const config = useMemo(() => {
    const seed = index * 137.508;
    const angle = (index * 360) / total - 90;
    const radius = 240 + (index % 3) * 35;
    const startX = Math.cos((angle * Math.PI) / 180) * radius;
    const startY = Math.sin((angle * Math.PI) / 180) * radius;

    const orbitSpeed = 15 + (seed % 20);
    const direction = index % 2 === 0 ? 1 : -1;
    const wobbleX = 20 + (seed % 40);
    const wobbleY = 15 + (seed % 35);
    const scaleSpeed = 2 + (seed % 3);
    const rotateSpeed = 4 + (seed % 6);

    return { startX, startY, angle, radius, orbitSpeed, direction, wobbleX, wobbleY, scaleSpeed, rotateSpeed };
  }, [index, total]);

  return (
    <motion.div
      className="absolute w-11 h-11 z-10"
      style={{ left: "50%", top: "50%" }}
      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        x: config.startX - 22,
        y: config.startY - 22,
      }}
      transition={{ delay: 0.3 + index * 0.15, duration: 0.6, type: "spring" }}
    >
      <motion.div
        animate={{
          x: [0, config.wobbleX * config.direction, -config.wobbleX * config.direction * 0.7, config.wobbleX * 0.5 * config.direction, 0],
          y: [0, -config.wobbleY, config.wobbleY * 0.8, -config.wobbleY * 0.5, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: config.orbitSpeed,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
        }}
      >
        <motion.div
          animate={{
            rotateY: [0, 360 * config.direction],
            scale: [1, 1.15, 0.9, 1.1, 1],
          }}
          transition={{
            rotateY: { repeat: Infinity, duration: config.rotateSpeed, ease: "linear" },
            scale: { repeat: Infinity, duration: config.scaleSpeed, ease: "easeInOut" },
          }}
          className="w-full h-full rounded-full bg-[#1d1836] p-2 shadow-lg border border-purple-500/30 flex items-center justify-center cursor-pointer"
          style={{
            boxShadow: "0 0 12px rgba(168, 85, 247, 0.25), 0 4px 8px rgba(0,0,0,0.3)",
            transformStyle: "preserve-3d",
          }}
          whileHover={{ scale: 1.4, boxShadow: "0 0 25px rgba(168, 85, 247, 0.5)" }}
        >
          <img src={icon} alt={name} className="w-full h-full object-contain" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-4 flex flex-col lg:flex-row items-center gap-2">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="text-secondary text-[17px] lg:w-[60%] leading-[30px]"
        >
          {personalInfo.about}
        </motion.p>

        <motion.div
          variants={fadeIn("left", "spring", 0.3, 1)}
          className="relative flex-1 hidden lg:flex items-center justify-center overflow-visible"
          style={{ minHeight: "560px", perspective: "1000px" }}
        >
          {/* Orbit rings */}
          <motion.div
            className="absolute w-[520px] h-[520px] rounded-full border border-purple-500/15"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[440px] h-[440px] rounded-full border border-purple-400/10"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[580px] h-[580px] rounded-full border border-purple-500/5"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          />

          {/* Floating skill icons */}
          {technologies.map((tech, index) => (
            <FloatingSkill
              key={tech.name}
              icon={tech.icon}
              name={tech.name}
              index={index}
              total={technologies.length}
            />
          ))}

          {/* Profile photo */}
          <motion.div
            className="w-80 h-80 rounded-full overflow-hidden relative z-20"
            style={{
              border: "4px solid transparent",
              backgroundImage: "linear-gradient(#1d1836, #1d1836), linear-gradient(135deg, #915eff, #ee3e38, #915eff)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
              boxShadow: "0 0 30px rgba(145, 94, 255, 0.3), 0 0 60px rgba(145, 94, 255, 0.1)",
            }}
            animate={{
              boxShadow: [
                "0 0 30px rgba(145, 94, 255, 0.3), 0 0 60px rgba(145, 94, 255, 0.1)",
                "0 0 45px rgba(238, 62, 56, 0.3), 0 0 90px rgba(238, 62, 56, 0.1)",
                "0 0 30px rgba(145, 94, 255, 0.3), 0 0 60px rgba(145, 94, 255, 0.1)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <img
              src={profile}
              alt="Vishnu"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Background glow */}
          <div className="absolute w-80 h-80 rounded-full bg-purple-500/5 blur-3xl" />
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, navigationPaths.about);
