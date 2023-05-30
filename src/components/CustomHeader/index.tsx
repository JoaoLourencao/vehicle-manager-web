import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Image, MenuProps, Space } from 'antd'

interface CustomHeaderProps {
  title: string
  userName: string
  company: string
}

const items: MenuProps['items'] = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    type: 'divider',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
]

export default function CustomHeader({
  title,
  userName,
  company,
}: CustomHeaderProps) {
  return (
    <div className="flex flex-row place-content-between p-10">
      <span className="text-3xl">{title}</span>
      <Dropdown
        menu={{ items }}
        trigger={['click']}
        className="flex flex-row gap-2 self-center"
      >
        <a onClick={(e) => e.preventDefault()}>
          <div className="h-[50px] w-[50px] rounded-full bg-primary">
            <Image
              style={{ width: 50, height: 50 }}
              preview={false}
              alt="teste"
              className="text-center"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngmart.com%2Ffiles%2F11%2FDoge-Meme-PNG-Photos.png&f=1&nofb=1&ipt=e512cae0661f7dab95124262591f6e5aa7bedb48e8e7936e6217211d23240690&ipo=images"
            />
          </div>
          <Space>
            <div className="flex flex-col gap-0">
              <span className="font-bold">{userName}</span>
              <span className="text-xs">{company}</span>
            </div>
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  )
}
