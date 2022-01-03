export const goToLogin = (navigator) =>{
    navigator('/login')
}
export const goToSignup = (navigator) =>{
    navigator('/cadastro')
}
export const goToFeed = (navigator) =>{
    navigator('/')
}
export const goToPost = (navigator,id) =>{
    navigator(`/post/${id}`)
}