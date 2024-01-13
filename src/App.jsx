import React, { useState, useEffect } from 'react';
import './App.css';
import HolderWindow from './components/HolderWindow';
import AddNoteBtn from './components/AddNoteBtn';
import { NotesDataProvider } from './context/NotesData';
import { TbHexagonLetterF } from 'react-icons/tb';

function App() {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowIcon(true);
    }, 6000);

    const timeoutId2 = setTimeout(() => {
      setShowIcon(false);
    }, 12000);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
    };
  }, []);

  return (
    <main className='h-screen w-screen bg-zinc-800 relative selection:bg-orange-300'>
      {showIcon ? (
        <TbHexagonLetterF size={"25vw"} className='text-zinc-700 font-bold text-7xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
      ) : (
        <p className='text-zinc-700 font-bold text-7xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          FLOATNOTE.
        </p>
      )}
      <NotesDataProvider>
        <HolderWindow />
        <AddNoteBtn />
      </NotesDataProvider>
    </main>
  );
}

export default App;
