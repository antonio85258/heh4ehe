import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Product Cards",
  description: "Практическая работа Tailwind CSS"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}