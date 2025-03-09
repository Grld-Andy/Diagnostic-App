import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center shadow-md p-5 bg-white">
      <Link href="/">
        <h1 className="text-2xl">Dashboard</h1>
      </Link>
      <div className="w-10 h-10 grid place-items-center">
        <Image src="/next.svg" width={40} height={40} alt="Profile pic" />
      </div>
    </nav>
  );
};

export default Navbar;
