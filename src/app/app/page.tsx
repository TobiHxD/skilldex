"use client";

import React from "react";
import ReactFlow, { Background, Controls, Node } from "reactflow";
import 'reactflow/dist/style.css';

// Einfache Node-Daten
const nodes: Node[] = [
  {
    id: '1',
    type: 'default',
    position: { x: 250, y: 100 },
    data: {
      label: <img src="/logo.png" alt="Logo" style={{ width: 100, height: 100 }} />,
    },
  },
];

export default function FlowBoard() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={[]}
        fitView
        panOnDrag
        zoomOnScroll
        zoomOnPinch
      >
        <Background color="#aaa" gap={16} />
        <Controls />
      </ReactFlow>
    </div>
  );
}
