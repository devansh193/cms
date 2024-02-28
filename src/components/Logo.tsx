import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";


const Logo = () => {
  const session = useSession();
    return (
      <Link href={"/"}>
        <div className="hover:opacity-90 transition flex items-center gap-x-2">
          <Image
            src={"/harkirat.png"}
            alt={"logo"}
            className="rounded-full"
            height={30}
            width={30}
          />
          {session?.data?.user? (<p className="text-gray-900 font-semibold">
            {session.data.user?.name}</p>
            ) : (
            <p className="text-gray-900 font-semibold">100xdevs</p>
            )}
        </div>
      </Link>
    );
};

export default Logo;
