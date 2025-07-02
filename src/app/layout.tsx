import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Papelaria Frasato | Loja Virtual",
  description: "Papelaria Frasato, uma loja com todos os materiais escolares, para escritório para seu negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
