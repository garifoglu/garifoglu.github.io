import Link from "next/link";
import { socials } from "@/utils/ContactSocials";

export default function Socials() {
  return (
    <div className="flex flex-wrap gap-5 md:gap-10">
      {/* To change the contact details, please go to: utils/ContactSocialsts */}
      {socials.map((social, index) => {
        return (
          <Link
            key={index}
            href={social.href}
            className="text-base uppercase no-underline hover:underline"
          >
            {social.social}
          </Link>
        );
      })}
    </div>
  );
}
