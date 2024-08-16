import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Débora Menezes - Portfolio",
  description: "Discover my Portfolio. See my expertise in HTML, CSS, JavaScript, React, and more!",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
