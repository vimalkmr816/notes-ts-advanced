import styled from "styled-components"

export const NoteCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	border: 3px solid red;
	border-radius: 10px;
	margin: 1rem;
	padding: 1rem;
`
export const TagWrapper = styled.div`
	display: flex;
	align-content: center;
	justify-content: center;
`

export const Tags = styled.div`
	background-color: blue;
	font-size: 0.8rem;
	padding: 0.2rem 0.8rem;
	border-radius: 5px;
	margin: 0.5rem;
	color: white;
	width: fit-content;
`
export const NoteCardTitle = styled.div`
	font-size: 2rem;
	font-weight: bold;
`
