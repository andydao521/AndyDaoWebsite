import { EnvelopeSimple, Phone, LinkedinLogo, ArrowUpRight } from "@phosphor-icons/react";
import { profile } from "../data/content";
import Reveal from "./Reveal";
import "./Contact.css";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: EnvelopeSimple,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^\d+]/g, "")}`,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "andy-h-dao",
    href: profile.linkedin,
    icon: LinkedinLogo,
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section section-alt contact">
      <div className="container contact__inner">
        <Reveal className="section-head contact__head">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let&apos;s build something together</h2>
          <p className="section-sub">
            I&apos;m actively looking for internship and new-grad software engineering opportunities.
            Reach out — I usually reply within a day.
          </p>
        </Reveal>

        <Reveal className="contact__channels" delay={100}>
          {channels.map(({ label, value, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              className="contact__channel"
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
            >
              <span className="contact__channel-icon">
                <Icon size={20} weight="bold" />
              </span>
              <span className="contact__channel-text">
                <span className="contact__channel-label">{label}</span>
                <span className="contact__channel-value">{value}</span>
              </span>
              <ArrowUpRight size={16} className="contact__channel-arrow" aria-hidden="true" />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
