import Link from "next/link";
import { makeAsciiOrbit } from "@/components/asciiOrbit";
import ContactForm from "@/components/ContactForm";
import { PixelMonogram } from "@/components/PixelMark";
import ServicesAccordion from "@/components/ServicesAccordion";
import {
  experience,
  links,
  principles,
  profile,
  projects,
  resumeUrl,
  services,
  servicesIntro,
  tools,
} from "@/data/content";
import styles from "./page.module.css";

const ascii = makeAsciiOrbit();

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroHead}>
          <div aria-hidden="true" className={styles.heroGlow} />
          <p className={`${styles.kicker} mono`}>(Portfolio) — {profile.location}</p>
          <h1 className={`${styles.heroTitle} display`}>
            {profile.headline[0]}
            <br />
            <span className="glow">{profile.headline[1]}</span>
          </h1>
        </div>

        <div className={styles.heroGrid}>
          <div className={styles.heroLeft}>
            <ul className={`${styles.principles} mono`}>
              {principles.map((p) => (
                <li key={p}>
                  <span className="chip">{p}</span>
                </li>
              ))}
            </ul>
            <div className={styles.introPanel}>
              <span aria-hidden="true" className={styles.corner} />
              <p className={styles.intro}>
                <span className={styles.long}>{profile.intro}</span>
                <span className={styles.short}>{profile.introShort}</span>
              </p>
              <a href="#contact" className="glassBtn">
                Let’s talk <span aria-hidden="true">›</span>
              </a>
            </div>
            <div className={`${styles.heroFoot} mono`}>
              <span>Scroll down ↓</span>
              <span>Since {profile.since}</span>
            </div>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.summaryRow}>
              <p className={styles.summary}>
                <span className={styles.long}>{profile.summary}</span>
                <span className={styles.short}>{profile.summaryShort}</span>
              </p>
              <div className={styles.monogram}>
                <PixelMonogram size={72} label="Pixel monogram" />
              </div>
            </div>
            <figure className={styles.orbit}>
              <div className={styles.orbitGlass}>
                <pre aria-hidden="true" className={styles.ascii}>
                  {ascii}
                </pre>
              </div>
              <figcaption className={`${styles.figLabel} mono`}>Fig. 01 — Orbit</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <p className={`${styles.sectionNum} mono`}>(01)</p>
            <h2 className={`${styles.sectionTitle} display`}>Selected Work</h2>
          </div>
          <p className={styles.sectionLead}>
            Recent freelance and in-house website projects — from company profiles to personal
            portfolios.
          </p>
        </div>
        <ul className={styles.cards}>
          {projects.map((p) => (
            <li key={p.slug}>
              <Link href={`/work/${p.slug}`} prefetch={true} className={styles.card}>
                <div className={styles.cardImg}>
                  <span className="imgLabel mono">[Project image]</span>
                  <span className={`${styles.cardNum} mono`}>{p.num}</span>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardRow}>
                    <h3 className={styles.cardName}>{p.name}</h3>
                    <span className={`${styles.cardYear} mono`}>{p.year} ↗</span>
                  </div>
                  <span className={`${styles.cardTags} mono`}>{p.tags}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* SERVICES */}
      <section id="services" className={styles.services}>
        <div className={styles.servicesHead}>
          <p className={`${styles.servicesNum} mono`}>(02) — Services</p>
          <p className={styles.servicesIntro}>{servicesIntro}</p>
        </div>
        <div className={styles.servicesBanner}>
          <div className={styles.servicesWord} aria-hidden="true">
            Services
          </div>
          <span className={`${styles.tag} ${styles.tag1} mono`}>Design First</span>
          <span className={`${styles.tag} ${styles.tag2} mono`}>Scalable Stack</span>
          <span className={`${styles.tag} ${styles.tag3} mono`}>Deploy Project</span>
        </div>
        <div className={styles.servicesGrid}>
          <div className={styles.servicesMark}>
            <PixelMonogram size={64} cutout="var(--bg-deep)" />
          </div>
          <ServicesAccordion services={services} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className={styles.section}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutLeft}>
            <p className={`${styles.sectionNum} mono`}>(03)</p>
            <h2 className={`${styles.sectionTitle} display`}>About</h2>
            <div className={styles.portrait}>
              <span className="imgLabel mono">[Portrait]</span>
            </div>
          </div>
          <div className={styles.aboutRight}>
            <p className={styles.bio}>{profile.bio}</p>
            <div className={styles.toolkit}>
              <h3 className={`${styles.label} mono`}>Toolkit</h3>
              <ul className={`${styles.tools} mono`}>
                {tools.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <h3 className={`${styles.label} ${styles.expLabel} mono`}>Experience &amp; Education</h3>
            <ul>
              {experience.map((e) => (
                <li key={e.role} className={styles.expRow}>
                  <span className={styles.expRole}>{e.role}</span>
                  <span className={styles.expCompany}>{e.company}</span>
                  <span className={`${styles.expYears} mono`}>{e.years}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={styles.contact}>
        <div className={styles.contactInner}>
          <div className={styles.contactCopy}>
            <p className={`${styles.contactNum} mono`}>(04) — Contact</p>
            <h2 className={`${styles.contactTitle} display`}>
              Don’t be shy,
              <br />
              <span className="glow">say hi.</span>
            </h2>
            <a href={`mailto:${profile.email}`} className={styles.email}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              <span>{profile.email}</span>
            </a>
            <ul className={`${styles.contactLinks} mono`}>
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noreferrer" className={styles.pill}>
                    {l.label} ↗
                  </a>
                </li>
              ))}
              <li>
                <a href={profile.phone.href} className={styles.pill}>
                  {profile.phone.label}
                </a>
              </li>
              <li>
                <a href={resumeUrl} className={styles.pill}>
                  Résumé ↗
                </a>
              </li>
            </ul>
          </div>
          <ContactForm to={profile.email} />
        </div>
      </section>
    </main>
  );
}
