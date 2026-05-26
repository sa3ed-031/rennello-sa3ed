import { motion } from "framer-motion";
import { useShowNavbar } from "../../contexts/NavBarContext";

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const HomeAnimatedPage = ({ children }) => {
  const { setShowNavLinks } = useShowNavbar();

  return (
    <motion.div
      className="container sm:py-6 pb-8 min-w-full flex justify-center bg-secondary"
      variants={fadeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
      onClick={() => {
        {
          /*
          Sa3ed:
          -1 شباب هي مشان بس تفتح القائمة اذا انضغط عأي محل تتسكر
          -2 هون ما بتتسكر اذا انضغط عالهيدر او الفوتر مشان نزبطا بعدين
          */
        }
        setShowNavLinks(false);
      }}
    >
      {children}
    </motion.div>
  );
};

export default HomeAnimatedPage;
