<<<<<<< HEAD
import { ReactNode, createContext, useState } from 'react'
=======
import { differenceInSeconds } from 'date-fns'

import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'

import {
  ActionTypes,
  addNewCycleAction,
  interruptCurrentCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/action'

import { Cycle, cyclesReducer } from '../reducers/cycles/reducer'
>>>>>>> ignite-timer

interface CreateCycleData {
  task: string
  minutesAmount: number
}

<<<<<<< HEAD
interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
=======
interface CyclesContextType {
  cycles: Cycle[]
>>>>>>> ignite-timer
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setSecondsPassed: (seconds: number) => void
  createNewCycle: (data: CreateCycleData) => void
  interruptCurrentCycle: () => void
}

<<<<<<< HEAD
=======
export const CyclesContext = createContext({} as CyclesContextType)

>>>>>>> ignite-timer
interface CyclesContextProviderProps {
  children: ReactNode
}

<<<<<<< HEAD
export const CyclesContext = createContext({} as CyclesContextType)
export function CyclesContextProvider({ children }) {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

=======
export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(
    cyclesReducer,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-timer:cycles-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)

    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])

>>>>>>> ignite-timer
  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
<<<<<<< HEAD
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
=======
    dispatch(markCurrentCycleAsFinishedAction())
>>>>>>> ignite-timer
  }

  function createNewCycle(data: CreateCycleData) {
    const id = String(new Date().getTime())

<<<<<<< HEAD
    const newCycle = {
=======
    const newCycle: Cycle = {
>>>>>>> ignite-timer
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

<<<<<<< HEAD
    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)

    reset()
  }

  function interruptCurrentCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
    setActiveCycleId(null)
=======
    dispatch(addNewCycleAction(newCycle))

    setAmountSecondsPassed(0)
  }

  function interruptCurrentCycle() {
    dispatch(interruptCurrentCycleAction())
>>>>>>> ignite-timer
  }

  return (
    <CyclesContext.Provider
      value={{
<<<<<<< HEAD
=======
        cycles,
>>>>>>> ignite-timer
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
<<<<<<< HEAD
    {children}
</CyclesContext.Provider>
=======
      {children}
    </CyclesContext.Provider>
>>>>>>> ignite-timer
  )
}
