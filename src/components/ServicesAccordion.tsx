"use client";

import { useState } from "react";
import styles from "./ServicesAccordion.module.css";

type Service = { title: string; body: string };

export default function ServicesAccordion({ services }: { services: Service[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className={styles.list}>
      <p className={styles.lead}>What I can help with:</p>
      {services.map((s, i) => {
        const isOpen = open === i;
        const panelId = `service-panel-${i}`;
        return (
          <div key={s.title} className={styles.item}>
            <button
              type="button"
              className={styles.button}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.title}>{s.title}</span>
              <span aria-hidden="true" className={styles.sign}>
                {isOpen ? "–" : "+"}
              </span>
            </button>
            <div id={panelId} hidden={!isOpen} className={styles.body}>
              {s.body}
            </div>
          </div>
        );
      })}
    </div>
  );
}
