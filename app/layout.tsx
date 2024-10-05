import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";

export const metadata: Metadata = {
  title: "Mahesh Rautrao Portfolio",
  description: "I am a full stack developer and this is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
