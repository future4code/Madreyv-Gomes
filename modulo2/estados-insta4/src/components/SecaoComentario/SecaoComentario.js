import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoComentario extends Component {
	state = {
		comentario : ''
	}

	onChangeComentario = (e) => {
		this.setState({
			comentario: e.target.value
		})
	}
	
	compartilharComentario = () => {
		console.log(this.props.comentario + this.state.comentario)
	}

	
	render() {
		let funcaoAoClicar
		if (this.props.comentario !== null) {
			funcaoAoClicar = this.compartilharComentario
		}else{
			funcaoAoClicar = this.props.aoEnvia
		}
		return <CommentContainer>
			<InputComentario
				placeholder={'Comentário'}
				value={this.state.comentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={funcaoAoClicar}>Enviar</button>
		</CommentContainer>
	}
}
