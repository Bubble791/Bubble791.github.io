import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type DisplayItem = {
  title: string;
  Svg: string;
  tag: string;
};

const GenerationIVCatalog: DisplayItem[] = [
  {
    title: 'Pokémon Diamond',
    Svg: require('@site/static/img/boxart/1015.jpg').default,
    tag: 'getting-started/dp'
  },
];

const GenerationVCatalog: DisplayItem[] = [
  {
    title: 'Pokémon Diamond',
    Svg: require('@site/static/img/boxart/1015.jpg').default,
    tag: 'getting-started/dp'
  },
];

function Feature({ title, Svg, tag }: DisplayItem) {
  return (
    <a className={clsx(styles.ds_boxart)} href={tag}>
      <img className="shadow--md rounded-img" src={Svg} role="img" />
    </a>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2>关于</h2>
        <p>杂食系可盐可咸
        </p>
        <h2>Getting Started</h2>
        <p><a href='https://space.bilibili.com/21569445'>个人B站</a></p>

        <hr></hr>
        <h3 className={styles.header_label}>汉化作品</h3>
        <div className="row">
          {GenerationIVCatalog.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <hr></hr>
        <h3 className={styles.header_label}>改版作品</h3>
        <div className="row">
          {GenerationVCatalog.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <hr></hr>
      </div>
    </section>
  );
}
