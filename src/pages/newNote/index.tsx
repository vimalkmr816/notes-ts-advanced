import NoteForm from "../../components/noteForm"
import { NewNoteProps } from "../../interfaces"

const NewNote = ({ onSubmit, onAddTag, availableTags }: NewNoteProps) => {
	return (
		<div>
			<NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
		</div>
	)
}

export default NewNote
