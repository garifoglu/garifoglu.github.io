import Link from "next/link";

export const Anchor = ({
  href,
  children,
}: {
  href: string;
  children: string;
}) => {
  return (
    <Link href={href} className="text-base no-underline hover:underline">
      {children}
    </Link>
  );
};

export const AnchorLarge = ({
  href,
  children,
  onClick,
}: {
  href: string;
  children: string;
  onClick?: () => void;
}) => {
  return (
    <Link
      href={href}
      className="text-lg font-medium uppercase no-underline"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
