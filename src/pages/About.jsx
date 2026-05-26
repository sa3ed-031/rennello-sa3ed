import AboutHero from "../components/aboutpage/AboutHero";
import OurMission from "../components/aboutpage/OurMission";
import HowItWorks from "../components/aboutpage/HowItWork";
import Features from "../components/aboutpage/Features";
import Stats from "../components/aboutpage/Stats";
import Team from "../components/aboutpage/Team";
import JoinUs from "../components/aboutpage/JoinUs";
import FAQ from "../components/aboutpage/FAQ";

function About() {
  return (
    <div className="aboutpage w-full flex gap-6 flex-col items-center transition-all duration-300">
      <section id="hero" className="w-full flex justify-center scroll-m-20">
        <AboutHero />
      </section>

      <section id="mission" className="w-full scroll-m-2">
        <OurMission />
      </section>

      <section id="how-it-works" className="w-full scroll-m-2">
        <HowItWorks />
      </section>

      <section id="features" className="w-full scroll-m-2">
        <Features />
      </section>

      <section id="stats" className="w-full scroll-m-2">
        <Stats />
      </section>

      <section id="team" className="w-full scroll-m-2">
        <Team />
      </section>

      <section id="faq" className="w-full scroll-m-2">
        <FAQ />
      </section>

      <section id="join" className="w-full scroll-m-2">
        <JoinUs />
      </section>
    </div>
  );
}

export default About;
