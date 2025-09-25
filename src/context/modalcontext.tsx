"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  sidebar: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  imageModal: boolean;
  selectedImage: string | null;
  openImageModal: (imageSrc: string) => void;
  closeImageModal: () => void;
  infoModal: boolean;
  openInfoModal: () => void;
  closeInfoModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const [imageModal, setImageModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [infoModal, setInfoModal] = useState<boolean>(false);

  const openSidebar = () => setSidebar(true);
  const closeSidebar = () => setSidebar(false);

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setImageModal(true);
  };
  const closeImageModal = () => {
    setImageModal(false);
    setSelectedImage(null);
  };

  const openInfoModal = () => setInfoModal(true);
  const closeInfoModal = () => setInfoModal(false);

  return (
    <ModalContext.Provider
      value={{
        sidebar,
        openSidebar,
        closeSidebar,
        imageModal,
        selectedImage,
        openImageModal,
        closeImageModal,
        infoModal,
        openInfoModal,
        closeInfoModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
