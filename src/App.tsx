import { useMemo, useState } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { uuid } from "uuidv4"
import "./App.css"
import { NoteData, RawNote, Tag } from "./interfaces"
import Edit from "./pages/edit"
import Home from "./pages/home"
import NewNote from "./pages/newNote"
import Note from "./pages/note"
import Show from "./pages/show"
import { useLocalStorage } from "./useLocalStorage"

const App = () => {
	const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", [])
	const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", [])
	const notesWithTags = useMemo(() => {
		return notes.map(note => {
			return { ...note, tags: tags.filter(tag => note.tagIds.includes(tag.id)) }
		})
	}, [notes, tags])
	const onCreateNote = ({ tags, ...data }: NoteData) => {
		setNotes(prevNotes => {
			return [...prevNotes, { ...data, id: uuid(), tagIds: tags.map(tag => tag.id) }]
		})
	}
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home notes={notes} />} />

				<Route path="/new" element={<NewNote onSubmit={onCreateNote} />} />
				<Route path="/:id">
					<Route index element={<Show />} />
					<Route path="edit" element={<Edit />} />
				</Route>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</div>
	)
}

export default App
