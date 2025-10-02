'use client';

import React, { ReactNode } from "react";
import ReactFlow, {Node, Edge, Background, Controls } from "reactflow";
import SkillNodeType from "@/components/SkillNodeType";
import { SkillNodeProps } from "./SkillNode";

type SkillTreeProps = {
  labelSource: string;
  children?: ReactNode;
};

const nodeTypes = { skillNode: SkillNodeType };

export default function SkillTree({labelSource, children }: SkillTreeProps){
    const nodes: Node[] = [];
    const edges: Edge[] = [];


    nodes.push(
        {
            id: 'root',
            type: 'skillNode',
            position: { x: 250, y: 100 },
            data: {
                label: <img src={labelSource} alt="Logo" style={{ width: 50, height: 50, objectFit: 'contain' }} />,
            },
        }
    );

    function traverse(node: React.ReactElement<SkillNodeProps>, parentId?: string, depth = 0, index = 0) {
        const { labelSource, children } = node.props;
        const id = parentId + "-" + index;

        nodes.push({
            id,
            type: 'skillNode',
            position: { x: index * 200, y: depth * 200 },
            data: {
                label: <img src={labelSource} alt="Logo" style={{ width: 50, height: 50, objectFit: 'contain' }} />,
            },
            parentId,
        });

        if (parentId) {
        edges.push({
            id: `e${parentId}-${index}`,
            source: parentId,
            target: `${id}`,
            type: 'default',
        });
        }
        console.log("added Node: id: " + index)
        React.Children.forEach(children, (child, i) => {
        if (React.isValidElement<SkillNodeProps>(child)) traverse(child, id, depth + 1, i);
        });
    }
    if (children) {
        React.Children.forEach(children, (child, i) => {
        if (React.isValidElement<SkillNodeProps>(child)) {
            traverse(child, "root", 1, i);
        }
        });
    }
    return(
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
    );
}