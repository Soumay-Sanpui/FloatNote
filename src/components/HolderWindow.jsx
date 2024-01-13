import React, { useContext, useRef } from 'react'
import NoteCard from './NoteCard'
import { motion } from 'framer-motion'
import { NotesData } from '../context/NotesData'

const HolderWindow = () => {
    const constraintsRef = useRef(null)
    const { current_Data } = useContext(NotesData)

    return (
        <motion.div ref={constraintsRef} className='cursor-default absolute w-screen h-screen p-4 bg-transparent flex gap-7 flex-wrap'>
            {Object.entries(current_Data).map(([key, value]) => (
                <NoteCard key={key} note={value} dragable_win={constraintsRef} />
            ))}
        </motion.div>
    )
}

export default HolderWindow
