import React from 'react'
import { useProtectedPages } from '../../hooks/useProtectesPage'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL } from '../../services/AxiosConfig'
import { Card } from 'primereact/card';
import { CardPost, ContainerPost } from './styled';

export default function FeedPage() {
    useProtectedPages()
    const url = BASE_URL + '/posts'
    const posts = useRequestData([], url)
    
    const postsCards = posts.map((post) => {
        console.log(post)
        return (
            <CardPost 
                title={post.title} subTitle={post.userId}>
                <p>{post.body}</p>
            </CardPost>
        )
    })
    return (
        <ContainerPost>
            {postsCards}
        </ContainerPost>
    )
}
