import type { MenuItem } from "../../data/menu";

type Pos = "center" | "left1" | "right1" | "left2" | "right2" | "hidden";

interface Props {
  item: MenuItem;
  pos: Pos;
}

export function MenuCard({ item, pos }: Props) {
  return (
    <article className="menu-slide" data-slide={item.id} data-pos={pos}>
      <div className="menu-slide__card cursor-glow">
        <div className="menu-slide__media">
          <img src={item.image} alt={item.name} loading="lazy" width={420} height={360} />
          <div className="menu-slide__reflection" aria-hidden="true" />
        </div>
        <span className="menu-slide__tag">{item.tag}</span>
        <span className="menu-slide__price">{item.price}</span>
        <div className="menu-slide__body">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <a className="btn btn--primary" href="#visit" aria-label={`Order the ${item.name} waffle`} tabIndex={pos === "center" ? 0 : -1}>
            Order This Waffle
          </a>
        </div>
      </div>
    </article>
  );
}
