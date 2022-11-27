import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Select from "react-select"
import NoteCard from "../../components/noteCard"
import { Note, RawNote, Tag } from "../../interfaces"
interface HomeProps {
	notes: RawNote[]
	availableTags: Tag[]
}
const Home = ({ notes, availableTags }: HomeProps) => {
	const navigate = useNavigate()
	const [title, setTitle] = useState("")
	const [selectedTags, setSelectedTags] = useState<Tag[]>([])

	return (
		<div>
			<h1>Notes</h1>
			<button onClick={() => navigate("/new")}>New</button>
			<form>
				<label>Title</label>
				<input type="text" value={title} onChange={e => setTitle(e.target.value)} />
				<label>Tags</label>
				<Select
					isMulti
					value={selectedTags.map(tag => {
						return { label: tag.label, value: tag.id }
					})}
					options={availableTags.map(tags => {
						return { label: tags.label, value: tags.id }
					})}
					onChange={tags => {
						setSelectedTags(
							tags.map(tag => {
								return { label: tag.label, id: tag.value }
							})
						)
					}}
				></Select>
			</form>
			<div>
				{notes?.map(note => (
					<NoteCard key={note.id} note={note} />
				))}
			</div>
		</div>
	)
}

export default Home
