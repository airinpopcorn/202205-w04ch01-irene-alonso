/* eslint-disable no-unused-vars */
import { useState } from "react";
import { gentlemanList } from "../../model/gentlemanList";

export function Info({ initial }) {
  /* let [counter, setCounter] = useState(initial);

  setCounter((prev) => (gentlemanList.selected ? prev + 1 : prev)); */

  return <p className="info">0 gentlemen pointing at you</p>;
}
