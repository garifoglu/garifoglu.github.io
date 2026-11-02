// Lenis smooth scrolling was removed because it made the mouse wheel feel odd.
// The browser's native scrolling is used instead (menu links still scroll smoothly via CSS).
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
