import { motion } from 'framer-motion';

function AnimatedButton() {
  return (
    <motion.path
  d="M0 0 L100 100"
  initial={{ pathLength: 0 }}
  animate={{ pathLength: 1 }}
  transition={{ duration: 2 }}
  stroke="black"
  strokeWidth="2"
/>


  );
}

export default AnimatedButton;