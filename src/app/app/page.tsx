"use client";

import Viewport from "@/components/Viewport";

function Node({ left, top, label }: { left: number; top: number; label: string }) {
  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        padding: "8px 12px",
        borderRadius: 8,
        background: "#4ade80",
        boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
        cursor: "pointer",
      }}
    >
      {label}
    </div>
  );
}

export default function Page() {
  return (
    <Viewport>
      <Node left={100} top={100} label="Planche" />
      <Node left={400} top={220} label="Handstand" />
      <Node left={800} top={120} label="Front Lever" />
    </Viewport>
  );
}
