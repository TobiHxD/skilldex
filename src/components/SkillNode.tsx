import React from "react";
import { Handle, Position } from "reactflow";

interface SkillNodeProps {
  data: {
    label: React.ReactNode; // das übergegebene Logo
  };
}

export default function SkillNode({ data }: SkillNodeProps) {
  return (
    <div
      style={{
        width: 100,
        height: 100,
        borderRadius: "50%",
        backgroundColor: "#f0f0f0",
        border: "2px solid #ccc",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {data.label}

      <Handle
        type="target"
        position={Position.Top}
        style={{ background: "#555" }}
      />

      {/* Ausgehende Verbindung (unten) */}
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ 
            background: "#555",
            visibility: "hidden"
         }}
      />
    </div>
  );
}
