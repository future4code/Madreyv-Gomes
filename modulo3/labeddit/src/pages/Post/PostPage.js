import React from 'react'
import { useUnprotectedPage } from '../../hooks/useUnprotectedPage'

export default function PostPage() {
    useUnprotectedPage()
    return (
        <div>
            PostPage
        </div>
    )
}
