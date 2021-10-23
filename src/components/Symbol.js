import { useState } from "react";

export default Symbol = ({ char, name, TeX, copyAsPreference }) => {
  const [isCopied, setIsCopied] = useState(false);

  const isCopiedStr = "Copied!";

  const copyToClipboard = async (symbol) => {
    await navigator.clipboard.writeText(symbol);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div
      className="symbol"
      onClick={() => {
        copyAsPreference === "plain_text"
          ? copyToClipboard(char)
          : copyToClipboard(TeX);
      }}
    >
      <div className="symbol-text center">{char}</div>
      <div className="symbol-name">
        {isCopied ? <span className="symbol-copied">{isCopiedStr}</span> : name}
      </div>
    </div>
  );
};
