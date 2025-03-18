"use client";

import { PinContainer } from "./accertinity/3DPin";
import Image from "next/image";

export function ProfileImage3DPin() {
  return (
    <PinContainer
      title="/maheshrautrao.in"
      href="https://www.maheshrautrao.in/"
    >
      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[18rem] ">
        <div>
          <Image
            src="/profileImage.jpg"
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </div>
      </div>
    </PinContainer>
  );
}
