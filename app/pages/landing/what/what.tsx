"use client";
import { useTransform, useScroll, motion } from "framer-motion";
import { useState, useRef } from "react";

export default function What() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
  });

  const scale1 = useTransform(scrollYProgress, [0.1, 0.4], [1, 1.5]);
  const opacity1 = useTransform(scrollYProgress, [0.3, 0.4], [1, 0]);
  const scale2 = useTransform(scrollYProgress, [0.42, 0.6], [0.7, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.42, 0.6], [0, 1]);
  const pathlength = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.92, 0.98], [0, 1]);

  return (
    <motion.section
      ref={container}
      className="w-[100vw] h-[500vh] bg-black text-white"
    >
      <div className="w-full h-[100vh] sticky top-0 left-0 flex flex-col items-center justify-center bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <motion.h2
          className="text-[5rem] font-bold flex"
          style={{ scale: scale1, opacity: opacity1 }}
        >
          wt
          <span className="relative flex">
            f
            <p className="absolute text-xl bottom-[-1rem] left-0 flex rotate-[-45deg]">
              <span className="rotate-[45deg] absolute top-[-1rem] left-[-3.5rem]">
                (fun🤩)
              </span>
              <svg
                fill="white"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 369.159 369.159"
              >
                <g>
                  <path
                    d="M336.689,48.802c-1.836-5.508-10.403-6.12-11.628,0c-11.016,38.556-33.048,74.052-31.823,115.668
		c0,5.508,6.731,7.956,10.403,4.284c5.508-4.896,10.404-9.792,14.688-15.3c1.836,60.588,6.731,166.464-78.948,146.269
		c-4.896-1.225-8.568-3.061-12.24-4.896c20.809-19.584,29.988-47.124,12.24-77.724c-4.896-8.568-17.748-15.912-27.54-10.404
		c-19.584,9.792-21.42,36.72-18.972,55.692c1.836,13.464,7.344,24.479,15.3,32.436c-18.972,14.076-45.288,20.196-66.708,15.3
		c-17.748-4.283-28.152-14.688-32.436-28.151c9.792-6.12,18.36-12.24,25.092-18.36c20.808-18.36,39.168-69.156-3.06-75.888
		c-34.272-6.121-40.392,63.647-38.556,83.844c0,2.448,0.612,4.284,0.612,6.732c-15.912,7.344-33.66,11.016-49.572,7.956
		C0.09,277.078,3.15,202.414,29.466,179.77c3.06-2.448-1.224-7.956-4.284-5.508c-35.496,26.929-31.212,83.845-1.224,113.833
		c18.972,18.359,47.124,12.852,71.604,1.224c16.524,46.512,82.008,42.84,121.788,14.076c22.645,14.688,55.08,14.076,78.336-1.225
		c47.124-31.212,37.944-102.815,35.496-153.612c8.568,10.404,17.137,20.808,26.929,30.6c3.672,3.672,11.628,1.224,11.016-4.284
		C364.229,130.81,351.378,89.806,336.689,48.802z M107.19,234.238c1.836-9.18,9.792-39.78,25.704-33.048
		c23.868,10.404,6.732,38.556-3.672,50.796c-6.732,7.344-14.688,14.076-23.868,19.584
		C103.518,259.33,104.742,246.479,107.19,234.238z M205.11,239.746c1.224-8.567,7.344-30.6,21.42-18.359
		c6.731,5.508,7.344,17.136,7.344,24.479c0,15.912-6.12,29.376-16.524,40.393C206.334,274.631,202.662,256.271,205.11,239.746z
		 M320.778,130.81c-0.612,0.612-1.225,1.224-1.837,1.836c-3.672,6.732-7.956,11.628-12.852,16.524
		c3.06-27.54,15.912-53.244,25.092-79.56c9.792,27.54,17.748,55.692,22.032,84.456c-6.732-7.956-13.464-16.524-20.196-25.092
		C329.346,124.69,322.614,126.526,320.778,130.81z"
                  />
                </g>
              </svg>
            </p>
          </span>
          <p className="text-[transparent] text-5xl">f</p>
          is it
          <span className="text-[#DBF72C]">?</span>
        </motion.h2>
        <motion.p
          className="absolute text-5xl w-[50svw] text-center font-bold"
          style={{ scale: scale2, opacity: opacity2 }}
        >
          It&apos;s a biweekly{" "}
          <span className="relative">
            {" "}
            <svg
              width="150"
              height="40"
              viewBox="0 0 884 246"
              fill="none"
              className="absolute  top-[1rem] left-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M19.5 206C73.2296 116.417 85.5 1.50006 133 28.0001C180.5 54.5001 153.5 131.5 216.5 195.5C279.5 259.5 287 38.5 336 44.5001C385 50.5001 415 274.5 469 206C523 137.5 508 22.5 567.5 44.5001C627 66.5001 557 286.5 761.5 206C966 125.5 793 19 793 19"
                stroke="#DBF72C"
                strokeOpacity="1"
                strokeWidth="50"
                style={{ pathLength: pathlength }}
              />
            </svg>
            online
            <motion.span
              className="absolute top-[-3rem] left-[-9.5rem] rotate-[-10deg] w-[50svw] text-xl"
              style={{ opacity: opacity3 }}
            >
              (every 4th hacknight is offline)
            </motion.span>
          </span>{" "}
          hackathon for learning new technologies
        </motion.p>
        <svg
          className={
            " pointer-events-none absolute top-[-10rem] left-[-50rem] z-[1]  h-[169%] w-[138%] lg:w-[84%]"
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 3787 2842"
          fill="none"
        >
          <g filter="url(#filter)">
            <ellipse
              cx="2000"
              cy="100"
              rx="1000"
              ry="1000"
              transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
              fill={"white"}
              fillOpacity="0.05"
            ></ellipse>
          </g>
          <defs>
            <filter
              id="filter"
              x="0.860352"
              y="0.838989"
              width="3785.16"
              height="2840.26"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              ></feBlend>
              <feGaussianBlur
                stdDeviation="151"
                result="effect1_foregroundBlur_1065_8"
              ></feGaussianBlur>
            </filter>
          </defs>
        </svg>
      </div>
    </motion.section>
  );
}
