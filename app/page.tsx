import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/banks">per:100</Link>
      <Link href="/banks?per=20">per:200</Link>
      <Link href="/todos/1">Todo 1</Link>
    </div>
  );
}
