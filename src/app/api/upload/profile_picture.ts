import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { auth } from "@/lib/auth";

const f = createUploadthing();

export const profilePictureFileRouter = {
  profilePicture: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1
    }
  })
} satisfies FileRouter;

export type profilePictureFileRouter = typeof profilePictureFileRouter;
