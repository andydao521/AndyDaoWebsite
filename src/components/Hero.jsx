import { EnvelopeSimple, LinkedinLogo, GithubLogo, ArrowDown } from "@phosphor-icons/react";
import { profile } from "../data/content";
import Reveal from "./Reveal";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <Reveal as="p" className="eyebrow">
            Hello, I&apos;m
          </Reveal>
          <Reveal as="h1" className="hero__name" delay={60}>
            {profile.name}
          </Reveal>
          <Reveal as="p" className="hero__role" delay={120}>
            {profile.role}
          </Reveal>
          <Reveal as="p" className="hero__tagline" delay={180}>
            {profile.tagline}
          </Reveal>

          <Reveal className="hero__actions" delay={240}>
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </Reveal>

          <Reveal className="hero__social" delay={300}>
            <a href={`mailto:${profile.email}`} aria-label="Email Andy Dao">
              <EnvelopeSimple size={20} weight="bold" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Andy Dao on LinkedIn">
              <LinkedinLogo size={20} weight="bold" />
            </a>
            {profile.github ? (
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="Andy Dao on GitHub">
                <GithubLogo size={20} weight="bold" />
              </a>
            ) : null}
          </Reveal>
        </div>

        <Reveal className="hero__portrait" delay={160}>
          <div className="hero__portrait-frame">
            {profile.photo ? (
              <img src={profile.photo} alt={profile.name} />
            ) : (
              <div className="hero__portrait-placeholder" aria-hidden="true">
                {profile.initials}
              </div>
            )}
          </div>
          {profile.badges.map((badge, i) => (
            <span key={badge} className={`hero__badge hero__badge--${i}`}>
              {badge}
            </span>
          ))}
        </Reveal>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
