import { useState } from "react";
import { gentlemanList } from "../../model/gentlemanList";

export function Button({ initial }) {
  const [selected, setSelected] = useState(initial);
  function handlerButton(ev) {
    console.log(ev);
    setSelected(!selected ? (gentlemanList.selected = true) : false);
  }

  return (
    <button
      className="button button--select"
      onClick={(ev) => handlerButton(ev)}
    >
      Select all
    </button>
  );
}
