import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

/**
 * Mounts the App component to the provided element and sets up a history object
 * to listen for changes and call the provided callback function on navigation.
 *
 * @param {Element} el - The element to mount the App component to.
 * @param {Object} cb - An optional object containing an onNavigate function to call on navigation.
 * @param {Function} cb.onNavigate - A function to call on navigation with the next pathname.
 * @return {Object} An object containing the onParentNavigate function to push a new pathname to history.
 */
const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });
  if (onNavigate) history.listen(onNavigate);
  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      history.push(nextPathname);
    },
  };
};

if (process.env.NODE_ENV !== "production") {
  const devRoot = document.querySelector("#_auth-dev-root");

  if (devRoot) {
    mount(devRoot, {
      onNavigate: () => {
        console.log("Do nothing");
      },
      defaultHistory: createBrowserHistory(),
    });
  }
}

export { mount };
