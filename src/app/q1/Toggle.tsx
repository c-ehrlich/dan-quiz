"use client";

import { useState } from "react";

export function Toggle(props: { children: React.ReactNode }) {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn((on) => !on);
  console.log("Toggle.tsx rendering");
  return (
    <div>
      <button className="p-2 bg-gray-100 text-black" onClick={toggle}>
        Toggle
      </button>
      <div>{isOn ? "on" : "off"}</div>
      <div>{isOn ? props.children : <p>not showing children</p>}</div>
    </div>
  );
}
