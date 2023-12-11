import { motion, useAnimationControls, MotionConfig } from "framer-motion";

function Button() {
  const controls = useAnimationControls();

  function handleHover() {
    controls.start("show");
  }

  function resetAnimation() {
    controls.start("hidden");
  }

  const fadeInVariants = {
    hidden: { opacity: 0, y: 0, transition: { duration: 0.05 } },
    show: { opacity: 1, y: -20, transition: { duration: 0.5 } },
  };

  const fadeOutVariants = {
    hidden: { opacity: 1, y: 0, transition: { duration: 0.05 } },
    show: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  return (
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
  );
}

export default Button;
