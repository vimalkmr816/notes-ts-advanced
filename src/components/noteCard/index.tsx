import { Link } from "react-router-dom"
import { NoteCardProps } from "../../interfaces"
import { NoteCardTitle, NoteCardWrapper, Tags, TagWrapper } from "./styles"

const NoteCard = ({ note }: NoteCardProps) => {
	return (
		<Link to={note.id} style={{ color: "inherit" }}>
			<NoteCardWrapper>
				<NoteCardTitle>{note.title}</NoteCardTitle>
				<TagWrapper>
					{note?.tags?.map(tag => {
						return <Tags key={tag.id}>{tag.label}</Tags>
					})}
				</TagWrapper>
			</NoteCardWrapper>
		</Link>
	)
}

export default NoteCard
