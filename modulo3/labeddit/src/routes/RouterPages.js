import React from "react";
import { Routes, Route} from "react-router-dom";
import FeedPage from "../pages/Feed/FeedPage";
import LoginPage from "../pages/Login/LoginPage";
import PostPage from "../pages/Post/PostPage";
import SignUpPage from "../pages/SignUp/SignUpPage";


export default function RouterPages({buttonName, setButtonName}) {

  return (
      <Routes>
        <Route path="/login" element={<LoginPage buttonName={buttonName} setButtonName={setButtonName} />} />
        <Route path="/cadastro" element={<SignUpPage setButtonName={setButtonName} />} />
        <Route path="/" element={<FeedPage />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="*" element={<h1>PAGINA NÃO ENCONTRADA</h1>} />
      </Routes>
  );
}
