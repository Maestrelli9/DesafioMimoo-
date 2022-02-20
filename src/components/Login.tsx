import { Input, Button, Form } from 'antd';
import '../styles/login.css';
import { useForm } from 'react-hook-form';

export default function Login (){

  return <>
    <Form className='Form'>
      <Form.Item>
        <Input
        name='email'
        type='email'
        className='email-input'
        placeholder='Email'
        />
      </Form.Item>
      <Form.Item>
        <Input
        type='password'
        className='password-input'
        placeholder='Senha'
        />
      </Form.Item>
      <Form.Item>
        <Button type='link' className='ButtonForgotPass'>
          Esqueceu sua senha?
        </Button>
      </Form.Item>
      <Form.Item>
        <Button className='Button'>
          Entrar
        </Button>
      </Form.Item>
    </Form>
    </>

}