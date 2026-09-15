import { skills } from "../data/content";
import Reveal from "./Reveal";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">Tools I reach for</h2>
        </Reveal>

        <div className="skills__grid">
          {skills.map((group, i) => (
            <Reveal as="div" className="skills__group card" key={group.category} delay={i * 80}>
              <h3 className="skills__category">{group.category}</h3>
              <div className="skills__items">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
