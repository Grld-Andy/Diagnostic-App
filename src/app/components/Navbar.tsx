import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-white">
      <h1 className="text-2xl">Ngoane Health Tech Company</h1>
      <div className="w-10 h-10 grid place-items-center">
        <Image src="next.svg" width={40} height={40} alt="Profile pic" />
      </div>
    </nav>
  );
};

export default Navbar;
