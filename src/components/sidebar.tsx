"use client";

import { useModal } from "@/context/modalcontext";
import { Modal } from "./modals/Modal";

export const Sidebar = () => {
  const { sidebar, closeSidebar } = useModal();

  return (
    <Modal
      isOpen={sidebar}
      onClose={closeSidebar}
      variant="drawer"
      position="right"
      width="w-56"
      className="bg-brand-Purple text-brand-Beige"
    >
      <nav className="flex flex-col items-center gap-6 p-6">
        <SidebarLink href="#prisliste" onClick={closeSidebar}>
          PRISLISTE
        </SidebarLink>
        <hr className="w-9" />

        <SidebarLink href="#booking" onClick={closeSidebar}>
          BOOKING
        </SidebarLink>
        <hr className="w-9" />

        <SidebarLink href="#ommeg" onClick={closeSidebar}>
          OM MEG
        </SidebarLink>
        <hr className="w-9" />

        <SidebarLink href="#gallery" onClick={closeSidebar}>
          GALLERY
        </SidebarLink>
      </nav>
    </Modal>
  );
};

interface SidebarLinkProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

const SidebarLink = ({ href, onClick, children }: SidebarLinkProps) => (
  <a
    href={href}
    className="text-lg hover:scale-100 scale-95 transform ease-in-out duration-300 hover:text-brand-SecondPink"
    onClick={onClick}
  >
    {children}
  </a>
);
