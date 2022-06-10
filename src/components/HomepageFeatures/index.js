import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Multi-cultureel',
    src: require('@site/static/img/h1.jpg').default,
    description: (
      <>
        Van oost-europees tot mediteraans, verschillende ethniciteiten geven kleur aan de straat
      </>
    ),
  },
  {
    title: 'Nieuwbouw',
    src: require('@site/static/img/h2.jpg').default,
    description: (
      <>
        Prachtige nieuwe huizen, voorzien van de laatste moderne luxes
      </>
    ),
  },
  {
    title: 'Gezellig',
    src: require('@site/static/img/h2.jpg').default,
    description: (
      <>
        Altijd wel iets te zien en iemand om mee te kletsen
      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={src} src={styles.feature} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
