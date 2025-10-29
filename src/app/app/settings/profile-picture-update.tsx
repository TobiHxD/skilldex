"use client";

import { DialogContent, DialogHeader } from "@/components/ui/dialog"
import { generateUploadDropzone } from "@uploadthing/react"
import { profilePictureFileRouter } from "@/app/api/uploadthing/profile_picture"
import { DialogTitle } from "@radix-ui/react-dialog"
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import { updateProfilePicture } from "@/lib/user/profile-picture";

export default function ProfilePictureUpdate() {
  const UploadDropzone = generateUploadDropzone<profilePictureFileRouter>();

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Update Profile Picture</DialogTitle>
      </DialogHeader>
      <UploadDropzone
        endpoint="profilePicture"
        onClientUploadComplete={async (res) => {
          try {
            if (!res || res.length === 0) {
              throw new Error("No file uploaded");
            }
            await updateProfilePicture(res[0].ufsUrl);
            toast.success("Profile picture updated successfully!");
          } catch (error) {
            toast.error(`Failed to update profile picture: ${error instanceof Error ? error.message : "Unknown error"}`);
          }
        }}
        onUploadError={(error: Error) => {
          toast.error(`Upload failed: ${error.message}`);
        }}
      />
    </DialogContent>
  )
}
