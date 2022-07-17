"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

function useDarkState() {
  const [reactDarkState, setReactDarkState] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    function detectDarkMode() {
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      } else {
        return "light";
      }
    } // initial


    setReactDarkState(detectDarkMode()); // listen for changes

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", event => {
      const newColorScheme = event.matches ? "dark" : "light";
      setReactDarkState(newColorScheme);
    });
  }, []);
  return reactDarkState;
}

var _default = useDarkState;
exports.default = _default;