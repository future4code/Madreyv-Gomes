import React from "react";
import {
    CardBodyArea,
  CardContent,
  CommentArea,
  CommentCont,
  DownCardArea,
  SCard,
} from "./styled";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import { goToPost } from "../../routes/coordinates";
import VoteCard from "../VoteCard/VoteCard";

export default function CardPost(props) {
  const history = useNavigate()
  return (
    <SCard key={props.post.id}>
      <CardBodyArea onClick={()=>goToPost(history,props.post.id)}>
        <h2>{props.post.title}</h2>
        <h4>{props.post.userId}</h4>
        <CardContent>
          <p>{props.post.body}</p>
        </CardContent>
      </CardBodyArea>
      <DownCardArea>
        <VoteCard 
          voteFunction={props.voteFunction}
          postId={props.post.id}
          userVote={props.post.userVote}
          voteSum={props.post.voteSum}
        />
        <CommentArea>
            <CommentCont>{props.post.commentCount || 0}</CommentCont>
            <Button
            icon="pi pi-comment"
            className="p-button-rounded  p-button-text"
            />
        </CommentArea>
      </DownCardArea>
    </SCard>
  );
}
