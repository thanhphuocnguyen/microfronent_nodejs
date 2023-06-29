import React, { useRef, useEffect } from "react";
import { mount } from "auth/Auth";
import { useHistory } from "react-router-dom";

/**
 * Renders a MarketingApp component that mounts a child component with a ref object and listens to browser history changes.
 *
 * @return {JSX.Element} A React component that renders a div element with a ref object.
 */
const AuthApp = () => {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
export default AuthApp;
