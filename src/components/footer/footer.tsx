import Link from "next/link";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { NavigationMenuListCustom } from "../navigation-menu-list-custom";
import { profileLinks } from "@/data/profile-links";
import { NameProfileSection } from "../common/name-profile-section";

export function Footer() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-4">
      <div>
        <NameProfileSection />
      </div>

      <div>
        <NavigationMenu className="flex items-center gap-10">
          <NavigationMenuListCustom />
        </NavigationMenu>
      </div>

      <div className="flex gap-4">
        {profileLinks.map((link, index) => (
          <Link key={index} href={link.href} target="_blank">
            <span>{link.icon}</span>
          </Link>
        ))}
      </div>

      <div className="font-semibold text-sm mt-5">
        Designed & Developed With ❤️ By Me
      </div>
    </div>
  );
}
