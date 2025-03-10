import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center shadow-md p-5 bg-white">
      <Link href="/">
        <h1 className="text-2xl">Dashboard</h1>
      </Link>
      <div className="w-10 h-10 grid place-items-center">
        <Image src="/logo.jpg" width={60} height={60} alt="Profile pic" />
      </div>
    </nav>
  );
};

export default Navbar;
