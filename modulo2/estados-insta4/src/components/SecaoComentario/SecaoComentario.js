import React, {Component} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
	flex-direction: column;
    justify-content: center;
	align-items: center;
    padding: 5px;
`

const InputComentario = styled.input`
	display: flex;
	flex-direction: row;
	align-items: center;
    width: 100%;
    margin-right: 5px;
`

const DivComentarios = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;

`
const DivInput = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 100%;

`

export class SecaoComentario extends Component {
	state = {
		comentario : '',
		comentarios:[]
	}

	onChangeComentario = (e) => {
		this.setState({
			comentario: e.target.value
		})
	}
	
	compartilharComentario = () => {
		this.setState({
			comentario : ""
		})
	}

	clicar = (e) => {
		this.setState({
			comentarios: [...this.state.comentarios, this.state.comentario],
			comentario: "",
		}, ()=>{
			this.props.aoEnviar()
		}
		)
	}
	
	render() {
		let listaComentarios 

		if(this.props.mostrarComentarios === "true"){
			listaComentarios = this.state.comentarios.map((item)=>{
				return <div>{item}</div>
			})

		}

		let aparecerInput = ()=>{
			return <>
						<DivComentarios>
							{listaComentarios}
						</DivComentarios>
						<DivInput>
							<InputComentario
								placeholder={'Comentário'}
								value={this.state.comentario}
								onChange={this.onChangeComentario}
							/>
							<button onClick={this.clicar}>Enviar</button>
						</DivInput>
					</>
		}
		
		//condicional que adapta o componente aos diversos usos com relação a função do botão
		let funcaoAoClicar
		if (this.props.comentario !== "") {
			funcaoAoClicar = this.compartilharComentario
		}else{
			funcaoAoClicar = this.props.aoEnviar
		}

		//condicional que a exibção do componentes.
		let mostrarSecao
		if(this.props.aparecer === 'true'){
			mostrarSecao = aparecerInput()
		}
		else{
			mostrarSecao = <DivComentarios>{listaComentarios}</DivComentarios>
		}
		return <CommentContainer>
			{mostrarSecao}
		</CommentContainer>
	}
}
