import {useImage} from "@/hooks/useImage.tsx";
import React from "react";
import {
    Dialog,
    DialogContent, DialogDescription, DialogTitle,
} from "@/components/ui/dialog"

interface ModalProps {
    isOpen: boolean,
    onClose: () => void
}

const Modal: React.FC<ModalProps> = ({
                                         isOpen,
                                         onClose,
                                     }) => {

    const image = useImage();
    const onChange = (open: boolean) => {
        if (!open) {
            onClose()
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <div className="fixed inset-0 bg-black/75"/>
            <DialogTitle/>
            <DialogContent className="relative mx-auto max-w-full max-h-full overflow-auto">
                <img
                    src={image.urlImage}
                    alt="Selected Image"
                    width={2250}
                    height={1200}
                    className="max-w-full max-h-[90vh] object-contain"
                />
            </DialogContent>
            <DialogDescription> Đây là component dành cho hiển thị khi click vào ảnh </DialogDescription>
        </Dialog>
    )
}

export {Modal}
