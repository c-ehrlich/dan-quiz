import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Link href="/q1">Question 1</Link>
      <Link href="/q2">Question 2</Link>
      <Link href="/q3">Question 3</Link>
    </>
  );
}
