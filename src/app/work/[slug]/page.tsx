import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getProject, profile, projects } from "@/data/content";
import styles from "./project.module.css";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${profile.name}`,
    description: project.summary,
  };
}

// The page itself stays URL-independent so its shell can be shared and
// prefetched; the params read happens inside <Suspense> (Next 16 partial prefetching).
export default function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  return (
    <Suspense fallback={<ProjectSkeleton />}>
      <ProjectContent params={params} />
    </Suspense>
  );
}

function ProjectSkeleton() {
  return (
    <main aria-busy="true">
      <section className={styles.hero}>
        <Link href="/#work" className={`${styles.back} mono navLink`}>
          ← All work
        </Link>
        <div className={styles.skeletonTitle} />
      </section>
    </main>
  );
}

async function ProjectContent({
  params,
}: Pick<PageProps<"/work/[slug]">, "params">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const blocks = [
    { num: "01", title: "Overview", body: project.overview },
    { num: "02", title: "Challenge", body: project.challenge },
  ];

  return (
    <main>
      <section className={styles.hero}>
        <Link href="/#work" className={`${styles.back} mono navLink`}>
          ← All work
        </Link>
        <p className={`${styles.kicker} mono`}>
          (Project {project.num}) — {project.tags}
        </p>
        <h1 className={`${styles.title} display`}>{project.name}</h1>
      </section>

      <div className={styles.introRow}>
        <div className={styles.introPanel}>
          <span aria-hidden="true" className={styles.corner} />
          <p className={styles.summary}>{project.summary}</p>
        </div>
        <div className={`${styles.actions} mono`}>
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className={styles.action}>
              <span>Visit live site</span>
              <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span className={`${styles.action} ${styles.actionDisabled}`}>[Live URL]</span>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className={styles.action}>
              <span>Source code</span>
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>

      <dl className={styles.meta}>
        <div>
          <dt className="mono">Year</dt>
          <dd>{project.year}</dd>
        </div>
        <div>
          <dt className="mono">Role</dt>
          <dd>{project.role}</dd>
        </div>
        <div>
          <dt className="mono">Stack</dt>
          <dd>{project.stack.join(", ")}</dd>
        </div>
      </dl>

      <figure className={styles.cover}>
        <span className="imgLabel mono">[Project screenshot]</span>
        <figcaption className={`${styles.figLabel} mono`}>Fig. {project.num}</figcaption>
      </figure>

      <article>
        {blocks.map((b) => (
          <section key={b.title} className={styles.block}>
            <h2 className={styles.blockHead}>
              <span className={`${styles.blockNum} mono`}>({b.num})</span>
              <span className="display">{b.title}</span>
            </h2>
            <p className={styles.blockBody}>{b.body}</p>
          </section>
        ))}

        <section className={styles.block}>
          <h2 className={styles.blockHead}>
            <span className={`${styles.blockNum} mono`}>(03)</span>
            <span className="display">Approach</span>
          </h2>
          <ol className={styles.steps}>
            {project.approach.map((step, i) => (
              <li key={i}>
                <span className={`${styles.stepNum} mono`}>{String(i + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.block}>
          <h2 className={styles.blockHead}>
            <span className={`${styles.blockNum} mono`}>(04)</span>
            <span className="display">Outcome</span>
          </h2>
          <p className={styles.blockBody}>{project.outcome}</p>
        </section>
      </article>

      <nav className={styles.pager} aria-label="More projects">
        <Link href={`/work/${prev.slug}`} prefetch={true} className={styles.pagerLink}>
          <span className="mono">← Previous</span>
          <strong className="display">{prev.name}</strong>
        </Link>
        <Link
          href={`/work/${next.slug}`}
          prefetch={true}
          className={`${styles.pagerLink} ${styles.pagerNext}`}
        >
          <span className="mono">Next →</span>
          <strong className="display">{next.name}</strong>
        </Link>
      </nav>
    </main>
  );
}
