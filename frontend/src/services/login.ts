import { AuthContext } from "@/contexts/AuthContext";
import { api } from "@/libs/axios";
import { ILoginRequest } from "@/types/LoginType";
import { AxiosResponse } from "axios";

export async function LogIn({ email, password }: ILoginRequest) {

  const payload = await api.post('/login', {
    email,
    password
  })
    .then((response: AxiosResponse) => {
      localStorage.setItem('token', response.data.access_token)
      localStorage.setItem('authorId', response.data.id)

      return response.data;
    })

  return payload;
}