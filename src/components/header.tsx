import { Menu } from "lucide-react";
import Image from "next/image";

interface HeaderComponentProps {
  onMobileMenuClick?: () => void;
}

export const HeaderComponent = ({
  onMobileMenuClick,
}: HeaderComponentProps) => {
  return (
    <div className="flex   justify-between items-center p-1 w-full">
      <div>
        <Image
          src="/logo.svg"
          alt="Nails By Kate Logo"
          width={200}
          height={40}
          className="h-30  w-auto"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center pr-5">
        <NavItem href="#prisliste" value="PRISLISTE" />
        <Divider />
        <NavItem href="#booking" value="BOOKING" />
        <Divider />
        <NavItem href="#ommeg" value="OM MEG" />
        <Divider />
        <NavItem href="#gallery" value="GALLERY" />
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={onMobileMenuClick}
        className="md:hidden p-2 bg-brand-Purple cursor-pointer text-white rounded-full mr-5 shadow-lg"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>
    </div>
  );
};

const Divider = () => {
  return <div className="h-6 w-px bg-gray-400 mx-4"></div>;
};

const NavItem = ({ href, value }: { href: string; value: string }) => {
  return (
    <a href={href} className="font-semibold">
      {value}
    </a>
  );
};
