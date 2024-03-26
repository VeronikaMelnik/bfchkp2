import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {} from "next/navigation";
import { GlobalLayout } from "widgets/layouts";
import { LanguageEnum } from "@entities/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "БФЧКП",
  description: "БФЧКП — Белорусская Федерация Чирлидинга и Команд Поддержки",
  assets: ["/images/vercel.svg"],
};

type Props = Readonly<{
  children: React.ReactNode;
  params: { lang: LanguageEnum };
}>;

export default function RootLayout({ children, params: { lang } }: Props) {
  return (
    <html lang={lang}>
      <GlobalLayout lang={lang} className={inter.className}>
        {children}
      </GlobalLayout>
    </html>
  );
}
