import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const profilePictureFileRouter = {
  profilePicture: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1
    }
  }).onUploadComplete(({ file }) => {
    console.log("Profile picture uploaded:", file);
  })
} satisfies FileRouter;

export type profilePictureFileRouter = typeof profilePictureFileRouter;