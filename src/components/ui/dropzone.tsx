"use client"

import { useState } from "react"

export default function Dropzone() {
    const [file, setFile] = useState<File | null>(null);

    return (
        <div 
            className="hover:bg-muted/20 w-full h-28 border-2 border-dashed border-muted rounded-lg flex items-center justify-center text-muted-foreground"
        >
            <input id="file" type="file" className="opacity-0 cursor-pointer" />
            <span>Click or Drag and Drop to upload</span>

        </div>
    )
}