import { useState } from "react";
import "./TagInputs.css";

export function TagInputs() {
  const [selectedTags, setSelectedTags] = useState(["test asd", "test asd"]);

  const handleSelect = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const text = e.target.options[selectedIndex].text;

    if (text && !selectedTags.includes(text)) {
      setSelectedTags((prev) => [...prev, text]);
    }

    e.target.text = "";
  };

  const handleRemove = (tagToRemove) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tagToRemove));
  };

  return (
    <>
      <hr
        style={{
          border: "none",
          borderTop: "1px solid gray",
          margin: "16px 0 0 0",
        }}
      />
      <div className="ti__container">
        <div className="ti__more-tags">
          <label htmlFor="sort" className="ti__filter-title">
            Más etiqueteas
          </label>
          <select
            aria-label="Ordenar por"
            onChange={handleSelect}
            className="generic-select"
          >
            <option value="last_price:asc">Apple</option>
            <option value="last_price:desc">Compran usados</option>
            <option value="trust_factor:asc">Mayorista</option>
            <option value="trust_factor:asc">Simuladores</option>
          </select>
          {selectedTags.map((tag) => (
            <div className="ti__added-tag" onClick={() => handleRemove(tag)}>
              <span key={tag} className="tag-chip">
                {tag}
              </span>
              <i className="fa-solid fa-x" style={{ color: "white" }}></i>
            </div>
          ))}
        </div>
        <div className="ti__price-options">
          <div className="ti__price-sort">
            <label htmlFor="sort" className="ti__filter-title">
              Ordenar por
            </label>
            <select aria-label="Ordenar por" className="generic-select">
              <option value="">Relevancia</option>
              <option value="last_price:asc">Menor precio</option>
              <option value="last_price:desc">Mayor precio</option>
              <option value="trust_factor:asc"> Confianza de página</option>
            </select>
          </div>
          <div className="ti__price-range">
            <label htmlFor="sort" className="ti__filter-title">
              Precio
            </label>
            <div className="price-inputs">
              <input
                type="number"
                placeholder="Mínimo"
                inputMode="numeric"
                onKeyDown={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                onChange={(e) => {}}
                className="generic-input"
              />
              <span className="price-separator">-</span>
              <input
                type="number"
                placeholder="Máximo"
                onKeyDown={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                inputMode="numeric"
                className="generic-input"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TagInputs;
