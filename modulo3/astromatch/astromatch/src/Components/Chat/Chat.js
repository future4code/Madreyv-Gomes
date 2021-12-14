import React, { useState } from 'react'
import { FotoTeste } from '../../Util/Util'
import { CardLista } from '../ListaMatches/ListaMatches.css'
import { AreaChat, AreaInput, AreaMensagem, CardMensagemEnviada, CardMensagemRecebida } from './Chat.css'


export default function Chat() {

    const [mensagenEnviada, setMensagenEnviada] = useState([
        {
            mensagem:'Oi, vi que demos um match! Que tal nos conhecermos um pouco melhor?',
            hora:'10:30',
            origem:'enviada'
        },
        {
            mensagem:'Oi!',
            hora:'10:30',
            origem:'recebida'
        }
    ])

    const [valorInput, setValorInput] = useState('')

    const montarAreaMensagem = () => {
        let areaMensagens = montarCardMensagem()
        return areaMensagens
    }

    const montarCardMensagem = () => {
        return mensagenEnviada.map((mensagem) => {
            if(mensagem.origem == 'enviada'){
                return(
                    <CardMensagemEnviada>
                        <p>{mensagem.mensagem}</p>
                        <span>{mensagem.hora}</span>
                    </CardMensagemEnviada>
                )
            }else{
                return(
                    <CardMensagemRecebida>
                        <p>{mensagem.mensagem}</p>
                        <span>{mensagem.hora}</span>
                    </CardMensagemRecebida>
                )
            }
        })
        
    }

    const onChangeInput =(e) => {
        setValorInput(e.target.value)
    }

    const enviarMensagem = (origem) => {
        const data = new Date()
        let mensagem = {
            mensagem:valorInput,
            origem: origem,
            hora: `${data.getHours()}:${data.getMinutes()}`
        }
        let mensagens = [...mensagenEnviada, mensagem ]
        setMensagenEnviada(mensagens)
    }
    return (
        <>
            <CardLista>
                <div>
                    <img src={FotoTeste} />
                </div>
                <h3>Luke Skywalter</h3>
            </CardLista> 
            <AreaChat>
                <AreaMensagem>
                    {montarAreaMensagem()}
                </AreaMensagem>
                <AreaInput>
                    <input value={valorInput} placeholder="Mensagem" onChange={onChangeInput}/>
                    <img src="https://cdn-icons-png.flaticon.com/512/2983/2983788.png" onClick={() => enviarMensagem('enviada')} />
                </AreaInput>
            </AreaChat>
        </>
    )
}
