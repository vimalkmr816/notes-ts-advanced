import React, { useState } from "react"
import { NoteT } from "../../interfaces"
import { useLocalStorage } from "../../useLocalStorage"
interface NoteFormProps {
	notes: NoteT[] | null
	setNotes: React.Dispatch<React.SetStateAction<NoteT[] | null>>
}

const NoteForm = ({ notes, setNotes }: NoteFormProps) => {
	// const [note, setNote] = useLocalStorage<NoteT | null>()
	const [title, setTitle] = useState("")
	const [text, setText] = useState("")

	const handleAddNote = (e: React.SyntheticEvent) => {
		e.preventDefault()
		const newNote = [
			...[notes],
			{
				title: title,
				text: text,
			},
		]
		setNotes(prevState => newNote)
	}
	return (
		<div>
			<form onSubmit={handleAddNote}>
				<label>Title</label>
				<input type="text" value={note?.title} onChange={e => setTitle(e.target.value)} />
				<label>Tags</label>
				<input type="text" />
				<label>Text</label>
				<input type="text" value={note?.text} onChange={e => setText(e.target.value)} />
			</form>
		</div>
	)
}

export default NoteForm
