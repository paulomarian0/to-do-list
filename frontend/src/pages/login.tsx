import { LogIn } from "@/services/login";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router'
import 'react-toastify/dist/ReactToastify.css';
import { IValuesProps } from "@/types/LoginType";

export default function Login() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (requestLogin: IValuesProps | any) => {

    LogIn(requestLogin)
      .then(() => {
        router.push('/tasks')
      })
      .catch((error) => {
        toast.error("Email address or password provided is incorrect.", {
          position: toast.POSITION.TOP_RIGHT
        });
      })

  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input
            type="text"
            {...register("email")}
            name="email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            {...register("password")}
            name="password"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}