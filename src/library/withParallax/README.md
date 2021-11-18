Nine months since the launch of our first commercial product, the OpenAI API, more than 300 applications are now using GPT-3, and tens of thousands of developers around the globe are building on our platform. We currently generate an average of 4.5 billion words per day, and continue to scale production traffic.

```js
import withParallax from "../../components/withParallax";
import Component from "./component";

export default withParallax(Component);
```

You can add a custom props to an example wrapper:

```js { "props": { "className": "checks" } }
<Button>I’m transparent!</Button>
```

Or add padding between examples in a block by passing the `padded` modifier:

```jsx padded
<Button>Push Me</Button>
<Button>Click Me</Button>
<Button>Tap Me</Button>
```

Or disable an editor by passing a `noeditor` modifier:

```jsx noeditor
<Button>Push Me</Button>
```

To render an example as highlighted source code add a `static` modifier:

```jsx static
import React from 'react';
```

Examples with all other languages are rendered only as highlighted source code, not an actual component:

```html
<Button size="large">Push Me</Button>
```

Any [Markdown](http://daringfireball.net/projects/markdown/) is **allowed** _here_.