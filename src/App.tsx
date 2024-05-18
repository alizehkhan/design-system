import { useState } from 'react'
import { Checkbox, CheckboxGroup } from './components'

export default function App() {
	const [selected, setSelected] = useState<string[]>([])

	return (
		<>
			<h1>Checkbox Group</h1>
			<main>
				<CheckboxGroup
					error="Please select at least one option."
					hint="Select all that apply."
					title="Which of these are vegetables?"
					name="vegetables"
					selected={selected}
					setSelected={setSelected}
				>
					<Checkbox value="apple">Apple</Checkbox>
					<Checkbox value="cheese">Cheese</Checkbox>
					<Checkbox value="broccoli">Broccoli</Checkbox>
					<Checkbox value="leek">Leek</Checkbox>
				</CheckboxGroup>
				<input type="text" />
			</main>
		</>
	)
}
