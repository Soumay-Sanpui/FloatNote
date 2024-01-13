import React from 'react';

const NoteModal = ({ onSave }) => {
    return (
        <>
            <h2 className='font-semibold text-4xl drop-shadow-md mb-2'>NEW FLOTER.</h2>
            <hr />
            <br />
            <form className='flex justify-center'>
                <textarea name="note_val" id="note_val" rows={9} cols={70} className='border text-xl p-2 focus:outline-none active:outline-none focus:shadow-md rounded-md' placeholder='New Floating Note.'></textarea>
            </form>
        </>
    );
};

export default NoteModal;
