"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  showCloseButton?: boolean;
  variant?: "modal" | "drawer";
  position?: "left" | "right" | "center";
  maxWidth?: string;
  width?: string;
  className?: string;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  showCloseButton = true,
  variant = "modal",
  position = "center",
  maxWidth = "max-w-[800px]",
  width = "w-80",
  className = "",
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle ESC key press and body scroll lock
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      // Calculate scrollbar width to prevent layout shift
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      // Prevent body scroll and compensate for scrollbar
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen, onClose]);

  // Handle click outside
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  // Modal variant (centered)
  if (variant === "modal") {
    return (
      <div
        className={`fixed z-50 inset-0 w-full h-screen bg-brand-Black/50 items-center justify-center ${
          isOpen ? "flex" : "hidden"
        }`}
        onClick={handleOverlayClick}
      >
        <div
          ref={modalRef}
          className={`bg-brand-CreamPink ${maxWidth} text-brand-Black px-2 py-10 md:p-10 rounded-md flex flex-col gap-5 ${className}`}
        >
          {showCloseButton && (
            <div className="w-full flex justify-end">
              <button
                onClick={onClose}
                className="hover:opacity-70 transition-opacity"
              >
                <X className="text-brand-Black" />
              </button>
            </div>
          )}
          {children}
        </div>
      </div>
    );
  }

  // Drawer variant (slides from side)
  const slideClasses = {
    left: {
      container: "justify-start",
      panel: `${isOpen ? "translate-x-0" : "-translate-x-full"}`,
    },
    right: {
      container: "justify-end",
      panel: `${isOpen ? "translate-x-0" : "translate-x-full"}`,
    },
    center: {
      container: "justify-center",
      panel: `${isOpen ? "translate-x-0" : "translate-x-full"}`,
    },
  };

  return (
    <div
      className={`fixed z-40 inset-0 transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-brand-Black bg-opacity-50"
        onClick={handleOverlayClick}
      />

      {/* Drawer Container */}
      <div
        className={`relative h-full flex ${slideClasses[position].container}`}
      >
        <div
          ref={modalRef}
          className={`${width} h-full bg-brand-CreamPink shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col ${slideClasses[position].panel} ${className}`}
        >
          {showCloseButton && (
            <div className="flex justify-end p-4">
              <button
                onClick={onClose}
                className="text-brand-Black hover:opacity-70 transition-opacity"
              >
                <X size={24} />
              </button>
            </div>
          )}

          <div className="flex-1 overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};
