import { DeleteOutlined, EditOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Space } from 'antd';

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
    console.log(id)
  }
  return (
    <Space>
      <CheckCircleOutlined onClick={clickCheck}/>
      <EditOutlined onClick={clickEdit}/>
      <DeleteOutlined onClick={clickDelete}/>
    </Space>
  )
}