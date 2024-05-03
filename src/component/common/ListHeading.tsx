import styles from './ListHeading.module.css'

interface Props {
  heading: string;
  data: string[];
  
}

const ListHeading = ({ heading, data }: Props) => {
  return (
    <section className={styles.container}>
      <h1>{heading.toLocaleLowerCase()}</h1>
      {data.map((d) => (
        <p key={d}>{d.charAt(0).toUpperCase() + d.slice(1)}</p>
      ))}
    </section>
  );
};

export default ListHeading;
