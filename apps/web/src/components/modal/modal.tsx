import ReactDOM from 'react-dom'

interface Props {
  opened?: boolean
  onClose?(): void
  children: React.ReactNode
}

export const Modal = (props: Props) => {
  const { opened, onClose, children } = props

  if (!opened) {
    return null
  }

  return ReactDOM.createPortal(
    <div className="bg-black/80 w-screen h-screen fixed inset-0" onClick={onClose}>
      {children}
    </div>,
    document.getElementById('root') as HTMLElement
  )
}
