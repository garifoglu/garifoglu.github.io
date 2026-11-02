import DesktopMenu from "../molecules/DesktopMenu";
import MobileMenu from "../molecules/MobileMenu";

export default function Header() {
  return (
    <>
      {/* Ctrl + Click on the component to open up the component file. */}
      <DesktopMenu />
      <MobileMenu />
    </>
  );
}
