import { getAllTasks } from "@/services/tasks";
import { IGetTasks } from "@/types/GetTasksType";
import {  Table } from "antd";
import { useEffect, useState } from "react"
import { CheckOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { FormNewTask } from "@/components/FormNewTask";
import { ActionIcons } from "@/components/ActionIcons";

export default function Tasks() {

  const [lstTasks, setLstTasks] = useState<IGetTasks[]>([]);



  useEffect(() => {
    const id = Number(localStorage.getItem('authorId'))

    getAllTasks(id)
      .then((response) => {
        setLstTasks(response)
      })
  }, [])

  const columns = [
    {
      title: 'Status',
      dataIndex: 'completed',
      key: 'completed',
      render: (text: any) =>
        text === 1 ?
          <CheckOutlined /> : <ClockCircleOutlined />
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
      render: (text: any, record: any) =>
        record.completed === 1 ?
          <span className="line-through">
            {text}
          </span>
          :
          <span>{text}</span>
    },
    {
      title: 'Action',
      render: (text: any, record: any) =>
      (
      <ActionIcons record={record}/>
      )
    }
  ];

  return (

    <div>
      <div className="flex w-full justify-center p-5">
        <FormNewTask />
      </div>
      <Table
        className="h-2/4"
        dataSource={lstTasks}
        columns={columns}
        rowKey="id"
      />
    </div>

  )
}