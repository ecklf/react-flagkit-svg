## React Flagkit SVG

[![npm version](https://img.shields.io/npm/v/react-flagkit-svg.svg)](https://www.npmjs.com/package/react-flagkit-svg)
[![npm downloads](https://img.shields.io/npm/dm/react-flagkit-svg.svg)](https://www.npmjs.com/package/react-flagkit-svg)

#### Why yet another package?

- Supports tree shaking
- Uses svg instead of img tags
- Adds typings

### Installation

```sh
yarn add react-flagkit-svg
```

```sh
npm install react-flagkit-svg
```

### Usage

```javascript
import React from "react";
import { DE } from "react-flagkit-svg";

const App = () => {
  return <DE />;
};

export default App;
```

Flags can be sized - based on height (default: 15)

```javascript
<DE size={30} />
```

You can also distort them by only passing width / height values

```javascript
// Add perserveAspectRatio='none' to allow distortion
<DE width={21} height={15} preserveAspectRatio="none" />
```

Also works great with utility classes i.e. frameworks like tailwindcss

```javascript
<DE className="h-12 w-auto rounded-sm" />
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
