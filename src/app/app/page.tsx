'use client';

import React from "react";
import ReactFlow, { Background, Controls, Node, Edge } from "reactflow";
import 'reactflow/dist/style.css';
import SkillNode from "@/components/SkillNode";

const nodes: Node[] = [
  {
    id: '1',
    type: 'skillNode',
    position: { x: 250, y: 100 },
    data: {
      label: <img src="/assets/user.png" alt="Logo" style={{ width: 50, height: 50, objectFit: 'contain' }} />,
    },
  },
  {
    id: '2',
    parentId: '1',
    type: 'skillNode',
    position: { x: 100, y: 300 },
    data: {
      label: <img src="/assets/user.png" alt="Logo" style={{ width: 50, height: 50, objectFit: 'contain' }} />,
    },
  },
];

const edges: Edge[] = [
    {
        id: 'e1-2',
        type: 'bezier',
        source: '1',
        target: '2'
    }
];

const nodeTypes = { skillNode: SkillNode };

export default function FlowBoard() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
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