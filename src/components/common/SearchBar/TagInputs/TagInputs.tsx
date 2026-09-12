import "./TagInputs.css";

export function TagInputs() {
  return (
    <>
      <hr
        style={{
          border: "none",
          borderTop: "1px solid gray",
          margin: "12px 0",
        }}
      />
      <div className="ti__container">
        <div className="ti__more-tags">
          <label htmlFor="sort" className="filter-title">
            Más etiqueteas
          </label>
          <select aria-label="Ordenar por" className="generic-select">
            <option value="">Etiquetas</option>
            <option value="last_price:asc">Menor precio</option>
            <option value="last_price:desc">Mayor precio</option>
            <option value="trust_factor:asc"> Confianza de página</option>
          </select>
        </div>
        <div className="ti__price-options">
          <label htmlFor="sort" className="filter-title">
            Ordenar por
          </label>
          <select aria-label="Ordenar por" className="generic-select">
            <option value="">Relevancia</option>
            <option value="last_price:asc">Menor precio</option>
            <option value="last_price:desc">Mayor precio</option>
            <option value="trust_factor:asc"> Confianza de página</option>
          </select>

          <label htmlFor="sort" className="filter-title">
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
    </>
  );
}

export default TagInputs;
