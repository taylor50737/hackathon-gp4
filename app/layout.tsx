import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/ui/header";
import SideNav from "@/components/ui/side-nav";
import Footer from "@/components/ui/footer";
import { connectDb } from "@/lib/connection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CICS Centre for Learning"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  connectDb()
    .then(() => {
      console.log("Database connected successfully.");
    })
    .catch((error) => {
      console.error("Database connection failed:", error);
    });
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <SideNav />
          <div className="w-full overflow-x-auto bg-light-violet pt-2">
            <div className="flex flex-col bg-white rounded-3xl justify-between min-h-screen">
              <Header />
              <main className="flex-grow">
                <div className="w-full md:max-2-6xl mx-auto">{children}</div>
              </main>
              <Footer className="invisible sm:visible" />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
