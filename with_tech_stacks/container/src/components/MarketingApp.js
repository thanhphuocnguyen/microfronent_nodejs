import React, { useRef, useEffect } from "react";
import { mount } from "marketing/Marketing";
console.log("trigger actions");
const MarketingApp = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
export default MarketingApp;
