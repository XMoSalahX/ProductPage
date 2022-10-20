import React from "react";

const Title = ({ children }) => {
  return (
    <h2
      style={{
        fontWeight: "600",
        fontSize: "24px",
        lineHeight: "32px",
        color: "var(--color-main-title)",
      }}
    >
      {children}
    </h2>
  );
};

export default Title;
