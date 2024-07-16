import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo/long-logo.png";
import SearchBar from './SearchBar';
import Navbar from './Navbar';

export default function Hadder() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-5">
      <div className="container grid grid-cols-3 relative items-start">

        <Link href={"/"} className="relative flex items-center h-10 my-auto " >
          <Image src={logo} alt="logo" fill className="absolute object-contain object-left" />
        </Link>

        <SearchBar />

        <Navbar/>
      </div>
    </header>
  );
}
// top-[-40%]