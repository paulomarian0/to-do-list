import { api } from "@/libs/axios";
import { INewTask } from "@/types/NewTaskType";
import { AxiosResponse } from "axios";

export async function getAllTasks(authorId: number) {

  const payload = await api.get(`/tasks?authorId=${authorId}`)
    .then((response: AxiosResponse) => {

      return response.data;
    })

  return payload;
}

export async function createNewTask({content} : INewTask, authorId: number){

  const payload = await api.post('/tasks',{
    content,
    authorId
  })
  .then((response: AxiosResponse) => {
    
    return response.data;
  })

  return payload;

}

export async function deleteOneTask(id: number) {
  
  const payload = await api.delete(`tasks?id=${id}`)
  .then((response: AxiosResponse) => {

    return response.data;
  })

  return payload;
}