import { createContext, Dispatch, type SetStateAction } from 'react'

export type SetState<Value> = Dispatch<SetStateAction<Value>>

type CheckboxContextValue = {
	setSelected: SetState<string[]>
	selected: string[]
	name: string
}

export const CheckboxContext = createContext<CheckboxContextValue | null>(null)
