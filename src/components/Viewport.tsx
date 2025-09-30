"use client";

import { useState, useCallback } from "react";

export default function MiniFlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomIntensity = 0.001;
    setScale((prev) => Math.max(0.1, prev - e.deltaY * zoomIntensity));
  };

  const onMouseDown = () => setIsDragging(true);
  const onMouseUp = () => setIsDragging(false);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      setPosition((prev) => ({
        x: prev.x + e.movementX,
        y: prev.y + e.movementY,
      }));
    },
    [isDragging]
  );

  return (
    <div
      onWheel={onWheel}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp} // falls Maus den Bereich verlässt
      onMouseMove={onMouseMove}
      style={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#111",
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
      }}
    >
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          transformOrigin: "0 0",
        }}
      >
        {/* Nodes */}
        <div
          style={{
            position: "absolute",
            left: 100,
            top: 100,
            width: 100,
            height: 50,
            background: "dodgerblue",
            color: "white",
            textAlign: "center",
            lineHeight: "50px",
            borderRadius: 8,
          }}
        >
          Start
        </div>

        <div
          style={{
            position: "absolute",
            left: 300,
            top: 200,
            width: 100,
            height: 50,
            background: "orange",
            color: "white",
            textAlign: "center",
            lineHeight: "50px",
            borderRadius: 8,
          }}
        >
          Push
        </div>
      </div>
    </div>
  );
}
