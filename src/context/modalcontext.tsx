import { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  sidebar: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  imageModal: boolean;
  openImageModal: () => void;
  closeImageModal: () => void;
  infoModal: boolean;
  openInfoModal: () => void;
  closeInfoModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [sidebar, setSidebar] = useState<boolean>(false);
  const [imageModal, setImageModal] = useState<boolean>(false);
  const [infoModal, setInfoModal] = useState<boolean>(false);

  const openSidebar = () => setSidebar(true);
  const closeSidebar = () => setSidebar(false);

  const openImageModal = () => setImageModal(true);
  const closeImageModal = () => setImageModal(false);

  const openInfoModal = () => setInfoModal(true);
  const closeInfoModal = () => setInfoModal(false);

  return (
    <ModalContext.Provider
      value={{
        sidebar,
        openSidebar,
        closeSidebar,
        imageModal,
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
