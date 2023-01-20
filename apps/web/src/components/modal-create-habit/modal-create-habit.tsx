import React, { FormEvent, useState } from 'react'
import { Check, X } from 'phosphor-react'
import { toast } from 'react-hot-toast'

import { Modal } from '../modal'
import { Checkbox } from '../checkbox'
import { api } from '../../lib/axios'

interface FormInput {
  title: {
    value: string
  }
}

interface Props {
  opened?: boolean
  onClose?(): void
}

const availableWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sabado'
]

export const ModalCreateHabit = (props: Props) => {
  const { opened, onClose } = props
  const [title, setTitle] = useState('')
  const [weekDays, setWeekDays] = useState<number[]>([])

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (!title || !weekDays || weekDays.length === 0) {
      return
    }

    api.post('/habit', {
      title,
      weekDays
    })
    await toast.promise(
      api.post('/habit', {
        title,
        weekDays
      }),
      {
        loading: 'Criando hábito, aguarde...',
        error: 'Erro ao criar hábito, tente-novamente',
        success: 'Hábito criado com sucesso!'
      }
    )
    setTitle('')
    setWeekDays([])
  }

  const handleToggleWeekDay = (weekDay: number) => {
    if (weekDays.includes(weekDay)) {
      const updateWeekDays = weekDays.filter((item) => item !== weekDay)
      setWeekDays(updateWeekDays)
      return
    }

    setWeekDays((oldState) => [...oldState, weekDay])
  }

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
          <form onSubmit={handleSubmit} className="w-full mt-6">
            <div>
              <label className="font-semibold leading-tight" htmlFor="title">
                Qual seu comprometimento?
              </label>
              <input
                type="text"
                id="title"
                onChange={(event) => setTitle(event.target.value)}
                className="w-full p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
                placeholder="ex.: Exercícios, dormir bem, etc..."
                autoFocus
                value={title}
              />
            </div>

            <div className="mt-4">
              <label className="font-semibold leading-tight" htmlFor="">
                Qual a recorrência?
              </label>

              <div className="flex flex-col gap-2 mt-3">
                {availableWeekDays.map((weekDay, index) => {
                  return (
                    <Checkbox
                      key={weekDay}
                      description={weekDay}
                      onChange={(value) => handleToggleWeekDay(index)}
                      checked={weekDays.includes(index)}
                    />
                  )
                })}
              </div>
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
