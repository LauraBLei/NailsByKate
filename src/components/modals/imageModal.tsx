import { useModal } from "@/context/modalcontext";
import { Modal } from "./Modal";
import Image from "next/image";

export const ImageModal = () => {
  const { imageModal, selectedImage, closeImageModal } = useModal();

  if (!selectedImage) return null;

  return (
    <Modal
      isOpen={imageModal}
      onClose={closeImageModal}
      maxWidth="max-w-[90vw]"
      showCloseButton={false}
      className="p-0 bg-transparent"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={selectedImage}
          alt="Gallery image"
          width={800}
          height={600}
          className="max-w-full max-h-[80vh] object-contain rounded-md"
        />
      </div>
    </Modal>
  );
};
