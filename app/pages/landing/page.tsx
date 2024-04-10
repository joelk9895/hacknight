import Hero from "./hero/hero";
import What from "./what/what";
import How from "./how/how";
import Timeline from "./timeline/Timeline";
import FeedBack from "./feedback/FeedBack";
import Stats from "./stats/stats";
import FAQPage from "./faq/faq";

export default function Landing() {
  return (
    <>
      <Hero />
      <What />
      <How />
      <Timeline />
      <Stats />
      <FeedBack />
      <FAQPage />
    </>
  );
}
