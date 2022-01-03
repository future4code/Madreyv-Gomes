import React , {useState} from "react";
import { createComment, editVoteComment, voteComment} from "../../services/Services";
import VoteCard from "../VoteCard/VoteCard";
import { CommentContainer, CommentContainerCard, PostcardContainer } from "./styled";
import PostArea from "../PostArea/PostArea";
 

export default function CommentCard(props) {

    const changeComment = (id, number) => {
        const commentList = props.comments.map((comment) => {
        if (comment.id === id) {
            comment.userVote = number;
            comment.voteSum = Number(comment.voteSum) + Number(number);
        }
        return comment;
        });
        props.changeCommentfunction(commentList);
    };

   
    const vote =  (number, id, requestType)=> {
        const body = {
        direction: number,
        };
        if (requestType === null) {
        const request = voteComment(body, id);
        request.then((res) => {
            if (Number(res) === 201) {
            changeComment(id, number);
            }
        });
        } else {
        const request = editVoteComment(body, id);

        request.then((res) => {
            if (Number(res) === 200) {
            changeComment(id, number);
            }
        });
        }
    };
  const loadComponent = () => {
    return props.comments.map((item) => {
        return (
                <CommentContainer key={item.id}>
                    <p>{item.body}</p>
                    <VoteCard
                    postId={item.id}
                    voteFunction={vote}
                    userVote={item.userVote}
                    voteSum={item.voteSum}
                    />
                </CommentContainer>
        );
      })
    
  };

  const sentComment = (value) => {
      const body = {
        "body": value
      }

      const req = createComment(body, props.post.id)
      req.then((res) => {
        alert(res)
        props.commentUpdate(80)
      })
  }
  return (
        <PostcardContainer>
            <CommentContainerCard>
                <PostArea 
                    postFunction = {sentComment}
                    messenger = "Deixe um comentário"
                    title = "false"
                />
            {loadComponent()}

            </CommentContainerCard>
        </PostcardContainer>
    );
}
