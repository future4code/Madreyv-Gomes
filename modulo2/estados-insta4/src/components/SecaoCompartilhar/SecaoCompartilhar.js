import React, {Component} from 'react'
import styled from 'styled-components'
import { SecaoComentario } from '../SecaoComentario/SecaoComentario'

const DivCompartilhar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 5px;
    img{
        width: 30px;
    }
`

export class SecaoCompartilhar extends Component {
    
	render() {
        let comentarioRede = `Compartilhado via ${this.props.rede} com a mensagem:`
		return <DivCompartilhar>
			<img
                src={this.props.icone}
                alt={this.props.rede}
                onClick = {this.props.aoClicar}    
            />
            <SecaoComentario 
                comentario = {comentarioRede} 
                aoEnviar={this.aoCompartilhar}/>
		</DivCompartilhar>
	}
}
