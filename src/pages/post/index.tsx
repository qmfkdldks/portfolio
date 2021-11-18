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
import styled from "styled-components";

const Layer = styled.div`
  display: flex;
  justify-content: space-around;

  background-color: #eeedee;
`;

const Header = styled.div`
  margin-left: 15px;
  margin-top: 25px;
  margin-bottom: 65px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 768px;
`;

const Title = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 60px;
  line-height: 1.05;
`;

const Image = styled.img`
  box-shadow: 0 0 25px rgb(5 5 5 / 15%);
`;

export default function PostPage() {
  const [markdown, setSource] = React.useState("");

  React.useEffect(() => {
    fetch(AppMarkdown)
      .then((res) => res.text())
      .then((text) => setSource(text));
  }, []);

  return (
    <>
      <Header>DONT REPEAT STUDIO</Header>
      <Layer>
        <Image src="https://cdn.dribbble.com/users/758070/screenshots/13992732/media/e23d80f147270b7a99d262c6b3a82bcc.png?compress=1&resize=600x900" />
        <Column>
          <Title>Higher Order Component Parallex Effect</Title>

          <div>
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
        </Column>
      </Layer>
    </>
  );
}

ReactDOM.render(<PostPage />, document.getElementById("root"));