import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stylx Systems - IT Infrastructure and Security",
  description: "Accelerate your digital journey with Stylx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
