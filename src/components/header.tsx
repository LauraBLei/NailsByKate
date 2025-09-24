export const HeaderComponent = () => {
  return (
    <div className="flex justify-between p-5 w-full">
      <div>Logo</div>
      <nav className="flex items-center">
        <NavItem href="#prisliste" value="PRISLISTE" />

        <Divider />
        <NavItem href="#booking" value="BOOKING" />
        <Divider />
        <NavItem href="#ommeg" value="OM MEG" />
        <Divider />
        <NavItem href="#gallery" value="GALLERY" />
      </nav>
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
