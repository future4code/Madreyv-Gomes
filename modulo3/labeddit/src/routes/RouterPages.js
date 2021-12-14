import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import FeedPage from '../pages/Feed/FeedPage'
import LoginPage from '../pages/Login/LoginPage'
import PostPage from '../pages/Post/PostPage'
import SignUpPage from '../pages/SignUp/SignUpPage'

export default function RouterPages() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginPage/>} />
                <Route path='/cadastro' element={<SignUpPage/>} />
                <Route path='/' element={<FeedPage/>} />
                <Route path='/post/:id' element={<PostPage/>} />
                <Route path='*' element={<h1>PAGINA NÃO ENCONTRADA</h1>} />
            </Routes>
            
        </BrowserRouter>
    )
}
