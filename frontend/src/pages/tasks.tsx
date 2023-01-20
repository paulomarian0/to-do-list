import { api } from "@/libs/axios"
import { useEffect } from "react"

export default function Tasks(){

  useEffect(() => {
    api.get('/tasks')
    .then((response) => {
      console.log(response)
    })
  })

  return(
    <>
    taks
    </>
  )
}