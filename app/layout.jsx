import { Inter, Pacifico, Roboto } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";

const inter = Pacifico({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Roberto Home",
  description: "My own personal website! Created using NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <Navigation />
        {children}
      </body>
    </html>
  );
}
