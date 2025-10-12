import { Button } from "@/components/ui/button"
import { DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog"
import Dropzone from "@/components/ui/dropzone"
import { DialogTitle } from "@radix-ui/react-dialog"

export default function ProfilePictureUpdate() {
  const handleUpload = () => {
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Update Profile Picture</DialogTitle>
      </DialogHeader>
      <Dropzone />
      <DialogFooter>
        <Button type="submit">Update</Button>
      </DialogFooter>
    </DialogContent>
  )
}
