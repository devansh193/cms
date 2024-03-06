"use client";
import Link from "next/link";

import { Button } from "./ui/button";
import Logo from "./Logo";
import { signOut, useSession, signIn } from "next-auth/react";
import router, { useRouter } from "next/router";

const Navbar = () => {
const session = useSession();
  return (
    <>
      <nav className="fixed z-50 top-0 px-4 w-full h-16 border-b shadow-sm bg-background/80 backdrop-blur-md flex items-center gap-2">
        <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between w-full">
          <Logo />
          {session?.data?.user?( <div className="flex items-center justify-between md:w-auto md:block space-x-2 md:space-x-4">

            <Button variant="outline" size="sm" onClick={()=>{
              signOut();
              router.push("/")
            }}>
              Sign Out
            </Button>

          </div> ):(    <div className="flex items-center justify-between md:w-auto md:block space-x-2 md:space-x-4">
            <Button variant="outline" size="sm" onClick={()=>{signIn();}}>
              Login
            </Button>
            <Link href="/signup">
              <Button variant="default" size="sm">
                Join now
              </Button>
            </Link>
          </div>)}
       
        </div>
      </nav>
    </>
  );
};

export default Navbar;
