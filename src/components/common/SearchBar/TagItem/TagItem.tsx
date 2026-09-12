import { useState } from "react";
import "./TagItem.css";
export function TagItem({ type, icon, tagging }) {
  const [addedTag, setAddedTag] = useState(false);

  return (
    <div
      className={`sb__tag` + tagging + `-container`}
      onClick={() => setAddedTag(!addedTag)}
    >
      <i className={icon} style={{ color: "white" }}></i>
      <span>{type}</span>
      {addedTag && <i className="fa-solid fa-x"></i>}
    </div>
  );
}

export default TagItem;
