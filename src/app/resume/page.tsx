"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PdfRenderer } from "@/components/resume/pdf-renderer";

export default function Resume() {
  return (
    <div className="flex flex-col items-center gap-4 py-10">
      <Link
        href="C:\Users\91801\Desktop\Portfolio-new\client\public\resume.pdf"
        target="_blank"
      >
        <Button>Download Resume</Button>
      </Link>
      <div className="shadow-lg">
        <PdfRenderer />
      </div>
    </div>
  );
}
