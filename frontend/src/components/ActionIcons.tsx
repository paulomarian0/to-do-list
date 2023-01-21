import { deleteOneTask } from '@/services/tasks';
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
    console.log(id)
  }

  function clickEdit(){
    console.log(id)
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
      <EditOutlined onClick={clickEdit}/>
      <DeleteOutlined onClick={clickDelete}/>
    </Space>
  )
}