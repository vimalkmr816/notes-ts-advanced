import React from "react"
import NoteForm from "../../components/noteForm"
import { NoteData } from "../../interfaces"
interface NewNoteProps {
	onSubmit: (data: NoteData) => void
}
const NewNote = ({ onSubmit }: NewNoteProps) => {
	return (
		<div>
			<NoteForm onSubmit={onSubmit} />
		</div>
	)
}

export default NewNote
