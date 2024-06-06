import React from 'react';
import { showFormattedDate } from './utils';


function NoteItemBody({ title, body, createdAt }) {

    const formattedDate = showFormattedDate(new Date(createdAt));
    return (
        <div className='text-slate-50 mx-4 my-4'>
            <h2 className='text-3xl truncate'>{title}</h2>
            <p className='text-xl text-stone-500'>{formattedDate}</p>
            <p>{body}</p>
        </div>
    );
}

export default NoteItemBody;