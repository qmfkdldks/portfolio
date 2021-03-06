import React from "react";
import { CodeBlock, atomOneDark } from "react-code-blocks";
import Reveal from "../../components/reveal";
import { Container } from "./style";

interface IComponentProps {
  toggle: boolean;
}

const Example = ({ toggle }: IComponentProps) => {
  return (
    <Reveal delay={1000}>
      <Container>
        {toggle && (
          <CodeBlock
            text={REACT_CODE}
            language={"javascript"}
            theme={atomOneDark}
            showLineNumbers={false}
          />
        )}
      </Container>
    </Reveal>
  );
};

const REACT_CODE = `
import React from "react";

/**
 * Functional Component
 * renders block type element given by slate editor.
 * it renders different element depending on the slate internal json
 * which has element.type value. Here you can add custom block type element.
 * 
 * @param  {additional elment attributes} {attributes
 * @param  {inner content of the element} children
 * @param  {object which represents actual html element} element}
 * 
 * @return element component given element.type. if no element type found,
 * it returns plain paragraph element.
 * 
 * @test
 * it should evaluate element type and render corresponding element
 * it should contain children in element
 * when no element type was found, it renders p element
 */
const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "heading-four":
      return <h4 {...attributes}>{children}</h4>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

Element.displayName = "Element";

export default Element;
`;

export default Example;
