import { api } from "@/libs/axios";

type ValuesProps = {
  email: string;
  password: string
}
export async function LogIn(data: ValuesProps) {

  const payload = await api.post('/login', {
      email: data.email,
      password: data.password
  })
  


  return payload;
}