import { anchors } from "@/utils/AnchorsHeader";
import Logo from "../atoms/Logo";
import ThemeToggle from "../atoms/ThemeToggle";
import WavyAnchor from "../atoms/WavyAnchor";

export default function DesktopMenu() {
  return (
    <div className="sticky top-0 z-50 hidden items-center justify-between border-b-[1px] border-gray bg-black/80 px-4 py-3 backdrop-blur-md lg:flex">
      {/* To change the logo name, please go to atoms/Logo.tsx */}
      <Logo />
      <div className="hidden items-center gap-10 lg:flex">
        {/* Anchors are looped here */}
        {/* To change the anchor titles, please go to: utils/AnchorsHeader.ts */}
        {anchors.map((anchor, index) => {
          return (
            <WavyAnchor key={index} href={anchor.href}>
              {anchor.text}
            </WavyAnchor>
          );
        })}
        <ThemeToggle />
      </div>
    </div>
  );
}
