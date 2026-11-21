import { profile } from "@/data/content";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={`${styles.footer} mono`}>
      <span>© {profile.copyrightYear} {profile.name}</span>
      <span>Designed &amp; built by hand</span>
      <a href="#top" className="navLink">
        Back to top ↑
      </a>
    </footer>
  );
}
