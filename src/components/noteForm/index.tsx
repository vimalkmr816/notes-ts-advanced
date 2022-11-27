import React, { FormEvent, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import CreatableReactSelect from "react-select/creatable"
import styled from "styled-components"
import { v4 as uuidV4 } from "uuid"
import { NoteData, Tag } from "../../interfaces"
import { useLocalStorage } from "../../useLocalStorage"
interface NoteFormProps {
	onSubmit: (data: NoteData) => void
	onAddTag: (tag: Tag) => void
	availableTags: Tag[]
}
const TitleInput = styled.input`
	width: 100%;
	padding: 1rem;
	margin: 1rem;
`
const TextInput = styled.textarea`
	width: 100%;
	margin: 1rem;
	overflow: auto;
	padding: 1rem;
`
const StyledCreatableReactSelect = styled(CreatableReactSelect)`
	margin: 1rem;
	width: 100%;
`
const NoteForm = ({ onSubmit, onAddTag, availableTags }: NoteFormProps) => {
	const titleRef = useRef<HTMLInputElement>(null)
	const markdownRef = useRef<HTMLTextAreaElement>(null)
	const [selectedTags, setSelectedTags] = useState<Tag[]>(availableTags)

	const navigate = useNavigate()
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		onSubmit({
			title: titleRef?.current!.value,
			markdown: markdownRef?.current!.value,
			tags: selectedTags,
		})
		navigate("..")
	}
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Title</label>
				<TitleInput ref={titleRef} required type="text" />
				<StyledCreatableReactSelect
					onCreateOption={label => {
						const newTag = { id: uuidV4(), label: label }
						onAddTag(newTag)
						setSelectedTags(prev => [...prev, newTag])
					}}
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
					isMulti
				/>
				<label>Text</label>
				<TextInput ref={markdownRef} required rows={15} />
				<button type="submit">Save</button>
				<button onClick={() => navigate("/")}>Cancel</button>
			</form>
		</div>
	)
}

export default NoteForm
