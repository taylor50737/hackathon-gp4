import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/ui/header";
import SideNav from "@/components/ui/side-nav";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CICS Dashboard",
  description: "Created by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <SideNav />
          <div className="w-full overflow-x-auto bg-light-violet pt-2">
            <div className="overflow-auto bg-white rounded-3xl justify-between flex flex-col">
              <Header />
              <main className="w-full flex justify-center mx-auto mb-auto overflow-auto h-[calc(100vh - 120px)] overflow-y-auto relative">
                <div className="w-full md:max-2-6xl">{children}</div>
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
