import { AuthContext } from '@/contexts/AuthContext';
import { deleteOneTask, updateTaskStatus } from '@/services/tasks';
import { DeleteOutlined, EditOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { notification, Space } from 'antd';
import { useContext } from 'react';

interface IProps{
  record: {
    id: number
    authorId: number
    completed: number
    content: string
  }
}

export function ActionIcons(props: IProps) {

  const {setNeedUpdate} = useContext(AuthContext)
  const {id} = props.record

  function clickCheck(){
    updateTaskStatus(id)
    .then(() => {
      notification.success({ message: "Status changed!" });

      setNeedUpdate(true);
    })
    .catch((error) => {
      notification.error({ message: error.message });
    })
  }

  function clickDelete(){
    deleteOneTask(id)
    .then(() => {
      notification.success({ message: "Task deleted!" });

      setNeedUpdate(true);
    })
    .catch((error) => {
      notification.error({ message: error.message });
    })
  }
  return (
    <Space>
      <CheckCircleOutlined onClick={clickCheck}/>
      <DeleteOutlined onClick={clickDelete}/>
    </Space>
  )
}