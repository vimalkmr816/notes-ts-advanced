import React from "react"
import NoteCard from "../../components/noteCard"
import { NoteT } from "../../interfaces"

interface HomeProps {
	notes: NoteT[] | null
}
const Home = ({ notes }: HomeProps) => {
	const tags: string[] = ["sta", "sat", "dsf", "asdfasd"]

	return (
		<div>
			<h1>Notes</h1>
			<input type="text" />
			<select id="">
				{tags.map(tag => (
					<option key={tag} value={tag}>
						{tag}
					</option>
				))}
			</select>
			<div>
				{notes.map(note => (
					<NoteCard key={note.id} note={note} />
				))}
			</div>
		</div>
	)
}

export default Home
