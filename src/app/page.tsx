import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>Home Page</div>
      <Link href={"/about"}>Go to About Page</Link>
    </main>
  );
}
