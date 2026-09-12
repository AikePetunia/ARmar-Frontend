import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./SearchInput.css";

const messages = [
  "Ryzen 5 7600x...",
  "Quest 2 VR...",
  "3090...",
  "32Gb Ram...",
  "DDR5...",
  "Hatsune Miku...",
];

export function SearchInput() {
  const [searchedProduct] = useSearchParams();
  const q = searchedProduct.get("q") ?? "";

  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  let [text, setText] = useState(q);

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % messages.length);
      return;
    }

    if (!isDeleting && subIndex === messages[index].length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      },
      isDeleting ? 30 : 100,
    );
    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index]);

  const handleChange = (event: any) => {
    setText(event.target.value);
    if (errorMessage) setErrorMessage("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      executeSearch();
    }
  };

  const handleClick = (/* event: React.MouseEvent<HTMLButtonElement> */) => {
    executeSearch();
  };

  const executeSearch = () => {
    text = text.trim();
    if (text == "" || text.includes("*")) {
      // querys
      setErrorMessage("Debes realizar una búsqueda.");
      navigate("/");
    } else {
      navigate(`/search?q=${text}`);
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder={messages[index].substring(0, subIndex)}
        aria-label="Search"
        className="sb__search-input"
        value={text}
        onChange={handleChange}
        required
        onKeyDown={handleKeyDown}
      />

      <button
        onClick={handleClick}
        style={{ padding: "0px", background: "transparent" }}
      >
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
      </button>
    </>
  );
}

export default SearchInput;
