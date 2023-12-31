import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import PageHeader from "./_components/page-header/PageHeader";
import PageFooter from "./_components/page-footer/PageFooter";

const roboto = Roboto_Condensed({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <PageHeader />
        <main>{children}</main>
        <PageFooter />
      </body>
    </html>
  );
}
