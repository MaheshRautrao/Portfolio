import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function NameProfileSection() {
  return (
    <Link href="/">
      <div className="flex items-center justify-between gap-2">
        <Avatar>
          <AvatarImage src="/profileImage.jpg" />
          <AvatarFallback>MR</AvatarFallback>
        </Avatar>
        <h1 className="font-bold">Mahesh Rautrao</h1>
      </div>
    </Link>
  );
}
