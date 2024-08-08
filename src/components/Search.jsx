import styles from "./search.module.css";
import { API_KEY1 } from "../../.env/key";

import { useEffect, useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
//const query = "pizza";
const API_KEY = API_KEY1;

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
