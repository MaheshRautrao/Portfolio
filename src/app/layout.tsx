import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "sonner";
import ScrollToTopButton from "@/components/scroll-top";

export const metadata: Metadata = {
  title: "Mahesh Rautrao",
  description: "Mahesh Rautrao Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-black bg-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-white dark:bg-black max-w-[1440px] m-auto px-24 flex flex-col justify-between min-h-screen">
            <Header />
            {children}
            <Toaster richColors position="top-right" />
            <Footer />
            <ScrollToTopButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
