"use client";

import { useState } from "react";

export function Container(props: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  console.log("Container.tsx");
  const [leftWidth, setLeftWidth] = useState(200);
  return (
    <div>
      <input
        type="range"
        min={1}
        max={499}
        step={1}
        value={leftWidth}
        onChange={(e) => setLeftWidth(Number(e.target.value))}
      />
      <div className="flex w-[500px] h-40 text-black">
        <div style={{ width: `${leftWidth}px` }}>{props.left}</div>
        <div style={{ width: `${500 - leftWidth}px` }}>{props.right}</div>
      </div>
    </div>
  );
}
