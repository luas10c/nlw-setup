import { useState } from 'react'
import { Plus } from 'phosphor-react'

import { ReactComponent as Logo } from '../../assets/logo.svg'

import { ModalCreateHabit } from '../modal-create-habit'

export const Header = () => {
  const [openedCreateHabit, setOpenedCreateHabit] = useState(false)

  return (
    <header>
      <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
        <Logo />

        {openedCreateHabit && (
          <ModalCreateHabit
            opened={openedCreateHabit}
            onClose={() => setOpenedCreateHabit((oldState) => !oldState)}
          />
        )}

        <button
          type="button"
          className="border-2 border-transparent border-violet-300 hover:border-violet-500 rounded-lg px-6 py-4 flex items-center gap-3 font-semibold uppercase focus:outline-none focus:ring-2 focus:ring-violet-700 focus:ring-offset-2 focus:ring-offset-background transition-colors"
          onClick={() => setOpenedCreateHabit((oldState) => !oldState)}
        >
          <Plus size={20} className="text-violet-500" />
          Novo Hábito
        </button>
      </div>
    </header>
  )
}
