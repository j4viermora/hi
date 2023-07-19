import { useState } from "react";

export const Code = ({ children }: any) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <pre>
      <code
        style={{
          background: "#f5f5f5",
          padding: "1rem 2rem",
          borderRadius: "0.3rem",
          fontSize: "0.9rem",
          lineHeight: "1.5rem",
          overflowX: "auto",
          display: "flex",
          margin: "1rem 0",
        }}
      >
        <div
          style={{
            flex: 1,
          }}
        >
          {children}
        </div>
        <div>
          <button className="button" onClick={copyToClipboard}>
            {copied ? "Copiado" : "Copiar"}
          </button>
        </div>
      </code>
    </pre>
  );
};
