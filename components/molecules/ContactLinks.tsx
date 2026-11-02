import Link from "next/link";
import { contact } from "@/utils/ContactSocials";

export default function ContactLinks() {
  return (
    <div className="flex flex-col pb-9 lg:pb-0">
      {/* To change the contact details, please go to: utils/ContactSocials.ts */}
      <Link
        href={`mailto:${contact.email}`}
        className="pb-2 text-base uppercase no-underline hover:underline"
      >
        {contact.email}
      </Link>
      <Link
        href={`tel:${contact.tel}`}
        className="text-base uppercase no-underline hover:underline"
      >
        +358 45 113 9571
      </Link>
    </div>
  );
}
