import { deleteOneTask, updateTaskStatus } from '@/services/tasks';
import { DeleteOutlined, EditOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { notification, Space } from 'antd';

interface IProps{
  record: {
    id: number
    authorId: number
    completed: number
    content: string
  }
}

export function ActionIcons(props: IProps) {

  
  const {completed, content, id} = props.record

  function clickCheck(){
    updateTaskStatus(id)
    .then(() => {
      notification.success({ message: "Status changed!" });
    })
    .catch((error) => {
      notification.error({ message: error.message });
    })
  }

  function clickDelete(){
    deleteOneTask(id)
    .then(() => {
      notification.success({ message: "Task deleted!" });
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