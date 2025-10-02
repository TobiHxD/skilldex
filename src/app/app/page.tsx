'use client';

import React from "react";
import 'reactflow/dist/style.css';
import SkillTree from "@/components/SkillTree";
import { SkillNode } from "@/components/SkillNode";

export default function FlowBoard() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <SkillTree labelSource={"/assets/user.png"}>
            <SkillNode labelSource={"/assets/user.png"}>
                <SkillNode labelSource={"/assets/user.png"}>
                </SkillNode>
                <SkillNode labelSource={"/assets/user.png"}>
                </SkillNode>
            </SkillNode>
            <SkillNode labelSource={"/assets/user.png"}>
                <SkillNode labelSource={"/assets/user.png"}>
                </SkillNode>
                <SkillNode labelSource={"/assets/user.png"}>
                </SkillNode>
            </SkillNode>
        </SkillTree>
    </div>
  );
}