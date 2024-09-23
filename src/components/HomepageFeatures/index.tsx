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
  {
    title: 'Pokémon Pearl',
    Svg: require('@site/static/img/boxart/1016.jpg').default,
    tag: 'getting-started/dp'
  },
  {
    title: 'Pokémon Platinum',
    Svg: require('@site/static/img/boxart/3541.jpg').default,
    tag: 'getting-started/pt'
  },
  {
    title: 'Pokémon HeartGold',
    Svg: require('@site/static/img/boxart/4787.jpg').default,
    tag: 'getting-started/hgss'
  },
  {
    title: 'Pokémon SoulSilver',
    Svg: require('@site/static/img/boxart/4788.jpg').default,
    tag: 'getting-started/hgss'
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
      <h2>About</h2>
        <p>Generation IV and V hacking has seen a resurgence in popularity. With this comes new research, tools, and methods that can be applied to the game.
          However, most of the public-facing documentation about the DS Pokémon hacking scenes are significantly outdated, and refer to methodologies which are obselete or unstable.
        </p>
        <p>This wiki aims to rectify this by providing the up-to-date information necessary to modify the Generation IV and V Pokémon games.</p>
        <h2>Getting Started</h2>
        <p>To get started, select the game you are hacking below. You will then be brought to a landing page which will provide more detailed information.</p>

        <hr></hr>
      <h3 className={styles.header_label}>Generation IV</h3>
        <div className="row">
          {GenerationIVCatalog.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
