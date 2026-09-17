import React, { useState } from "react";
import { Copy, Check, Code } from "lucide-react";
import "./CodeSnippet.css";

export const CodeSnippet = ({
  title,
  language = "javascript",
  description,
  code,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-snippet-box">
      <div className="code-snippet-header">
        <div className="code-header-info">
          <Code size={16} className="text-accent" />
          <span className="code-snippet-title">{title}</span>
          <span className="code-snippet-lang">{language}</span>
        </div>
        <button
          className="code-copy-btn"
          onClick={handleCopy}
          aria-label="Copy code snippet to clipboard"
        >
          {copied ? (
            <>
              <Check size={14} className="text-success" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {description && <div className="code-snippet-desc">{description}</div>}

      <pre className="code-snippet-pre">
        <code>{code}</code>
      </pre>
    </div>
  );
};
