import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardPost from "../../components/CardPost/CardPost";
import CommentCard from "../../components/CommentCards/CommentCard";
import { useProtectedPages } from "../../hooks/useProtectesPage";
import {
  getPostComments,
  getPosts,
  votePost,
  editVotePost,
} from "../../services/Services";
import { Container } from "./styled";

import { ProgressSpinner } from "primereact/progressspinner";

export default function PostPage() {
  useProtectedPages();
  const params = useParams();
  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const [controle, setControle] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let posts = getPosts(setIsLoading);
    posts.then((res) => {
      let filtered = res.filter((post) => {
        return post.id === params.id;
      });

      setPosts(filtered[0]);
    });

    const request = getPostComments(params.id, setIsLoading);
    request.then((res) => {
      setComments(res);
      setIsLoading(false);
    });
  }, [controle]);

  const votePosts = (number, id, requestType) => {
    const body = {
      direction: number,
    };
    if (requestType === null) {
      const request = votePost(body, id);
      request.then((res) => {
        if (Number(res) === 201) {
          setControle(controle + 1);
        }
      });
    } else {
      const request = editVotePost(body, id);

      request.then((res) => {
        if (Number(res) === 200) {
          setControle(controle + 1);
        }
      });
    }
  };

  return (
    <Container>
      {isLoading ? (
        <ProgressSpinner />
      ) : (
        <>
          <CardPost post={posts} voteFunction={votePosts} />
          <CommentCard
            post={posts}
            comments={comments}
            commentUpdate={setControle}
            changeCommentfunction={setComments}
          />
        </>
      )}
    </Container>
  );
}
