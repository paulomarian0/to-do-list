import { api } from "@/libs/axios";
import { NewUserType } from "@/types/NewUserType";
import { AxiosResponse } from "axios";

export async function createNewUser({email, name, password}: NewUserType){

  const payload = await api.post('/users',{
    email,
    name,
    password
  })
  .then((response:AxiosResponse)=>{

    return response.data;
  })

  return payload;
}