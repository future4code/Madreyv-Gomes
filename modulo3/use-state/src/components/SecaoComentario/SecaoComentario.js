import React, {useState} from 'react'
import styled from "styled-components"

const CommentContainer = styled.div`
    display: flex;
	flex-direction: column;
	align-items: center;
    justify-content: center;
    padding: 5px;
`

const InputComment = styled.input `
    width: 100%;
    margin-right: 5px;
`

const CommentArea = styled.div`
	display: flex;
    justify-content: center;
    padding: 5px;
	width: 98%;
`

const CommentsBox = styled.div`
	border-bottom: 1px solid gray;
	padding: 1%;
	width: 95%;

	div{
		border-bottom: 1px solid gray;
		width: 90%;
		margin-bottom: 1%;
	}
`

const SecaoComentario = (props) => {

	const [inputComentario, setInputComentario] = useState('')

	const onChangeComentario = (event) => {
		setInputComentario(event.target.value)
	}

	const enviar = () => {
		props.enviarComentario(inputComentario)
		setInputComentario('')
	}
	
	let comentarios =props.comentarios? props.comentarios.map((comentario) => {
		return <div key={comentario}>{comentario}</div>
	}) : <></>
	return (
		<CommentContainer>
			<CommentsBox>
				{comentarios}
			</CommentsBox>
			<CommentArea>
				<InputComment
					placeholder={'Comentário'}
					value={inputComentario}
					onChange={onChangeComentario}
				/>
				<button onClick={() => enviar()} >Enviar</button>
			</CommentArea>
		</CommentContainer>
	)
}


export default SecaoComentario