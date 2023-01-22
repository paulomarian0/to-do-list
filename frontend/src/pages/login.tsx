import { LogIn } from "@/services/login";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'
import 'react-toastify/dist/ReactToastify.css';
import { ILoginRequest } from "@/types/LoginType";
import { notification } from "antd";

export default function Login() {

  const router = useRouter()

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (requestLogin: ILoginRequest | any) => {

    LogIn(requestLogin)
      .then(() => {
        router.push('/tasks')
      })
      .catch((error) => {
        notification.error({ message: error.message });
      })
  };

  return (
    <div className="bg-slate-500 h-screen	w-full flex justify-center items-center	">
      <form
        className="h-2/4 w-2/4 bg-white flex flex-col text-center gap-5 p-5 rounded-lg rounded-2xl border-black	border-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="flex justify-start">Login on app</h3>
        <div className="flex flex-col">
          <label className="flex justify-start mb-1">Email</label>
          <input
            type="text"
            {...register("email")}
            name="email"
            className="mb-7 rounded-3xl p-1.5 border-solid border-2 border-black"
          />
          <label className="flex justify-start mb-1">Password</label>
          <input
            type="password"
            {...register("password")}
            name="password"
            className="mb-5 rounded-3xl p-1.5 border-solid border-2 border-black"
          />
          <button
            className="bg-slate-500 m-auto w-2/4 flex justify-center rounded-3xl p-2 text-white	hover:bg-slate-400"
            type="submit"
          >Submit</button>
          <span>or<a
            className="underline decoration-1 text-slate-700 hover:text-red-600"
            href="/signin"> sign up</a></span>
        </div>
      </form>
    </div>
  );
}