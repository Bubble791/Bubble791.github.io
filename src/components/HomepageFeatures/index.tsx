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
        {/* 图片滚动 */}
        {/*<div className={styles.screenshots}>
          <div className={styles.slider}>
            <img className="screen" src="/img/boxart/1015.jpg" alt="Image 1"/>
            <img className="screen" src="/img/boxart/1016.jpg" alt="Image 2"/>
            <img className="screen" src="/img/boxart/1016.jpg" alt="Image 3"/>
          </div>
        </div>*/}

        <h2>关于</h2>
        <p>测试测试</p>
        <p><a href='https://space.bilibili.com/21569445'>个人B站</a></p>
        <hr />
        <h3 className={styles.header_label}>汉化作品</h3>
        <div className="row">
          {GenerationIVCatalog.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
