import { DialogContent } from "@/components/ui/dialog"
import Dropzone from "@/components/ui/dropzone"
import { DialogTitle } from "@radix-ui/react-dialog"

export default function ProfilePictureUpdate() {
    return (
        <DialogContent>
            <DialogTitle>Update Profile Picture</DialogTitle>
            <Dropzone />
        </DialogContent>
    )
}