import { useState } from "react";
import { ITEMS, CATEGORIES } from "../../utils/constants";
import "./Menu.css";

export default function Menu() {
    const [active, setActive] = useState("Todos");

    const filtered = active === "Todos" ? ITEMS : ITEMS.filter((i) => i.category === active);

    return (
        <section id="menu" className="menu">
            <div className="menu__inner">
                <div className="menu__header">
                    <span className="section-label">Lo que ofrecemos</span>
                    <h2 className="section-title">Nuestro menú</h2>
                    <p className="menu__subtitle">
                        Ingredientes de primera, preparación con atención y amor al detalle.
                    </p>
                </div>

                <div className="menu__filters" role="tablist" aria-label="Filtrar por categoría">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            role="tab"
                            aria-selected={active === cat}
                            className={`menu__filter ${active === cat ? "menu__filter--active" : ""}`}
                            onClick={() => setActive(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="menu__grid">
                    {filtered.map((item) => (
                        <article className="menu__card" key={item.id}>
                            <div className="menu__card-img">
                                <img src={item.img} alt={item.name} loading="lazy" />
                            </div>
                            <div className="menu__card-body">
                                <div className="menu__card-top">
                                    <h3 className="menu__card-name">{item.name}</h3>
                                    <span className="menu__card-price">{item.price}</span>
                                </div>
                                <p className="menu__card-desc">{item.desc}</p>
                                <span className="menu__card-tag">{item.category}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}