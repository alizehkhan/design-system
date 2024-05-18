import type { ReactNode } from 'react'
import { CheckboxContext, type SetState } from './CheckboxContext'

interface CheckboxGroupProps {
	title: string
	name: string
	children: ReactNode
	selected: string[]
	setSelected: SetState<string[]>
	error?: string
	hint?: string
}

export const CheckboxGroup = (props: CheckboxGroupProps) => {
	const { title, error, hint, name, setSelected, selected, children } = props

	return (
		<CheckboxContext.Provider value={{ setSelected, selected, name }}>
			<fieldset aria-describedby={`${name}-hint ${name}-error`}>
				<legend>{title}</legend>
				<p id={`${name}-hint`}>{hint}</p>
				<p id={`${name}-error`}>{error}</p>
				<div>{children}</div>
			</fieldset>
		</CheckboxContext.Provider>
	)
}
