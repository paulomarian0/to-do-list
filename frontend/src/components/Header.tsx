import { Button } from "antd";
import { useRouter } from "next/router";
import { FormNewTask } from "./FormNewTask";

export function Header() {

  const router = useRouter()

  function LogOut(){

    localStorage.clear();
    router.push('/')
  }

  return (
    <div className="flex flex-row">
      <div className="flex w-full justify-center p-5">
        <FormNewTask />
      </div>

      <Button 
      onClick={LogOut}
      className="m-5"
      >Logout</Button>

    </div>
  )
}