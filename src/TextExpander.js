import { useState } from "react";

const TextExpander = ({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor = "#1f09cd",
  expanded = false,
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? `${children}  `
    : `${children.split(" ").slice(0, collapsedNumWords).join(" ")}...`;

  const btnStyles = {
    background: "none",
    border: "none",
    color: buttonColor,
    marginLeft: "6px",
    cursor: "pointer",
    font: "inherit",
  };

  return (
    <div className={className}>
      <p style={{ display: "inline" }}>{displayText}</p>
      <button style={btnStyles} onClick={() => setIsExpanded((exp) => !exp)}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
};

export default TextExpander;
