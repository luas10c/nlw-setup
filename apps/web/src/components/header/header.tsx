import { Plus } from 'phosphor-react'

import { ReactComponent as Logo } from '../../assets/logo.svg'

export const Header = () => {
  return (
    <header>
      <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
        <Logo />
        <button
          type="button"
          className="border border-violet-500 rounded-lg px-6 py-4 flex items-center gap-3 font-semibold uppercase hover:border-violet-300 transition-colors"
        >
          <Plus size={20} className="text-violet-500" />
          Novo Hábito
        </button>
      </div>
    </header>
  )
}
