import { Input } from "@/components/ui/input";
import { sign } from "crypto"

 const signup = () =>{
    return(
        <div className="mt-20 flex flex-row  items-center">
            <div className="max-w-md">
            <Input placeholder="Email"/>
            <Input placeholder="password"/>
        </div>
        </div>
    )
}
export default signup;