"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Handle ESC key press
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
    };
  }, [isOpen, onClose]);

  // Handle click outside
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-brand-Black/50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleOverlayClick}
    >
      <div
        ref={sidebarRef}
        className={`fixed right-0 top-0 h-full w-56 bg-brand-Purple text-brand-Beige shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 cursor-pointer hover:bg-brand-SecondPink rounded-full transition-colors"
          aria-label="Close sidebar"
        >
          <X size={24} />
        </button>

        {/* Sidebar content */}
        <div className="p-6 pt-16 h-full overflow-y-auto">
          <nav className="flex flex-col items-center gap-6">
            <a
              href="#prisliste"
              className="text-lg hover:scale-100 scale-95 transform ease-in-out duration-300  "
              onClick={onClose}
            >
              PRISLISTE
            </a>
            <hr className="w-9" />
            <a
              href="#booking"
              className="text-lg hover:scale-100 scale-95 transform ease-in-out duration-300 hover:text-brand-SecondPink "
              onClick={onClose}
            >
              BOOKING
            </a>
            <hr className="w-9" />
            <a
              href="#ommeg"
              className="text-lg hover:scale-100 scale-95 transform ease-in-out duration-300 hover:text-brand-SecondPink "
              onClick={onClose}
            >
              OM MEG
            </a>

            <hr className="w-9" />
            <a
              href="#gallery"
              className="text-lg hover:scale-100 scale-95 transform ease-in-out duration-300 hover:text-brand-SecondPink "
              onClick={onClose}
            >
              GALLERY
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};
