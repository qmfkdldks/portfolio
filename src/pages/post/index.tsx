import ReactDOM from "react-dom";
import React, { useState, useCallback, useRef } from "react";
import { Parallax } from "react-spring/renderprops-addons";
// import { useMediaQuery } from "react-responsive";
// import Code from "../../layers/code";
import Slice from "../../layers/slice";
import Pizza from "../../layers/pizza";
import AppMarkdown from "../../library/withParallax/README.md";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { xonokai } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function PostPage() {
  const [markdown, setSource] = React.useState("");

  React.useEffect(() => {
    fetch(AppMarkdown)
      .then((res) => res.text())
      .then((text) => setSource(text));
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        transition: "all 0.5s ease",
      }}
    >
      <h1>hihihi</h1>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={xonokai}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

ReactDOM.render(<PostPage />, document.getElementById("root"));
