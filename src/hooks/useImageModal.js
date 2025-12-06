import { useState } from "react";

export const useImageModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openImageModal = (imgSrc) => {
        setSelectedImage(imgSrc);
        setIsOpen(true);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
        setIsOpen(false);
    };

    return {
        isOpen,
        selectedImage,
        openImageModal,
        closeImageModal,
    };
};
