import { Input, Button, Form, Image } from 'antd';
import '../styles/login.css';

export default function Login (){
  return <>
    <Form className='Form'>
      <Form.Item>
        <Input
        className='Input1'
        placeholder='Email'
        />
      </Form.Item>
      <Form.Item>
        <Input
        className='Input2'
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