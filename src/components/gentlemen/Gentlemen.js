import { Icons } from "../icono/Icons";

export function Gentlemen({ gentlemanList }) {
  return gentlemanList.map((item) => (
    <li className="gentleman" key={item.name}>
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={"./img/" + item.picture}
          alt={item.alternativeText}
        />
        <span className="gentleman__initial">
          {item.name[0] === "T" ? item.name[4] : item.name[0]}
        </span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{item.name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profession:</span>
            {item.profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Status:</span> {item.status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span>{" "}
            {item.twitter}
          </li>
        </ul>
      </div>
      <Icons></Icons>
    </li>
  ));
}
