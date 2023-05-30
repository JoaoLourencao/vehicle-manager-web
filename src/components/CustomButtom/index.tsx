import { Button } from 'antd'

interface CustomButtonProps {
  onClick: () => void
}

export function CustomButtom(props: CustomButtonProps) {
  return (
    <>
      <Button
        htmlType="button"
        className="h-12 w-full bg-secondary text-lg text-white hover:opacity-80"
        onClick={props.onClick}
      >
        Login
      </Button>
    </>
  )
}
