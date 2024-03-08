'use client'

import { Checkbox, CheckboxGroup } from '@repo/design-system'
import { InputHTMLAttributes, useState } from 'react'

type CheckboxValue = InputHTMLAttributes<HTMLInputElement>['value']

export default function Page(): JSX.Element {
	const [selected, setSelected] = useState<CheckboxValue[]>([])

	return (
		<>
			<h1>Checkbox Group</h1>
			<main>
				<CheckboxGroup
					error="Please select at least one option."
					hint="Select all that apply."
					selected={selected}
					setSelected={setSelected}
					title="Which of these are vegetables?"
					name="vegetables"
				>
					<Checkbox value="apple">Apple</Checkbox>
					<Checkbox value="cheese">Cheese</Checkbox>
					<Checkbox value="broccoli">Broccoli</Checkbox>
					<Checkbox value="leek">Leek</Checkbox>
				</CheckboxGroup>
			</main>
		</>
	)
}
