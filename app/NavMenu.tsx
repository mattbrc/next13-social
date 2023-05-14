import Link from "next/link";
// import Image from "next/image";

export default function NavMenu() {
  return (
    <nav className="flex items-center justify-between h-20 bg-blue-500 text-slate-100">
      <Link href={"/"} className="ml-4">
        Logo
        {/* <Image
          src="/logo.svg" // Route of the image file
          width={216}
          height={30}
          alt="NextSpace Logo"
        /> */}
      </Link>
      <ul className="flex">
        <li className="flex items-center h-20">
          <Link className="flex mr-4" href={"/about"}>
            About
          </Link>
        </li>
        <li className="flex items-center h-20">
          <Link className="flex mr-4" href={"/blog"}>
            Blog
          </Link>
        </li>
        <li className="flex items-center h-20">
          <Link className="flex mr-4" href={"/users"}>
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
}
