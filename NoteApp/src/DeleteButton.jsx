import React from 'react';

function DeleteButton({ id, onDelete }) {
    return <button className='mb-0 p-4 rounded-lg bg-red-900 text-slate-100' onClick={() => onDelete(id)}>Delete</button>
}

export default DeleteButton;