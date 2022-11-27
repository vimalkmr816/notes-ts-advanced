import { useMemo } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import NoteLayout from "./components/noteLayout"
import { NoteData, RawNote, Tag } from "./interfaces"
import Edit from "./pages/edit"
import Home from "./pages/home"
import NewNote from "./pages/newNote"
import Note from "./pages/note"
import { AppWrapper } from "./styles"
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
			return [...prevNotes, { ...data, id: uuidv4(), tagIds: tags.map(tag => tag.id) }]
		})
	}

	const onAddTag = (tag: Tag) => {
		setTags(prev => [...prev, tag])
	}
	return (
		<AppWrapper>
			<Routes>
				<Route path="/" element={<Home availableTags={tags} notes={notesWithTags} />} />

				<Route path="/new" element={<NewNote onSubmit={onCreateNote} onAddTag={onAddTag} availableTags={tags} />} />
				<Route path="/:id" element={<NoteLayout notes={notesWithTags} />}>
					<Route index element={<Note />} />
					<Route path="edit" element={<Edit />} />
				</Route>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</AppWrapper>
	)
}

export default App
