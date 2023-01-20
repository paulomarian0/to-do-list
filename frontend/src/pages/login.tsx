import { LogIn } from "@/services/login";
import { useForm } from "react-hook-form";


export default function Login() {

  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    LogIn(data)
      .then((response) => {
        localStorage.setItem('token', response.data.access_token)
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
    </div>
  );
}