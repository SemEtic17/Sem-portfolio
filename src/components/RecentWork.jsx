import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const RecentWork = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Showcase</p>
        <h2 className={styles.sectionHeadText}>My Recent Work.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Here's a live demonstration of one of my recent projects. Explore the
        interactive experience to see my work in action.
      </motion.p>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="mt-10 w-full"
      >
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-black-100 border border-tertiary">
          <iframe
            src="https://take-me-anywhere-demo.netlify.app/"
            title="My Recent Work - Take Me Anywhere"
            className="w-full h-[600px] md:h-[700px] lg:h-[800px] border-0"
            allow="fullscreen"
            loading="lazy"
          />
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(RecentWork, "recent-work");
