import { about } from "../data/content";
import Reveal from "./Reveal";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section section-alt about">
      <div className="container about__inner">
        <Reveal className="section-head">
          <p className="eyebrow">About</p>
          <h2 className="section-title">A bit about me</h2>
        </Reveal>

        <div className="about__grid">
          <div className="about__text">
            {about.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 80}>
                {p}
              </Reveal>
            ))}
          </div>

          <Reveal className="about__facts" delay={120}>
            {about.facts.map((fact) => (
              <div key={fact.label} className="about__fact">
                <span className="about__fact-label">{fact.label}</span>
                <span className="about__fact-value">{fact.value}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
