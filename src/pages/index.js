import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--4")}>
            <div className="text--center">
              <img
                src="img/kaartsquare.png"
                className={styles.showcase}
                role="img"
              />
            </div>
            <div className="text--center padding-horiz--md">
              <h3>Centraal Gelegen</h3>
              <p>Dicht bij de stad en de Natuur</p>
            </div>
          </div>
          <div className={clsx("col col--4")}>
            <div className="text--center">
              <img src="img/h1.jpg" className={styles.showcase} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
              <h3>Nieuwbouw</h3>
              <p>
                Prachtige nieuwe huizen, voorzien van de laatste moderne luxes
              </p>
            </div>
          </div>
          <div className={clsx("col col--4")}>
            <div className="text--center">
              <img
                src="img/gezellig.png"
                className={styles.showcase}
                role="img"
              />
            </div>
            <div className="text--center padding-horiz--md">
              <h3>Gezellig</h3>
              <p>Altijd wel iets te zien en iemand om mee te kletsen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
