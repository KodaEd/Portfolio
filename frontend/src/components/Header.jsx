import { motion } from "framer-motion";
import HeadShot from "../assets/1685687015475.jpeg";

export default function Header() {
  const sentence = "Hello! <br/> Im Koda, a <br/> Software Developer <br/> based in Sydney";
  const words = sentence.split(" ");

  const sentenceVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const wordVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col md:flex-row gap-[40px] w-full lg:pl-[200px] md:pl-[50]">
      <img
        className="w-[200px] h-[200px] rounded-full"
        src={HeadShot}
        alt="A photo of my head"
      />
      <motion.h1
        className="scroll-m-20 max-w-[500px] text-4xl font-extrabold tracking-tight lg:text-5xl"
        variants={sentenceVariants}
        initial="initial"
        animate="animate"
      >
        {words.map((word, i) => (
          word === "<br/>" ? <br key={i}/> : 
          <motion.span key={i} className="inline-block" variants={wordVariants}>
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}