## React Flagkit SVG

[![npm version](https://img.shields.io/npm/v/react-flagkit-svg.svg)](https://www.npmjs.com/package/react-flagkit-svg)
[![npm downloads](https://img.shields.io/npm/dm/react-flagkit-svg.svg)](https://www.npmjs.com/package/react-flagkit-svg)

#### Why yet another package?

Supports tree shaking and uses svg tags instead of img tags + typings

### Installation

> yarn add react-flagkit-svg

> npm install react-flagkit-svg

### Usage

```javascript
import React from "react";
import { DE } from "react-flagkit-svg";

const App = () => {
  return <DE />;
};

export default App;
```

Flags can be configured with inline props:

```javascript
<DE width={21} height={15} />
```

It also works great with utility classes like tailwindcss

```javascript
<DE className="h-6" />
```

If you can't use ES6 imports, it's possible to include flag from the compiled folder ./dist.

```javascript
var DE = require("react-flagkit-svg/dist/flags/DE").default;

var MyComponent = React.createClass({
  render: function() {
    return <DE />;
  }
});
```

You can also include the whole flag pack:

```javascript
import React from "react";
import * as Flag from "react-flagkit-svg";

const App = () => {
  return <Flag.DE />;
};

export default App;
```

Readme and build process inspired by [react-feather](https://github.com/feathericons/react-feather)
