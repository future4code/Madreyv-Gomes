import React from 'react'
import { VoteArea } from './styled'

import { Button } from "primereact/button";

export default function VoteCard(props) {
    return (
        <VoteArea>
            <Button
            onClick={() =>
                props.voteFunction(1, props.postId, props.userVote)
            }
            icon="pi pi-thumbs-up"
            className={
                props.userVote === 1
                ? " p-button-rounded p-button-secondary"
                : "p-button-rounded p-button-text"
            }
            />
            <span>{props.voteSum || 0}</span>
            <Button
            onClick={() =>
                props.voteFunction(-1, props.postId, props.userVote)
            }
            icon="pi pi-thumbs-down"
            className={
                props.userVote === -1
                ? " p-button-rounded p-button-secondary"
                : "p-button-rounded p-button-text"
            }
            />
        </VoteArea>
    )
}
