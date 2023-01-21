import { AuthContext } from "@/contexts/AuthContext";
import { createNewTask } from "@/services/tasks";
import { INewTask } from "@/types/NewTaskType";
import { Button, Form, Input, notification } from "antd";
import { useContext, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

export function FormNewTask() {

  const { id, setId } = useContext(AuthContext);

  const onFinish = (values: INewTask) => {

    createNewTask(values, +id)
      .then(() => {
        notification.success({ message: "New task added!" });
      })
      .catch((error) => {
        notification.error({ message: error.message });
      })
  };


  useEffect(() => {
    setId(localStorage.getItem('authorId'))
  }, [])

  return (
    <>

      <Form
        onFinish={onFinish}
        className="w-2/4 flex flex-row">
        <Form.Item name="content">
          <Input placeholder="New Task..." />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" className="bg-red-300">Submit</Button>
        </Form.Item>
      </Form>
      <ToastContainer />
    </>
  )
}