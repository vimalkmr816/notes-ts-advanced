import NoteForm from "../../components/noteForm"
import { NoteData, Tag } from "../../interfaces"
interface NewNoteProps {
	onSubmit: (data: NoteData) => void
	onAddTag: (tag: Tag) => void
	availableTags: Tag[]
}
const NewNote = ({ onSubmit, onAddTag, availableTags }: NewNoteProps) => {
	return (
		<div>
			<NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
		</div>
	)
}

export default NewNote
