import { createContext } from 'react'
import type { CheckboxValue, SetState } from './CheckboxGroup'

type CheckboxContextType = {
	setSelected: SetState<CheckboxValue[]>
	selected: CheckboxValue[]
	name: string
}

export const CheckboxContext = createContext<CheckboxContextType | null>(null)
