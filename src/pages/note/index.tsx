import { Tags, TagWrapper } from "../../components/noteCard/styles"
import { useNote } from "../../components/noteLayout"
import { NoteContent, NoteHeader, NoteWrapper, PrimaryButton, SecondaryButton } from "./styles"

const Note = () => {
	const note = useNote()
	return (
		<NoteWrapper>
			<NoteHeader>
				<h2 style={{ marginRight: "auto" }}>Note</h2>
				<PrimaryButton>Edit</PrimaryButton>
				<SecondaryButton>Delete</SecondaryButton>
			</NoteHeader>
			<NoteContent>
				<div>{note.title}</div>
				<TagWrapper>
					{note?.tags.map(tag => {
						return <Tags>{tag.label}</Tags>
					})}
				</TagWrapper>
				<div>{note?.markdown}</div>
			</NoteContent>
		</NoteWrapper>
	)
}

export default Note
