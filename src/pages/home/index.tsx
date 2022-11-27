import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import Select from "react-select"
import styled from "styled-components"
import NoteCard from "../../components/noteCard"
import { HomeProps, Note, RawNote, Tag } from "../../interfaces"
import { NoteCardWrapper } from "./styles"

const Home = ({ notes, availableTags }: HomeProps) => {
	const navigate = useNavigate()
	const [title, setTitle] = useState("")
	const [selectedTags, setSelectedTags] = useState<Tag[]>([])

	const filteredNotes = useMemo(() => {
		return notes.filter(note => {
			return (title === "" || note.title.toLowerCase().includes(title.toLowerCase())) && (selectedTags.length === 0 || selectedTags.every(tag => note.tags.some(noteTag => noteTag.id === tag.id)))
		})
	}, [title, selectedTags, notes])

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
			<NoteCardWrapper>
				{filteredNotes.map(note => {
					return <NoteCard key={note.id} note={note} />
				})}
			</NoteCardWrapper>
		</div>
	)
}

export default Home
