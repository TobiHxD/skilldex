"use client"

import { useState } from "react"
import { Button } from "./button";

interface DropzoneProps {
  file: File | null
}

function DropzoneContent({ file }: DropzoneProps) {
  if (file) {
    return (
      <div className="flex flex-col">
        <span>{file.name}</span>
        <Button variant="ghost" className="mt-2 text-destructive">Remove</Button>
      </div>
    )
  } else {
    return (
      <span>Click or Drag and Drop to upload</span>
    )
  }
}

export default function Dropzone() {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
      <div 
          className="relative hover:bg-muted/20 w-full h-28 border-2 border-dashed border-muted rounded-lg flex items-center justify-center text-muted-foreground"
      >
          <input 
            id="file" 
            type="file"
            className="absolute w-full h-full opacity-0 cursor-pointer"
            onChange={handleUpload} 
            hidden={file != null}
          />
          <DropzoneContent file={file} />
      </div>
  )
}
