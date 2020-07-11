import React from "react";
import CharacterItem from "./CharacterItem";
import Spinner from "../ui/Spinner";
export default ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner>loading...</Spinner>
  ) : (
    <section className="cards">
      {items &&
        items.map((item) => (
          <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
    </section>
  );
};
