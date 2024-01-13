import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { CiEdit } from 'react-icons/ci';
import { GoTrash } from 'react-icons/go';
import { NotesData } from '../context/NotesData';

const NoteCard = ({ dragable_win, note }) => {
    const { current_Data, setCurrent_Data } = useContext(NotesData);
    const handleRemoveNote = () => {
        const updatedData = Object.fromEntries(
            Object.entries(current_Data).filter(([key, value]) => value !== note)
        );
        setCurrent_Data(updatedData);
    };

    return (
        <motion.div
            drag
            dragConstraints={dragable_win}
            className='cursor-default hover:scale-110 transition-all  border border-white text-white h-64 w-60 rounded-2xl hover:shadow-xl relative'
        >
            <div id='note' className='p-2'>
                <p>{note}</p>
            </div>
            <div
                id='noteOpts'
                className='border border-white h-10 w-full absolute bottom-0 rounded-b-2xl hover:shadow-lg hover:bg-white flex items-center justify-around'
            >
                {/* <CiEdit className='text-orange-600 cursor-pointer' size={'1.7em'} /> */}
                <GoTrash
                    className='text-orange-600 cursor-pointer'
                    size={'1.4em'}
                    onClick={handleRemoveNote}
                />
            </div>
        </motion.div>
    );
};

export default NoteCard;
