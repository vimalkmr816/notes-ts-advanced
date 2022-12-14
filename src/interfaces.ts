export interface Note extends NoteData {
	id: string
}
export interface NoteData {
	title: string
	markdown: string
	tags: Tag[]
}
export interface Tag {
	id: string
	label: string
}
export interface RawNote extends RawNoteData {
	id: string
}
export interface RawNoteData {
	title: string
	markdown: string
	tagIds: string[]
}

export interface NoteCardProps {
	note: SimplifiedNote
}

export interface SimplifiedNote {
	tags: Tag[]
	title: string
	id: string
}
export interface HomeProps {
	notes: SimplifiedNote[]
	availableTags: Tag[]
}

export type NoteFormProps = {
	onSubmit: (data: NoteData) => void
	onAddTag: (tag: Tag) => void
	availableTags: Tag[]
} & Partial<NoteData>

export interface NoteLayoutProps {
	notes: Note[]
}

export interface NewNoteProps {
	onSubmit: (data: NoteData) => void
	onAddTag: (tag: Tag) => void
	availableTags: Tag[]
}
