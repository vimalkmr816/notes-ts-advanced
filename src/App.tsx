import { useState } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import "./App.css"
import reactLogo from "./assets/react.svg"
import { NoteT } from "./interfaces"
import Edit from "./pages/edit"
import Home from "./pages/home"
import NewNote from "./pages/newNote"
import Note from "./pages/note"
import Show from "./pages/show"

function App() {
	const [notes, setNotes] = useState<NoteT[] | null>(null)
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home notes={notes} />} />
				<Route path="/new" element={<NewNote notes={notes} setNotes={setNotes} />} />
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
