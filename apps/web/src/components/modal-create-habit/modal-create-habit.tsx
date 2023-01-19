import { Check, X } from 'phosphor-react'

import { Modal } from '../modal'

interface Props {
  opened?: boolean
  onClose?(): void
}

export const ModalCreateHabit = (props: Props) => {
  const { opened, onClose } = props

  return (
    <Modal opened={opened} onClose={onClose}>
      <div
        className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 transform-gpu -translate-x-1/2 -translate-y-1/2"
        onClick={(event) => event.stopPropagation()}
      >
        <header>
          <button
            type="button"
            className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-200"
            aria-label="Fechar Modal"
            onClick={onClose}
          >
            <X size={24} />
          </button>
          <h3 className="text-3xl leading-tight font-extrabold">Criar Hábito</h3>
        </header>

        <div>
          <form className="w-full mt-6">
            <div>
              <label className="font-semibold leading-tight" htmlFor="title">
                Qual seu comprometimento?
              </label>
              <input
                type="text"
                id="title"
                className="w-full p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
                placeholder="ex.: Exercícios, dormir bem, etc..."
                autoFocus
              />
            </div>

            <div className="mt-4">
              <label className="font-semibold leading-tight" htmlFor="">
                Qual a recorrência?
              </label>
            </div>

            <button
              type="submit"
              className="w-full mt-6 rounded-lg p-3 flex gap-3 items-center justify-center font-semibold bg-green-600 hover:bg-green-500 transition-colors"
            >
              <Check size={20} weight="bold" />
              Confirmar
            </button>
          </form>
        </div>
      </div>
    </Modal>
  )
}
