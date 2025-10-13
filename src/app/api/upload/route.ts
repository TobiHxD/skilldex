import { createRouteHandler } from "uploadthing/next";
import { profilePictureFileRouter } from "./profile_picture";

export const { GET, POST } = createRouteHandler({
    router: profilePictureFileRouter,
});