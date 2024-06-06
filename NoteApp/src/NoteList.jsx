import React from "react";
import NoteItem from './NoteItem';

function NoteList ({ notes, onDelete }) {
    return (
        <div className="grid grid-cols-4 gap-4 mx-4">
            
            {
            notes.length === 0 ? (
                    <p className="text-3xl text-slate-50">Tidak ada catatan.</p>
                ) : (
                notes.map((note) => (
                    <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
                ))
            )}
        </div>
    );
}

export default NoteList;