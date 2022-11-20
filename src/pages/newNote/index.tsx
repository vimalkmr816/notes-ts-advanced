import React from "react"
import NoteForm from "../../components/noteForm"
import { NoteT } from "../../interfaces"
interface NewNoteProps {
	notes: NoteT[] | null
	setNotes: React.Dispatch<React.SetStateAction<NoteT[] | null>>
}
const NewNote = ({ notes, setNotes }: NewNoteProps) => {
	return (
		<div>
			<NoteForm notes={notes} setNotes={setNotes}></NoteForm>
		</div>
	)
}

export default NewNote
