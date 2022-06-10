import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src="img/h1.jpg" className="featureImg" role="img" />
            </div>
            <div className="text--center padding-horiz--md">
              <h3>Multi-cultureel</h3>
              <p>Van oost-europees tot mediteraans, verschillende ethniciteiten geven kleur aan de straat</p>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src="img/h2.jpg" className="featureImg" role="img" />
            </div>
            <div className="text--center padding-horiz--md">
              <h3>Nieuwbouw</h3>
              <p>Prachtige nieuwe huizen, voorzien van de laatste moderne luxes</p>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <img src="img/h3.jpg" className="featureImg" role="img" />
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
