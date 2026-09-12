import { useEffect, useState } from "react";
import { TagItem } from "./TagItem/TagItem";
import TagInputs from "./TagInputs/TagInputs";
import { SearchInput } from "./SearchInput/SearchInput";

import "./SearchBar.css";

const tagging1 = [
  {
    type: "Hardware",
    icon: "fa-solid fa-microchip fa-sm",
  },
  {
    type: "Periférico",
    icon: "fa-solid fa-keyboard fa-sm",
  },
  {
    type: "Setup",
    icon: "fa-solid fa-desktop fa-sm",
  },
  {
    type: "Friki",
    icon: "fa-solid fa-dice-d20 fa-sm",
  },
  {
    type: "Accesorios",
    icon: "fa-solid fa-headphones fa-sm",
  },
  {
    type: "Consolas",
    icon: "fa-solid fa-gamepad fa-sm",
  },
  {
    type: "Oficina",
    icon: "fa-solid fa-briefcase fa-sm",
  },
];

const tagging2 = [
  {
    type: "Mi ubicación",
    icon: "fa-solid fa-location-dot fa-sm",
  },
  {
    type: "Usados/outlet",
    icon: "fa-solid fa-box-open fa-sm",
  },
  {
    type: "Hogar",
    icon: "fa-solid fa-house fa-sm",
  },
  {
    type: "Combos",
    icon: "fa-solid fa-boxes-stacked fa-sm",
  },
  {
    type: "Simuladores",
    icon: "fa-solid fa-vr-cardboard fa-sm",
  },
  {
    type: "Gameroom",
    icon: "fa-solid fa-couch fa-sm",
  },
];

export function SearchBar() {
  // const [errorMessage, setErrorMessage] = useState("");
  const [isFloating] = useState(false);
  const [isMobile] = useState(() => window.innerWidth <= 768);
  const isDrawerMode = isFloating || isMobile;
  const [isMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen && isDrawerMode ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, isDrawerMode]);

  return (
    <>
      <div
        className={`sb__search-wrapper
           ${isFloating ? "floating" : ""} 
        `}
      >
        <div className="sb__input-container">
          <SearchInput />
        </div>
        <div className="sb__tagging">
          <div className="sb__tagging-1">
            <h2>Busco |</h2>
            {tagging1.map(({ type, icon }, index) => (
              <TagItem key={index} type={type} icon={icon} tagging={1} />
            ))}
          </div>
          <div className="sb__tagging-2">
            <h2>En |</h2>
            {tagging2.map(({ type, icon }, index) => (
              <TagItem key={index} type={type} icon={icon} tagging={2} />
            ))}
          </div>
          <div className="other-tags">
            <TagInputs />
          </div>
        </div>
        {/* errorMessage && <p className="sb__error">{errorMessage}</p> */}
      </div>
    </>
  );
}

export default SearchBar;
