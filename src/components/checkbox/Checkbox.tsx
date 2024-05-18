import {
	Ref,
	forwardRef,
	useContext,
	useId,
	type InputHTMLAttributes,
} from 'react'
import { CheckboxContext } from './CheckboxContext'

interface CheckboxProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
	value: string
}

export const Checkbox = forwardRef(
	(props: CheckboxProps, ref?: Ref<HTMLInputElement>) => {
		const { children, name, value, checked, onChange, ...restProps } = props
		const context = useContext(CheckboxContext)

		const id = useId()

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			context?.setSelected && e.target.checked
				? context.setSelected(prevSelected => [...prevSelected, e.target.value])
				: context?.setSelected(prevSelected =>
						prevSelected.filter(selected => selected !== e.target.value)
				  )
			onChange && onChange(e)
		}

		return (
			<div>
				<input
					{...restProps}
					ref={ref}
					type="checkbox"
					id={id}
					value={value}
					name={name ?? context?.name}
					checked={checked ?? context?.selected.includes(value)}
					onChange={handleChange}
				/>
				<label htmlFor={id}>{children}</label>
			</div>
		)
	}
)
