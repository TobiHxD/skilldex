"use client";

import { DialogContent, DialogHeader } from "@/components/ui/dialog"
// import Dropzone from "@/components/ui/dropzone"
import { generateUploadDropzone } from "@uploadthing/react"
import { profilePictureFileRouter } from "@/app/api/uploadthing/profile_picture"
import { DialogTitle } from "@radix-ui/react-dialog"
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

export default function ProfilePictureUpdate() {
  const UploadDropzone = generateUploadDropzone<profilePictureFileRouter>();

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Update Profile Picture</DialogTitle>
      </DialogHeader>
      <UploadDropzone
        endpoint="profilePicture"
        onClientUploadComplete={(res) => {
          authClient.updateUser
          toast.success("Profile picture uploaded successfully!");
        }}
        onUploadError={(error: Error) => {
          toast.error(`Upload failed: ${error.message}`);
        }}
      />
    </DialogContent>
  )
}
