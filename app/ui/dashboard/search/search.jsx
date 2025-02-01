import styles from "./search.module.css";

const Search = ({ placeholder }) => {
  return <div className={styles.container}>
    <input type="text" placeholder={placeholder} className={styles.input} />
  </div>;
};

export default Search;
