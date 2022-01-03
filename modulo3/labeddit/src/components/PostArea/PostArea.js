import React from 'react'
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { BodyArea, PostCardComment, InputText } from './style.css.js'
import { useForm } from '../../hooks/useForm.js';

export default function PostArea(props) {
    const[form,onChangeValue,clear] = useForm({body:"", title:""})

    const handleForm = (e) =>{
        e.preventDefault()
        if(props.title === 'true'){
            const body = {body:form.body, title: form.title}
            props.postFunction(body)
        }else{
            props.postFunction(form.body)
        }
        clear()
    }

    const addTitle = () => {
        if(props.title === "true"){
            return (
                <InputTextarea
                    id='title'
                    name='title' 
                    rows={1} 
                    cols={30} 
                    value={form.title} 
                    onChange={onChangeValue} autoResize
                    placeholder="Titulo"
                    required
                />
            )
        }
    }

    return (
        <PostCardComment>
            <form onSubmit={handleForm}>
                {addTitle()}
                <BodyArea>
                    <InputText
                        id='body'
                        name='body'
                        rows={2} 
                        cols={25} 
                        value={form.body} 
                        onChange={onChangeValue} autoResize
                        placeholder={props.messenger} 
                        required
                    />
                    <Button 
                        icon="pi pi-send" 
                        className="p-button-rounded p-button-text"
                    />
                </BodyArea>
            </form>
        </PostCardComment>
    )
}
