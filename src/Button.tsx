import { motion, useAnimationControls, MotionConfig } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 0, transition: { duration: 0.05 } },
  show: { opacity: 1, y: -20, transition: { duration: 0.5 } },
};

const fadeOutVariants = {
  hidden: { opacity: 1, y: 0, transition: { duration: 0.05 } },
  show: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

// BORDER ANIMATION VARIANTS
// const icon = {
//   hidden: {
//     pathLength: 0,
//     stroke: "#A374FF",
//   },
//   visible: {
//     pathLength: 1,
//     stroke: ["#17F1D1", "#ffd074", "#FAFAF5"],
//     transition: { duration: 2, ease: "backInOut" },
//   },
// };

function Button() {
  const controls = useAnimationControls();

  function handleHover() {
    controls.start("show");
  }

  function resetAnimation() {
    controls.start("hidden");
  }

  return (
    <>
      {/* <svg
        viewBox="0 0 76 16"
        xmlns="http://www.w3.org/2000/svg"
        className="inset-0"
      >
        <motion.path
          d="M10 10 L190 10 L190 190 L10 190 Z"
          stroke="#A374FF"
          strokeWidth="1"
          initial="hidden"
          animate="visible"
          variants={icon}
          className="fill-transparent"
        />
      </svg> */}

      <motion.button
        onHoverStart={() => handleHover()}
        onHoverEnd={() => resetAnimation()}
        className="flex justify-center items-center border border-purple rounded-full h-16 w-76"
      >
        <span className="leading-none text-lg font-bold text-text flex flex-col">
          <MotionConfig>
            <span className="invisible">Hidden</span>

            <motion.span
              variants={fadeOutVariants}
              initial={{ opacity: 1, y: 0 }}
              animate={controls}
            >
              Discover more of our work
            </motion.span>

            <motion.span
              variants={fadeInVariants}
              initial={{ opacity: 0, y: 0 }}
              animate={controls}
            >
              Discover more of our work
            </motion.span>
          </MotionConfig>
        </span>
      </motion.button>
    </>
  );
}

export default Button;
