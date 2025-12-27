import { useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { cn } from '../../lib/utils';

export const MagnetButton = ({ children, onClick, className, variant = "primary" }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { type: "spring", stiffness: 150, damping: 15 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.3);
    y.set((clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variants = {
    primary: "bg-[#D4AF37] text-white hover:bg-[#C5A028]",
    secondary: "bg-[#EAE0D5] text-[#4A4A4A] hover:bg-[#D6C6B0]",
    outline: "border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className={cn("relative px-6 py-3 rounded-xl font-medium transition-colors duration-300 flex items-center justify-center gap-2 font-sans-modern", variants[variant], className)}
    >
      {children}
    </motion.button>
  );
};
