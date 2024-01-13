import React, { useState, useContext } from 'react';
import { IoAddSharp } from 'react-icons/io5';
import NoteModal from './NoteModal';
import { NotesData } from '../context/NotesData';

const AddNoteBtn = () => {
    const [modal, setModal] = useState(false);
    const { current_Data, setCurrent_Data } = useContext(NotesData);

    const handleClick = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    const handleSave = (newNote) => {
        // Update the context data with the new note
        setCurrent_Data((prevData) => ({
            ...prevData,
            [`d${Object.keys(prevData).length + 1}`]: newNote,
        }));
        closeModal();
    };

    return (
        <div className='relative'>
            <div className='absolute bg-white rounded-full right-5 top-5 p-2 cursor-pointer' onClick={handleClick}>
                <IoAddSharp className='text-blue-500' size={'2vw'} />
            </div>

            {modal && (
                <div className='fixed inset-0 bg-gray-500 bg-opacity-65 flex items-center justify-center transition-all shadow-lg'>
                    <div className='bg-white p-5 rounded-md w-3/4 h-3/4 relative'>
                        <NoteModal onSave={handleSave} />
                        <div id="btnContainer" className='flex absolute gap-8 bottom-5 '>
                            <button className="border p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600" onClick={closeModal}>close</button>
                            {/* Save button triggers handleSave with the new note value */}
                            <button className="border p-2 rounded-md bg-blue-500 text-white hover:bg-blue-600" onClick={() => handleSave(document.getElementById('note_val').value)}>save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddNoteBtn;
