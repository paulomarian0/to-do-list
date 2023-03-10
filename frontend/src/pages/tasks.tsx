import { getAllTasks } from "@/services/tasks";
import { IGetTasks } from "@/types/GetTasksType";
import { Table } from "antd";
import { useContext, useEffect, useState } from "react"
import { CheckOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { FormNewTask } from "@/components/FormNewTask";
import { ActionIcons } from "@/components/ActionIcons";
import { AuthContext } from "@/contexts/AuthContext";
import { Header } from "@/components/Header";

export default function Tasks() {

  const [lstTasks, setLstTasks] = useState<IGetTasks[]>([]);

  const { needUpdate, setNeedUpdate } = useContext(AuthContext);

  useEffect(() => {
    const id = Number(localStorage.getItem('authorId'))

    getAllTasks(id)
      .then((response) => {
        setLstTasks(response)

        setNeedUpdate(false)
      })
  }, [needUpdate])

  const columns = [
    {
      title: 'Status',
      dataIndex: 'completed',
      key: 'completed',
      width: '20%',
      render: (text: any) =>
        text === 1 ?
          <CheckOutlined /> : <ClockCircleOutlined />
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
      width: '70%',
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
      width: '10%',
      render: (_: any, record: any) =>
        <ActionIcons record={record} />
    }
  ];

  return (

    <div>
      <Header />
      <Table
        className="h-2/4"
        dataSource={lstTasks}
        columns={columns}
        rowKey="id"
      />
    </div>

  )
}