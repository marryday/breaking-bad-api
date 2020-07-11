import React, { useState, useEffect } from "react";
import Header from "./components/ui/Header";
import "./App.css";
import CharacterGrid from "./components/Characters/CharacterGrid";
import Search from "./components/ui/Search";
export default () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await (
        await fetch(
          `https://www.breakingbadapi.com/api/characters?name=${query}`
        )
      ).json();
      setItems(result);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="Container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};
