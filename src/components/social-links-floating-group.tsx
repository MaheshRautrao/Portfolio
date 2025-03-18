"use client";

import { profileLinks } from "@/data/profile-links";
import { FloatingDock } from "@/components/accertinity/FloatingDock";

export function SocialLinksFloatingGroup() {
  return <FloatingDock items={profileLinks} />;
}
