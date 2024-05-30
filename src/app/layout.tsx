import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "../../providers/ReactQueryProvider";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "FutDev",
  description: "Nosso Time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
