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

      router.push('/')
    })
    .catch((error)=>{
      
      notification.error({message: error.message})
    })
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your username!' }]}
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
        <Button htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}