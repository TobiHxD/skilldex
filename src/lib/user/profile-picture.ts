"use server"

import { auth } from "@/lib/auth";
import { UTApi } from "uploadthing/server";
import { headers } from "next/headers";

async function removeFile(pictureUrl: string) {

  if (pictureUrl) {
    const pictureKey = pictureUrl.split("/").filter(Boolean).pop();

    if (!pictureKey) {
      throw new Error("Invalid picture URL format");
    }

    const utApi = new UTApi();
    try {
      await utApi.deleteFiles([pictureKey]);
    } catch (error) {
      console.error("Failed to delete profile picture from UploadThing:", error);
      throw new Error("Failed to delete profile picture");
    }
  }
}


async function removeProfilePicture() {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  await removeFile(session?.user.image || "");

  return auth.api.updateUser({
    headers: await headers(),
    body: {
      image: ""
    }
  });
}

async function updateProfilePicture(imageUrl: string) {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  // Remove the current profile picture if it exists
  if (session?.user.image) {
    await removeFile(session?.user.image || "");
  }

  return auth.api.updateUser({
    headers: await headers(),
    body: {
      image: imageUrl
    }
  });
}

export { removeProfilePicture, updateProfilePicture };