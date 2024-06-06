import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";

function NoteItem({ title, body, createdAt, id, onDelete}){
    return (
        <div className="border-solid rounded-lg border-2 border-black-500 my-4 h-90 shadow-md">
        <NoteItemBody title={title} createdAt={createdAt} body={body}/>
            <div className="">
            <DeleteButton
            id={id} onDelete={onDelete} />
            </div>
        </div>
    );
}

export default NoteItem;

