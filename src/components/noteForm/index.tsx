import React, { FormEvent, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import CreatableReactSelect from "react-select/creatable"
import styled from "styled-components"
import { v4 as uuidV4 } from "uuid"
import { Note, NoteData, NoteFormProps, Tag } from "../../interfaces"
import { useLocalStorage } from "../../useLocalStorage"
import { StyledCreatableReactSelect, TextInput, TitleInput } from "./styles"

const NoteForm = ({ onSubmit, onAddTag, availableTags, title = "", markdown = "", tags = [] }: NoteFormProps) => {
	const titleRef = useRef<HTMLInputElement>(null)
	const markdownRef = useRef<HTMLTextAreaElement>(null)
	const [selectedTags, setSelectedTags] = useState<Tag[]>(tags)

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
				<label htmlFor="title">Title</label>
				<TitleInput ref={titleRef} id="title" required type="text" />
				<StyledCreatableReactSelect
					onCreateOption={label => {
						const newTag = { id: uuidV4(), label }
						onAddTag(newTag)
						setSelectedTags(prev => [...prev, newTag])
					}}
					value={selectedTags.map(tag => {
						return { label: tag.label, value: tag.id }
					})}
					options={availableTags.map(tag => {
						return { label: tag.label, value: tag.id }
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
				<label htmlFor="markdown">Text</label>
				<TextInput ref={markdownRef} required id="markdown" rows={15} />
				<button type="submit">Save</button>
				<button onClick={() => navigate("/")}>Cancel</button>
			</form>
		</div>
	)
}

export default NoteForm
