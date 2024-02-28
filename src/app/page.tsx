

import { auth } from "@/auth";
import Landing from "@/components/Landing";
import MyCourse from "@/components/mycourse";
const getUserDetails = async () =>{
  const session = await auth();
  return session;
}
export default async function Home() {
  const session = await getUserDetails();
  if(!session || !session?.user){
    return (
      <Landing/>
    );
  
  }
  return (
    <MyCourse/>
  );

}
