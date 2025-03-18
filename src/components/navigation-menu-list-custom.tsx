import Link from "next/link";
import { NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu";
import { navigationLinks } from "@/data/navigation-menu-list-custom-data";

export function NavigationMenuListCustom() {
  return (
    <NavigationMenuList className="flex items-center space-x-5">
      {navigationLinks.map((link) => (
        <NavigationMenuItem key={link.href}>
          <Link href={link.href}>{link.title}</Link>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  );
}
