import { Inter } from "next/font/google";
import "./globals.css";
import GrainyBg from "./components/atoms/GrainyBg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Débora Menezes - Portfolio",
  description: "Discover my Portfolio featuring dynamic websites, modern UI/UX design, and cutting-edge web technologies. See my expertise in HTML, CSS, JavaScript, React, and more. Elevate your web presence with my skills!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GrainyBg />
        {children}
        </body>
    </html>
  );
}
