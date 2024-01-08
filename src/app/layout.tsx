import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import { GlobalLayout } from "@/components/GlobalLayout/GlobalLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "БФЧКП",
  description: "БФЧКП — Белорусская Федерация Чирлидинга и Команд Поддержки",
  assets: ["/images/vercel.svg"],
};

const comfortaa = Comfortaa({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
        <GlobalLayout>{children}</GlobalLayout>
      </body>
    </html>
  );
}
