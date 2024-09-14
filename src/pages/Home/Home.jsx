import { useState } from 'react';
import Modal from 'react-modal'; 
import {
    Navbar,
    NoteCard
} from '../../components';

import { MdAdd } from 'react-icons/md';
import { AddEditNotes } from '../AddEditNotes/AddEditNotes';

export const Home = () => {

    const [openAddEditNote, setOpenAddEditNote] = useState({
        isShown: false,
        type: 'add',
        data: null
    });

    Modal.setAppElement('#root');



    const handleOpenAddEditNote = () => {
        setOpenAddEditNote({
                isShown: true,
                type: 'add',
                data: null
            });
        
    }

    return (
        <>
            <Navbar />

            <div className="container mx-auto">
                <div className='grid grid-cols-3 gap-4 mt-8'>
                    <NoteCard
                        title='Meeting on 7th April'
                        date='3rd Apr 2024'
                        content='Meeting with the team to discuss the project'
                        tags={['work', 'meeting']}
                        isPinned={true}
                        onEdit={() => {}}
                        onDelete={() => {}}
                        onPinNote={() => {}}
                    />
                </div>
            </div>

            <button
                className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
                onClick={handleOpenAddEditNote}
            >
                <MdAdd className="text-[32px] text-white"  />
            </button>

            <Modal
                isOpen={openAddEditNote.isShown}
                onRequestClose={() => {}}
                // title={openAddEditNote.type === 'add' ? 'Add Note' : 'Edit Note'}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                    },
                    content: {
                        border: '1px',
                    }
                }}
                shouldCloseOnEsc={true}
                contentLabel="Example modal..."
                className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5"
            >
                <AddEditNotes
                    noteData={openAddEditNote.data}
                    noteType={openAddEditNote.type}
                    onClose={() => setOpenAddEditNote({ isShown: false, type: 'add', data: null })}
                />
            </Modal>
        </>
    )
}
