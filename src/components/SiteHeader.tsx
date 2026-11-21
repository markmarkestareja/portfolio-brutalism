"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, profile } from "@/data/content";
import { PixelLogo } from "./PixelMark";
import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} mono`}>
      <div className={styles.bar}>
        <Link href="/" className={styles.brand} onClick={close}>
          <PixelLogo />
          <span>{profile.name}</span>
        </Link>

        <nav aria-label="Primary" className={styles.desktopNav}>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="navLink">
              {n.label}
            </Link>
          ))}
        </nav>

        {profile.available && (
          <div className={styles.status}>
            <span aria-hidden="true" className={styles.dot} />
            <span>Available for freelance</span>
          </div>
        )}

        <Link href="/#contact" className={styles.cta}>
          Contact
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <span aria-hidden="true" className={styles.menuSign}>
            {menuOpen ? "×" : "≡"}
          </span>
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Primary" className={styles.mobileNav}>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} onClick={close} className={styles.mobileLink}>
              <span>{n.label}</span>
              <span className={styles.mobileNum}>{n.num}</span>
            </Link>
          ))}
          {profile.available && (
            <div className={styles.mobileStatus}>
              <span aria-hidden="true" className={styles.dot} />
              <span>Available for freelance</span>
            </div>
          )}
        </nav>
      )}
    </header>
  );
}
