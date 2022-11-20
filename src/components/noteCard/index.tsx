import React from "react"

interface NoteCardProps {
	note: Note
}
const NoteCard = ({ note }: NoteCardProps) => {
	return (
		<div>
			<span>{note.title}</span>
			<span>{note.text}</span>
			<div></div>
		</div>
	)
}

export default NoteCard
