"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import styles from "./search.module.css";

const Search = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParams);

    params.set("q", e.target.value);

    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
