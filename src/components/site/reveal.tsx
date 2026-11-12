import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export const Reveal = ({ children, className, delay = 0, ...props }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className={cn(className)}
    {...props}
  >
    {children}
  </motion.div>
);

export const RevealGroup = ({ children, className, ...props }: HTMLMotionProps<"div">) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.07 } },
    }}
    className={cn(className)}
    {...props}
  >
    {children}
  </motion.div>
);

export const RevealItem = ({ children, className, ...props }: HTMLMotionProps<"div">) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 26 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
    }}
    className={cn(className)}
    {...props}
  >
    {children}
  </motion.div>
);
