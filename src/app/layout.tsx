'use client'
import CustomHeader from '@/components/CustomHeader'
import {
  CarOutlined,
  DownOutlined,
  HomeOutlined,
  PlusCircleOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons'
import { Dropdown, Image, Layout, Menu, MenuProps, Space } from 'antd'
import Link from 'next/link'
import React, { ReactNode, useState } from 'react'
import './globals.css'

const { Content, Footer, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

export const metadata = {
  title: 'Vehicle Manager',
  description: 'Gerenciador de veículos',
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
]

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#060739',
  position: 'sticky',
  top: 0,
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
}

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  backgroundColor: '#fff',
  position: 'fixed',
  bottom: '0',
  width: '100%',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <html lang="en">
      <body className={`bg-default-bg text-primary`}>
        <Layout className="hidden sm:flex" style={{ minHeight: '100vh' }}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <div className="m-auto my-5 max-h-[150px] max-w-[150px] rounded-full px-2 text-center">
              <Image
                preview={false}
                alt="teste"
                className="w-full rounded-full"
                src="data:image/png;base64,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"
              />
            </div>
            <Menu
              theme="dark"
              defaultSelectedKeys={['1']}
              mode="inline"
              items={items}
            />
          </Sider>
          <Layout>
            <CustomHeader
              title="Dashboard"
              userName="João Lourenção"
              company="ML Motos Car"
            />
            <Content className="px-5">
              <div className="rounded-lg bg-white p-5 shadow-md">
                {children}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              ML Motos Car ©2023 Created by Jão Otavio
            </Footer>
          </Layout>
        </Layout>
        <Layout className="flex sm:hidden" style={{ minHeight: '100vh' }}>
          <div className="rounded-b-xl shadow-md" style={headerStyle}>
            <div className="flex flex-row place-content-between">
              <Dropdown
                menu={{ items }}
                trigger={['click']}
                className="flex flex-row gap-2 self-center p-5"
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <span className="text-base">ML Motos Car</span>
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
              <div className="flex flex-col p-5">
                <PlusCircleOutlined style={{ fontSize: 20, marginBottom: 4 }} />
                <small>Novo veículo</small>
              </div>
            </div>
          </div>
          <Content style={contentStyle}>
            <div className="m-4 rounded-lg bg-white p-5 shadow-md">
              {children}
            </div>
          </Content>
          <div style={footerStyle}>
            <div className="flex flex-row place-content-around">
              <Link href="/auth/login">
                <div className="flex flex-col p-4">
                  <HomeOutlined style={{ fontSize: 20, marginBottom: 4 }} />
                  <small>Início</small>
                </div>
              </Link>
              <div className="flex flex-col p-4">
                <CarOutlined style={{ fontSize: 20, marginBottom: 4 }} />
                <small>Veículos</small>
              </div>
              <div className="flex flex-col p-4">
                <UsergroupAddOutlined
                  style={{ fontSize: 20, marginBottom: 4 }}
                />
                <small>Pessoas</small>
              </div>
              <div className="flex flex-col items-center p-4">
                <div className="mb-1 h-[20px] w-[20px] rounded-full bg-primary">
                  <Image
                    style={{ width: 20, height: 20 }}
                    preview={false}
                    alt="teste"
                    className="text-center"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F11%2FDoge-Meme-PNG-Photos.png&f=1&nofb=1&ipt=e512cae0661f7dab95124262591f6e5aa7bedb48e8e7936e6217211d23240690&ipo=images"
                  />
                </div>
                <small>Perfil</small>
              </div>
            </div>
          </div>
        </Layout>
      </body>
    </html>
  )
}
