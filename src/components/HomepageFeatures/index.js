import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Learn',
        Svg: require('@site/static/img/java-develop-pedia-learn-lp.svg').default,
        description: (
            <>
                Start your journey as a beginner and develop yourself piece by piece to a professional java developer.
                Everything is open source and free!
            </>
        ),
    },
    {
        title: 'Build',
        Svg: require('@site/static/img/java-develop-pedia-build-lp.svg').default,
        description: (
            <>
                Expand and develop projects. Learn about new frameworks and packages. Brought to you by hundreds of
                contributers and professionals.
            </>
        ),
    },
    {
        title: 'Improve',
        Svg: require('@site/static/img/java-develop-pedia-improve-lp.svg').default,
        description: (
            <>
                Expand your knowledge and stay up-to-date. Quit searching!
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <a href="/"><h3>{title}</h3></a>
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
