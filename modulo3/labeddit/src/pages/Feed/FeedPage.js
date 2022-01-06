import React, { useState, useEffect } from 'react'
import { useProtectedPages } from '../../hooks/useProtectesPage'
import { ContainerPost, ContainerPostArea } from './styled';
import { createPost, editVotePost, getPosts, votePost } from '../../services/Services';
import CardPost from '../../components/CardPost/CardPost';
import PostArea from '../../components/PostArea/PostArea';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function FeedPage() {
    useProtectedPages()
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [controller, setController] = useState(0)

    useEffect(() => {
        const postList = getPosts(setIsLoading)
        postList.then((res) => {
            setPosts(res || [])
            setIsLoading(false)
        })
    }, [controller])


    const changePost = (id,number) =>{
        const postList = posts.map((post) => {
            if(post.id === id){
                post.userVote = number
                post.voteSum = Number(post.voteSum) + Number(number)
            }
            return post
        })
        setPosts(postList)
    }

    
    const vote =(number,id,requestType) =>{
        const body = {
            "direction": number
        }
        if(requestType === null){
           const request = votePost(body,id)
           request.then((res) => {
               if(Number(res) === 201){
                   changePost(id,number)
               }
           })
        }else{
           const request =  editVotePost(body,id)

           request.then((res)=>{
                if(Number(res) === 200){
                    changePost(id,number)
                }
           })
        }
    }
    
    const postsCards = () => {
        return posts.map((post) => {  
            return (
                <CardPost
                    post={post}
                    voteFunction={vote}  
                />
            )
        })
    } 

    const sentPost = (body, clear) => {
        const request = createPost(body)
        request.then((res)=>{
            alert('Post Criado!')
            setController(controller+1)
        })
    }
    
    return (
        <ContainerPost>
            <ContainerPostArea>
                <PostArea 
                    postFunction={sentPost}
                    title='true'
                    messenger='Mensagem'
                />
            </ContainerPostArea>
            {isLoading? <ProgressSpinner/> : postsCards()}
        </ContainerPost>
    )
}
