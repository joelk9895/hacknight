"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Stats() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const participantCountRef = useRef(null);
  const projectCountRef = useRef(null);
  const hackNightCountRef = useRef(null);
  const physicalHackNightCountRef = useRef(null);

  const [participantCount, setParticipantCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [hackNightCount, setHackNightCount] = useState(0);
  const [physicalHackNightCount, setPhysicalHackNightCount] = useState(0);

  useEffect(() => {
    const revealCounts = () => {
      const revealInterval = setInterval(() => {
        if (isIntersecting) {
          // Increment counts only if they are below their maximum values
          if (participantCount < 1000) {
            setParticipantCount((prevCount) => Math.min(prevCount + 10, 1000));
          }
          if (projectCount < 250) {
            setProjectCount((prevCount) => Math.min(prevCount + 5, 250));
          }
          if (hackNightCount < 28) {
            setHackNightCount((prevCount) => Math.min(prevCount + 1, 28));
          }
          if (physicalHackNightCount < 3) {
            setPhysicalHackNightCount((prevCount) =>
              Math.min(prevCount + 1, 3)
            );
          }
        } else {
          clearInterval(revealInterval); // Clear interval if not intersecting
        }

        // Clear interval once all counts reach their final values
        if (
          participantCount >= 1000 &&
          projectCount >= 250 &&
          hackNightCount >= 28 &&
          physicalHackNightCount >= 3
        ) {
          clearInterval(revealInterval);
        }
      }, 50);
    };

    revealCounts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntersecting]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      });
    }, options);

    if (participantCountRef.current) {
      observer.observe(participantCountRef.current);
    }
    if (projectCountRef.current) {
      observer.observe(projectCountRef.current);
    }
    if (hackNightCountRef.current) {
      observer.observe(hackNightCountRef.current);
    }
    if (physicalHackNightCountRef.current) {
      observer.observe(physicalHackNightCountRef.current);
    }

    return () => {
      if (participantCountRef.current) {
        observer.unobserve(participantCountRef.current);
      }
      if (projectCountRef.current) {
        observer.unobserve(projectCountRef.current);
      }
      if (hackNightCountRef.current) {
        observer.unobserve(hackNightCountRef.current);
      }
      if (physicalHackNightCountRef.current) {
        observer.unobserve(physicalHackNightCountRef.current);
      }
    };
  }, []);

  return (
    <section className="flex items-center justify-evenly h-[50vh] w-[100vw] bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] text-white">
      <AnimatePresence>
        <motion.div
          ref={participantCountRef}
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-5xl font-bold text-[#DBF72C]">
            {participantCount}+
          </p>
          <p>Participants</p>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          ref={projectCountRef}
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-5xl font-bold text-[#DBF72C]">{projectCount}+</p>
          <p>Projects</p>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          ref={hackNightCountRef}
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-5xl font-bold text-[#DBF72C]">{hackNightCount}</p>
          <p>HackNights</p>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          ref={physicalHackNightCountRef}
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-5xl font-bold text-[#DBF72C]">
            {physicalHackNightCount}
          </p>
          <p>Physical HackNights</p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
