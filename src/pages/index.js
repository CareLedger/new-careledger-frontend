import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "../views/Home/home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`bg ${inter.className}`}>
      <HomePage />
    </main>
  );
}
