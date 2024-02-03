import Spotlight from "@/app/components/hero/spotlight";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col items-center justify-center w-[100svw] h-[100svh] bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <h1 className="text-8xl font-bold text-center mt-10">
          saturday
          <br />
          <span className="text-[#DBF72C] text-[5rem]">hacknight</span>
        </h1>
        <p className="mt-[2rem]">
          A biweekly hackathon for learning new technologies
        </p>
        <button className="mt-[3rem] bg-[#151515fa] text-[#DBF72C] px-5 py-2 rounded-lg">
          Join us
        </button>
      </section>
    </>
  );
}
