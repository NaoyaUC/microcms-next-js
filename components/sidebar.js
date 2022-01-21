import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="hidden sm:hidden md:hidden lg:block xl:block px-3 bg-gray-50">
      <div className="my-2">
        <input className="py-2 px-4 w-full" placeholder="Search..." />
      </div>
      <nav className="flex flex-col">
        <Link href="/">
          <a className="rounded bg-slate-200 my-2 py-2 px-4 no-underline border-gray-50 text-gray-800 hover:bg-orange-300">
            Home
          </a>
        </Link>
        <Link href="/about">
          <a className="rounded bg-slate-200 my-2 py-2 px-4 no-underline border-gray-50 text-gray-800 hover:bg-orange-300">
            About
          </a>
        </Link>
        <Link href="/contact">
          <a className="rounded bg-slate-200 my-2 py-2 px-4 no-underline border-gray-50 text-gray-800 hover:bg-orange-300">
            Contact
          </a>
        </Link>
      </nav>
    </div>
  );
}
