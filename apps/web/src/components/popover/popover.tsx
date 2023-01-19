import ReactDOM from 'react-dom'

interface Props {
  opened?: boolean
  onClose?(): void
  children: React.ReactNode
}

export const Popover = (props: Props) => {
  const { opened, onClose, children } = props

  if (!opened) {
    return null
  }

  return ReactDOM.createPortal(
    <div className="fixed inset-0" onClick={onClose}>
      {children}
    </div>,
    document.getElementById('root') as HTMLElement
  )
}
