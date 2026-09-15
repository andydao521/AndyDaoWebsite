import { GraduationCap, Trophy, MapPin } from "@phosphor-icons/react";
import { education } from "../data/content";
import Reveal from "./Reveal";
import "./Education.css";

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">Education</p>
          <h2 className="section-title">Where I'm learning the fundamentals</h2>
        </Reveal>

        <Reveal className="education__card card" delay={80}>
          <div className="education__main">
            <div className="education__icon">
              <GraduationCap size={26} weight="duotone" />
            </div>
            <div>
              <h3 className="education__school">{education.school}</h3>
              <p className="education__degree">{education.degree}</p>
              <div className="education__meta">
                <span>
                  <MapPin size={14} weight="bold" aria-hidden="true" /> {education.location}
                </span>
                <span>{education.dates}</span>
                <span>GPA: {education.gpa}</span>
              </div>
            </div>
          </div>

          <div className="education__honors">
            <span className="education__honors-label">
              <Trophy size={16} weight="bold" aria-hidden="true" /> Honors & Awards
            </span>
            <div className="education__honors-list">
              {education.honors.map((honor) => (
                <span key={honor} className="tag">
                  {honor}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
