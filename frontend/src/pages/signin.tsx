import React from 'react';
import { Button,  Form, Input, notification } from 'antd';
import { NewUserType } from '@/types/NewUserType';
import { createNewUser } from '@/services/newUser';
import { useRouter } from 'next/router';

export default function SignIn() {

  const router = useRouter();

  const onFinish = (values: NewUserType) => {
    console.log('Success:', values);

    createNewUser(values)
    .then(()=>{
      notification.success({message: "New user created successfully!"})
      router.push('/')
    })
    .catch((error)=>{
      
      notification.error({message: error.message})
    })
  };

  return (
<div className='bg-slate-400 h-screen	flex justify-center items-center'>

    <Form
      name="basic"
      labelCol={{ span: 4 }}
      onFinish={onFinish}
      className="bg-white flex flex-col w-2/4 justify-center p-5 rounded-2xl border-black	border-2"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button 
        className='bg-slate-500 text-white'
        htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
</div>
  )
}