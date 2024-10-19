import { Shalimar, League_Spartan } from "next/font/google";
import "./globals.scss";
import LayoutPage from "./components/layout/LayoutPage";

const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const shalimar = Shalimar({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${spartan.className} ${shalimar.className}`}>
        <LayoutPage>{children}</LayoutPage>
      </body>
    </html>
  );
}
