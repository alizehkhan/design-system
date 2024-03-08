import type {
	Dispatch,
	InputHTMLAttributes,
	ReactNode,
	SetStateAction,
} from 'react'
import { CheckboxContext } from './CheckboxContext'

export type SetState<Value> = Dispatch<SetStateAction<Value>>
export type CheckboxValue = InputHTMLAttributes<HTMLInputElement>['value']

interface CheckboxGroupProps {
	title: string
	name: string
	children: ReactNode
	selected: CheckboxValue[]
	setSelected: SetState<CheckboxValue[]>
	error?: string
	hint?: string
}

export const CheckboxGroup = (props: CheckboxGroupProps) => {
	const { title, error, hint, name, setSelected, selected, children } = props

	return (
		<CheckboxContext.Provider value={{ setSelected, selected, name }}>
			<fieldset>
				<legend aria-describedby={`${name}-hint ${name}-error`}>{title}</legend>
				<p id={`${name}-hint`}>{hint}</p>
				<p id={`${name}-error`}>{error}</p>
				<div>{children}</div>
			</fieldset>
		</CheckboxContext.Provider>
	)
}
