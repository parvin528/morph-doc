import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'About Morph',
    url: '/docs/about-morph/overview-of-morph',
    svg: '/img/banner1.svg',
    description: (
      <>
        Learn more on what Morph is and our mission to revolutionize the industry.
      </>
    ),
  },
  
  {
    title: 'Quick Start',
    url: '/docs/quick-start/welcome-to-morph',
    svg: '/img/banner2.svg',
    description: (
      <>
        This guide will lead you through a seamless start with the vibrant Morph ecosystem.
      </>
    ),
  },

  {
    title: 'How Morph works',
    url: '/docs/how-morph-works/intro',
    svg: '/img/banner3.svg',
    description: (
      <>
        Gain insights into our unique approach and what distinguishes us from the rest.
      </>
    ),
  },

  {
    title: 'Build on Morph',
    url: 'https://www.morphl2.io/build',
    svg: '/img/banner4.svg',
    description: (
      <>
        Access comprehensive resources to bring your DApp from concept to launch on the Morph platform.
      </>
    ),
  },
];

function Feature({svg, title, url, description}) {
  return (
    <div className={"mt-2"}>
      <a href={url} className={clsx(styles.featureA, "p-2 pb-4 lg:p-[55px] lg:pb-[55px] md:p-8 md:pb-8 flex-col md:flex-row")} alt="description">
        <div className="text-left flex items-center justify-center">
          <img className={clsx(styles.featuresvg, 'w-[60px] md:w-[140px]')} src={svg} alt={description} role="img" />
          {/* <svg className={styles.featuresvg} role="img" /> */}
        </div>
        <div className="mt-1 text-left pl-4 flex flex-col items-center md:items-start justify-center">
          <h3 className={clsx(styles.featureH3, 'mb-0 !text-xs md:!text-3xl')}>{title}</h3>
          <p className={clsx(styles.featureP, 'mt-2 md:mt-[20px] !text-[10px] !leading-[12px] md:!text-xl')}>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container flex flex-col items-center">
        <h2 className="mt-4 md:mt-12 text-[15px] md:text-[32px]">Resource</h2>
        <div className="gap-2 md:gap-8 flex items-center grid grid-flow-row grid-cols-2">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
