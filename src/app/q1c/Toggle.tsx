"use client";

import { useState } from "react";
import { Details } from "~/components/Details";

export function DifferentToggle(props: { note: string }) {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn((on) => !on);
  console.log("Toggle.tsx rendering");
  return (
    <div>
      <button className="p-2 bg-gray-100 text-black" onClick={toggle}>
        Toggle
      </button>
      <div>{isOn ? "on" : "off"}</div>
      <div>
        {/* @ts-ignore */}
        {isOn ? <Details note={props.note} /> : <p>not showing children</p>}
      </div>
    </div>
  );
}
