# React Dark State

React Dark State a custom react hook to detect dark mode

## Getting Started

Install package with npm

```bash
npm install react-dark-state
```

or with yarn

```
yarn add react-dark-state
```

## Usage


```jsx | pure
import React from "react";
import useDarkState from "react-dark-state";

function App(){
  const darkState = useDarkState();

  return(
    <h1>Current State: { darkState }</h1>
    // Current State: dark/light
  )
}
```


