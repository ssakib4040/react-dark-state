import { useState, useEffect } from "react";

function useDarkState() {
  const [reactDarkState, setReactDarkState] = useState(null);

  useEffect(() => {
    function detectDarkMode() {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return "dark";
      } else {
        return "light";
      }
    }

    // initial
    setReactDarkState(detectDarkMode());

    // listen for changes
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";

        setReactDarkState(newColorScheme);
      });
  }, []);

  return reactDarkState;
}

export default useDarkState;
