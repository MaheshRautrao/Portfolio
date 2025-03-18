"use client";

import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Card } from "@/components/ui/card";
import { NavigationMenuListCustom } from "../navigation-menu-list-custom";
import { NameProfileSection } from "../common/name-profile-section";
import { HeaderThemeDropdown } from "./header-theme-dropdown";

export function Header() {
  return (
    <>
      <header className="flex justify-center py-4">
        <Card className="text-black dark:text-white p-4 z-10">
          <div className="flex items-center justify-between space-x-10">
            <NameProfileSection />
            <nav>
              <NavigationMenu className="flex items-center space-x-10">
                <NavigationMenuListCustom />
                <HeaderThemeDropdown />
              </NavigationMenu>
            </nav>
          </div>
        </Card>
      </header>
    </>
  );
}
