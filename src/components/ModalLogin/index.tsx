import LockOutlined from '@ant-design/icons/LockOutlined'
import MailOutlined from '@ant-design/icons/MailOutlined'
import { Button, Input } from 'antd'
import Link from 'next/link'

export function ModalLogin() {
  const login = () => {
    console.log()
  }

  return (
    <div className="absolute left-1/2 top-1/2 w-80 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-10 shadow-2xl sm:w-auto">
      <div className="mb-5 text-center">
        <p className="text-2xl font-bold">Olá, bem-vindo de volta!</p>
        <small className="opacity-60">
          Faça login para ter acesso a sua empresa.
        </small>
      </div>
      <label htmlFor="email">E-mail</label>
      <Input
        className="mb-5 mt-2 h-10"
        placeholder="empresa@email.com"
        name="email"
        alt="E-mail"
        prefix={
          <MailOutlined
            style={{ color: '#734AFE', fontSize: 15, marginRight: 5 }}
          />
        }
      />

      <label htmlFor="password">Senha</label>
      <Input
        className="mb-5 mt-2 h-10 hover:border-red-600"
        placeholder="+5 caracteres requeridos"
        name="password"
        alt="Password"
        prefix={
          <LockOutlined
            style={{ color: '#734AFE', fontSize: 15, marginRight: 5 }}
          />
        }
      />
      <div className="mt-5 text-center">
        <Link href="/">
          <Button
            htmlType="button"
            className="h-12 w-full bg-secondary text-lg text-white hover:opacity-80"
            onClick={login}
          >
            Login
          </Button>
        </Link>
      </div>
    </div>
  )
}
