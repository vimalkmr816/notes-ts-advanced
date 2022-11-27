import React from "react"
import { Note, RawNote } from "../../interfaces"

interface NoteCardProps {
	note: RawNote
}
const NoteCard = ({ note }: NoteCardProps) => {
	return (
		<div>
			<div>
				{note.tagIds.map(tag => (
					<span>{tag}</span>
				))}
			</div>
			<span>{note.title}</span>
			<span>{note.markdown}</span>
			<div></div>
		</div>
	)
}

export default NoteCard
