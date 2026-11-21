"use client";

import { useState, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

const MAX = 1000;

/**
 * Static-site contact form: on submit it opens the visitor's email app with the
 * message pre-filled to `to`. Swap handleSubmit for a real endpoint (Formspree,
 * a Next.js route handler, etc.) if you want messages delivered without email.
 */
export default function ContactForm({ to }: { to: string }) {
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = `Portfolio enquiry from ${name}`;
    const body = `${message.trim() || "Hi Mark,"}\n\n— ${name}\n${email}`;
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Full name
        <input className={styles.field} name="name" type="text" placeholder="Your name" autoComplete="name" required />
      </label>
      <label className={styles.label}>
        Email
        <input
          className={styles.field}
          name="email"
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
          required
        />
      </label>
      <label className={styles.label}>
        Message (optional)
        <textarea
          className={styles.field}
          name="message"
          rows={3}
          maxLength={MAX}
          placeholder="Tell me about your project"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <span className={styles.count} aria-live="polite">
        {message.length > 0 ? `${MAX - message.length} characters left` : `${MAX} characters max`}
      </span>
      <button type="submit" className={`glassBtn ${styles.submit}`}>
        Submit <span aria-hidden="true">›</span>
      </button>
    </form>
  );
}
