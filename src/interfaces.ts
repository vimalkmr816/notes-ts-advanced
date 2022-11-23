export interface Note extends NoteData {
	id: number
}
export interface NoteData {
	title: string
	markdown: string
	tags: Tag[]
}
export interface Tag {
	id: number
	label: string
}
export interface RawNote extends RawNoteData {
	id: string
}
export interface RawNoteData {
	title: string
	markdown: string
	tagIds: number[]
}
