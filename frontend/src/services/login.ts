import { api } from "@/libs/axios";
import { IValuesProps } from "@/types/LoginType";
import { AxiosResponse } from "axios";

export async function LogIn({ email, password }: IValuesProps) {

  const payload = await api.post('/login', {
    email,
    password
  })
    .then((response: AxiosResponse) => {
      localStorage.setItem('token', response.data.access_token)

      return response.data;
    })

  return payload;
}