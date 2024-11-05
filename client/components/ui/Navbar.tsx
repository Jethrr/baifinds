import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/ui/NavigationMenu";

const Navbar = async () => {
  return (
    <nav className="py-3 flex justify-between ">
      <h1 className="font-bold text-3xl">BaiFinds</h1>
      <Navigation />
      <Link href="/auth/login">
        <Button className="bg-black text-white">Login</Button>
      </Link>
    </nav>
  );
};

export default Navbar;
