import React, { useRef, useEffect } from "react";
import { mount } from "dashboard/DashBoard";

/**
 * Renders a MarketingApp component that mounts a child component with a ref object and listens to browser history changes.
 *
 * @return {JSX.Element} A React component that renders a div element with a ref object.
 */
export default ({ onSignIn }) => {
	const ref = useRef(null);
	useEffect(() => {
		mount(ref.current);
	}, []);

	return <div ref={ref} />;
};
