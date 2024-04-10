"use client";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });
  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-145%"]);

  return (
    <section
      ref={ref}
      className="flex justify-center w-[100vw] bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] h-[900vh]"
    >
      <div className="sticky top-[30vh] left-0 overflow-hidden w-screen h-fit">
        <h1 className="text-8xl font-bold text-center mt-10 text-white">
          how it works<span className="text-[#DBF72C] text-[5rem]">?</span>
        </h1>
        <motion.div className="flex gap-[5rem]" style={{ x }}>
          <div className="flex min-w-[90vw] h-[90vh] bg-[#DBF72C] rounded-3xl items-center justify-center md:min-w-[30vw] md:h-[30vh]">
            <h4 className="text-4xl font-medium">Create a repo1</h4>
          </div>
          <div className="flex min-w-[90vw] h-[90vh] bg-[#DBF72C] rounded-3xl items-center justify-center md:min-w-[30vw] md:h-[30vh]">
            <h4 className="text-4xl font-medium">Create a repo2</h4>
          </div>
          <div className="flex min-w-[90vw] h-[90vh] bg-[#DBF72C] rounded-3xl items-center justify-center md:min-w-[30vw] md:h-[30vh]">
            <h4 className="text-4xl font-medium">Create a repo3</h4>
          </div>
          <div className="flex min-w-[90vw] h-[90vh] bg-[#DBF72C] rounded-3xl items-center justify-center md:min-w-[30vw] md:h-[30vh]">
            <h4 className="text-4xl font-medium">Create a repo4</h4>
          </div>
          <div className="flex min-w-[90vw] h-[90vh] bg-[#DBF72C] rounded-3xl items-center justify-center md:min-w-[30vw] md:h-[30vh]">
            <h4 className="text-4xl font-medium">Create a repo5</h4>
          </div>
          <div className="flex min-w-[90vw] h-[90vh] bg-[#DBF72C] rounded-3xl items-center justify-center md:min-w-[30vw] md:h-[30vh]">
            <h4 className="text-4xl font-medium">Create a repo6</h4>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
