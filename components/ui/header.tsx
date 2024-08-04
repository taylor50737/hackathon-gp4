import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-red-100">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="font-bond text-3xl">
          CICS
        </Link>

        <div className="space-x-4 text-xl">
          <Link href="/performance">Performance</Link>
          <Link href="/reliability">Reliability</Link>
          <Link href="/scale">Scale</Link>{" "}
        </div>
      </nav>
    </div>
  );
}
